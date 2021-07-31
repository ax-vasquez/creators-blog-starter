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

## Known issues

### GatsbyJS hot reloading doesn't work reliably
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
    * It will still "look" like it's responding to changes, but it will never actually apply them

## Considerations

### Images
All images used in this starter were sourced from [Unsplash](https://unsplash.com/). They provide royalty-free stock images to use in your site (or whatever else you may want to use them for). Be sure to check them out!
