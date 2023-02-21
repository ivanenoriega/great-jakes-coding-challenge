This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Challenge

Please create a simple SPA based on Next.js with the following specification:

- There should be two pages: posts listing page and post detail page
	- You can fetch data from `https://dummyjson.com/posts` and use it to build detail URLs
	- On the listing page show a list of posts consisting of post titles linked to respective detail
	pages
	- On the detail page show back button (to the listing page), post title, and post content
	- Do some minimal styling using `SCSS` modules (to your taste)
- On initial app load the very first request to fetch data should always be performed on the
server side (SSR), subsequent requests to fetch data should always be performed on the client
side (CSR) directly to `https://dummyjson.com`
- There should be an animated crossfade transition between pages (similar to
[https://next_gj.wrk.lol](https://great-jakes-coding-challenge.vercel.app))
	- Important note: the transition should start only after the next page data is fetched and
ready
- The app should have cache (object level cache, e.g. cache based on `Map`): if data for
requested URL was previously fetched from the API, then the API shouldn't be requested again
- Don't spend too much time and keep the implementation as simple as possible

## App deployed

Take a look at the app [here](https://great-jakes-coding-challenge.vercel.app).
