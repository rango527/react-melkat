# melkat.link

A simple link blog managed with [Raindrop.io](https://raindrop.io) made for use with [Vercel](https://vercel.com).


## getting started

You will need:

* [a Raindrop token](https://app.raindrop.io/#/settings/apps/dev)
* the ID of a collection for links you want to share

Next up:

1. Copy the build environment example `cp .env.example .env`
2. Put the information you gathered above in
3. Add them to your Vercel app as secrets:
   `vercel secrets add raindrop-token [value]`
   `vercel secrets add raindrop-collection-id [value]`
3. You can now run `npm run now` to start.
