I am an experienced Native Mobile developer (Swift/iOS) learning web development from the ground up, with the goal of becoming an expert in NextJS. Despite knowing HTML and having a pretty good idea of how web development works, my goal was to use this project to have the practice needed and discuss the details and gaps in my knowledge as I build it.

After reading a bit about CSS layouts (which was my major weakness) and React (which seems quite easy to understand at first glance) I started this project using the complete framework to learn faster by struggling to make everything fit together. Since CSS is my biggest struggle, I was ignoring TailWind at first and doing everything the traditional way, but now I'm refactoring it to use the Konsta components and kinda replacing everything with Tailwind.

I'll be continually attaching my [HTML/CSS/JS] files. Please act like a professor to provide feedback and tell if there's a more correct way, but prioritize my immediate question since I'm using this prompt in multiple chats, always focusing on the explanation of how things work under the hoods. Please, skip saying things like "Welcome to this new world of web development" etc., I prefer to go straight to the point.

## The Project

The project for now is a simple to do app that is basically a clone of Microsoft To Do using Parse as a back-end.

The project already has a working authentication and is listing the task lists and tasks for each list, besides it's able to add new tasks using the bottom input.

## Updates

Assume the Next.js version used in this project is the 16 (the new current). Here are some updated info about it:

- Turbopack is stable and used by default with `next dev` and `next build`.
- Previously you had to enable Turbopack using `--turbopack`, or `--turbo`. This is no longer necessary.
- If you need to continue using Webpack, you can opt out with the `--webpack` flag.
- Turbopack fully supports importing Sass files from `node_modules`. Note that while Webpack allowed the legacy tilde (`~`) prefix, Turbopack does not support this syntax. In Webpack: `@import '~bootstrap/dist/css/bootstrap.min.css';`. Turbopack: `@import 'bootstrap/dist/css/bootstrap.min.css';`.
- Turbopack now supports filesystem caching in development, storing compiler artifacts on disk between runs for significantly faster compile times across restarts.

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true, // enables filesystem caching
  },
};

export default nextConfig;
```

- Version 15 introduced Async Request APIs as a breaking change with temporary synchronous compat. Now synchronous access is fully removed. These APIs can only be accessed asynchronously:
  - cookies
  - headers
  - draftMode
  - params in `layout.js`, `page.js`, `route.js`, `default.js`, `opengraph-image`, `twitter-image`, `icon`, and `apple-icon`.
  - `searchParams` in `page.js`.
- To align with the Async Request APIs change, the image generating function now receives `params` and `id` as promises. The `generateImageMetadata` function continues to receive synchronous params.
- The `sitemap` generating function now receives `id` as a promise.
- The App Router in Next.js 16 uses the latest React Canary release, which includes the newly released React 19.2 features and other features being incrementally stabilized. Highlights include:
  - View Transitions: Animate elements that update inside a Transition or navigation.
  - `useEffectEvent`: Extract non-reactive logic from Effects into reusable Effect Event functions.
  - Activity: Render "background activity" by hiding UI with display: none while maintaining state and cleaning up Effects.
- Built-in support for the React Compiler is now stable in Next.js 16 following the React Compiler's 1.0 release. The React Compiler automatically memoizes components, reducing unnecessary re-renders with zero manual code changes.
- The reactCompiler configuration option has been promoted from experimental to stable. It is not enabled by default as we continue gathering build performance data across different application types.
- `cacheLife` and `cacheTag` are now stable. The `unstable_` prefix is no longer needed.
- Next.js 16 includes a complete overhaul of the routing and navigation system, making page transitions leaner and faster. This optimizes how Next.js prefetches and caches navigation data. These changes require no code modifications and are designed to improve performance across all apps, you may see more individual prefetch requests with much lower total transfer sizes. We believe this is the right trade-off for nearly all applications.:
  - **Layout deduplication:** When prefetching multiple URLs with a shared layout, the layout is downloaded once.
  - **Incremental prefetching:** Next.js only prefetches parts not already in cache, rather than entire pages.
- Next.js 16 removes the experimental Partial Pre-Rendering (PPR) flag and configuration options, including the route level segment `experimental_ppr`. Starting with Next.js 16, you can opt into PPR using the `cacheComponents` configuration.
- The `middleware` filename is deprecated, and has been renamed to `proxy` to clarify network boundary and routing focus. The `edge` runtime is NOT supported in `proxy`. The `proxy` runtime is `nodejs`, and it cannot be configured. If you want to continue using the `edge` runtime, keep using `middleware`.
- Local image sources with query strings now require `images.localPatterns.search` configuration to prevent enumeration attacks.
- The default value for `images.minimumCacheTTL` has changed from 60 seconds to 4 hours (14400 seconds). This reduces revalidation cost for images without cache-control headers.
- (Breaking change) The value `16` has been removed from the default `images.imageSizes` array.
- The default value for `images.qualities` has changed from allowing all qualities to only `[75]`.
- A new security restriction blocks local IP optimization by default. Set `images.dangerouslyAllowLocalIP` to true only for private networks.
- The default for `images.maximumRedirects` has changed from unlimited to 3 redirects maximum.
- The `next/legacy/image` component is deprecated. Use `next/image` instead.
- The `images.domains` config is deprecated.
- `next dev` and `next build` now use separate output directories, enabling concurrent execution. The `next dev` command outputs to `.next/dev`. This is the new default behavior, controlled by `isolatedDevBuild`.
- All parallel route slots now require explicit `default.js` files. Builds will fail without them.
- `@next/eslint-plugin-next` now defaults to ESLint Flat Config format, aligning with ESLint v10 which will drop legacy config support.
- In previous versions of Next.js, if you had set `scroll-behavior: smooth` globally on your `<html>` element via CSS, Next.js would override this during SPA route transitions. In Next.js 16, this behavior has changed. By default, Next.js will no longer override your `scroll-behavior` setting during navigation.
- `sass-loader` has been bumped to v16, which supports modern Sass syntax and new features.
- The `next lint` command has been removed. Use Biome or ESLint directly. `next build` no longer runs linting.
- `serverRuntimeConfig` and `publicRuntimeConfig` have been removed. Use environment variables instead.
- The `experimental.dynamicIO` flag has been renamed to `cacheComponents`.
- The `unstable_rootParams` function has been removed. We are working on an alternative API that we will ship in an upcoming minor release.
