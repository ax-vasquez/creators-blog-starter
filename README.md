# Readme

Just another Gatsby blog starter.

## To do
1. [x] Blog feed
   * [ ] Article page
2. [ ] Bio pages
3. [ ] Project overview page
    * [ ] Project info modal

## In the future...
1. **Documentation sub-system**
    * Allow creators to use their site as a documentation source for their projects
2. **Shoutouts**
    * Some way to present curated lists of information from other sources (e.g., people whose info were referred to during a given project and the creator wants to give credit to)
      * For example, if you created a video game and used a specific YouTuber's videos as a reference, this would be a good way to share the resource with others (as well as help them out by promoting them)

## Considerations

### Images
All images used in this starter were sourced from [Unsplash](https://unsplash.com/). They provide royalty-free stock images to use in your site (or whatever else you may want to use them for). Be sure to check them out!

## Known issues

### GatsbyJS - hot reloading doesn't work reliably
This started happening after implementing the correct setup for Tailwind. Except when making changes to the CSS file, hot reloading seems to work as it should.

**It seems this is some kind of weird issue how webpack is repackaging things under the hood for CSS changes, and only when using TailwindCSS.**
* I don't have time to dig into this more - it's annoying, but can be gotten around by simply stopping and restarting `gatsby develop`

Symptom:
```bash
warn Warning: Event "xstate.after(200)#waitingMachine.aggregatingFileChanges" was sent to stopped service "waitingMachine". This service has already reached its
final state, and will not transition.
Event: {"type":"xstate.after(200)#waitingMachine.aggregatingFileChanges"}
success Re-building development bundle - 4.482s
success Writing page-data.json files to public directory - 0.001s - 0/0 0.00/s
```
* When you see this message in the logs, **hot reloading is broken**
    * ~~It will still "look" like it's responding to changes, but it will never actually apply them~~
        * **UPDATE:** This _may_ end up working if you let it run, but it seems to end in an "out of memory" heap error more often than not - it still seems faster to simply stop and restart it, but it no longer appears to be entirely necessary

### GatsbyJS - lazy-loaded images don't resolve to full resolution when sourced from the file system
This started happening after implementing `react-redux`, specifically after adding the `Provider` component to `wrapRootElement` in both the Gatsby SSR and Gatsby Browser files.

Strangely, this doesn't seem to affect all images; just the ones on the home page. The images in the blog feed always seem to update to the full resolution. The only difference between these two image sets is that the blog feed images come from Sanity plugin and the home page images from the local filesystem plugin.

**UPDATE:** This _does_ appear to work, albeit after a significant delay. I left the home page up for a couple of minutes, after which the images finally resolved to the full-res versions. _It seems that the issue is simply that locally-sourced images will take a long time to finish loading, at least when it comes to local development; this is untested on a build as of yet._

### Sanity - Internal link serialization doesn't expose slug data for related records
According to the Sanity documentation, we should be able to get a slug to the internal document using `const {slug = {}} = props.mark`. However, it seems this only works if you query the data using GROQ. Since Gatsby sites are sourced using GraphQL, and since the Sanity GraphQL API doesn't appear to return the correct data for the `@sanity/block-content-to-react`, **it doesn't currently appear to be possible to use serializers to setup internal links for a Gatsby site**.
* Gatsby nodes are sourced using GraphQL queries during the site build process
    * Unless there is some way to "inject" GROQ data, internal links can only be supported by adding them as "external" links (you'll need to provide the full URL to the would-be page location in the article)

As it currently stands, we can only get the internal ID of the reference. We may be able to use this by querying the data using GROQ when the user accesses the page, but this is not ideal:
* It's an extra step to render the page
* It would require developers to understand both GraphQL and GROQ (plus how/why you need to use one versus the other - not easy to do if unfamiliar with Sanity)