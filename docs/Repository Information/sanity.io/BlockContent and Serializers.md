# Sanity.io - BlockContent and Serializers

In Sanity, "rich text" fields are implemented in the schema as an array of blocks (which is all defined and stored internally at Sanity.io). 

When consuming the data from Sanity, the application needs to know how to serialize the blocks to the correct content. This document covers the "how" and "why" of serializers in this repository.

In the context of the `creators-blog`, one such field is the article `body` field. **Although you can query the `body` field in GraphQL, you should always use the `_raw` version of the text field. In our case, this is `_rawBody`.**

## Why `_raw`?
In short, because it's way harder to use the non-raw version of the field for a number of reasons:
* There is no "convenience" logic to interpret each block as the correct type (e.g., `p`, `strong`, `span`, etc.)
    * In some cases, there are fields you can use to achieve the same result, but you have to perform a lot of manual logic to extract only the necessary/usable fields
* Sanity uses the [Portable Text](https://github.com/portabletext/portabletext) specification
    * Because of this, we can use the provided [`@sanity/block-content-to-react`](https://www.sanity.io/docs/portable-text-to-react) package to simply consume the `_rawBody` field and convert the blocks to site content

## Portable Text and `@sanity/block-content-to-react`
The `@sanity/block-content-to-react` provides the `BlockContent` component, which requires the `blocks` field - this is where we pass the raw body. For example:
```tsx
<BlockContent blocks={_rawBody} serializers={serializers}/>
```

There is no need to manually process **any** of the body content because `BlockContent` handles that for you. **You will need to create serializers for any "custom" or non-default fields that the target block content has**. Some examples that this repository uses:
1. `types.code` - Tells `BlockContent` how to render code blocks
2. `marks.highlight` - Tells `BlockContent` how to render highlighted text
3. `marks.internalLink` - Tells `BlockContent` what to do when an internal link is encountered*
    * _Internal links are not supported in Gatsby sites out-of-the-box; the Sanity GraphQL API doesn't return any slug data, which is required to link the internal resources on the Gatsby side of things_
4. `marks.link` - Tells `BlockContent` what to do when an internal link is encountered

> NOTE: Don't leave empty, yet supported, fields in the serializers object. For example, `list` is a supported field on a serializer object for Sanity, but if you were have this in your serializer object while set to `{}`, your site will not build (and the error isn't really clear). I assume the same goes for any other supported field in serializers. **TL;DR: only add what you need to the serializers object**
