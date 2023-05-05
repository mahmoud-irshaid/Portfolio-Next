# Mahmoud Irshaid Portfolio

![Mahmoud Irshaid - Software Engineer and Consultant in jordan]

This is my portfolio website, proudly built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/) and [Tailwind](https://tailwindcss.com/). The content is managed through [Sanity](https://sanity.io/). It uses the [pnpm](https://pnpm.io/) package manager by default, but can be used with `npm` or `yarn` as well.

Previously I built my website using Gatsby, but decided to move to Next.js due to their major improvements that make it my first choice, not only for applications, but also for websites now.

1.
## Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Third-Party Services used

### Sanity (Content Management System)

Sanity Studio comes preinstalled under `/src/app/(admin)`, so you do not have to run a separate app in order to update your content.

Sanity is very easy to get started with either by signing up through their website or by using the command line:

```sh
npm create sanity@latest
```

At the end of this process you will get a Project ID. Add this to your `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID` file to get started (rename the `.env.example` file to get started more easily. There the `NEXT_PUBLIC_SANITY_DATASET` and `NEXT_PUBLIC_SANITY_API_VERSION` are prefilled with the defaults).

### Sentry (Error & Exception Tracking)


### Vercel Analytics

[Vercel Analytics](https://vercel.com/analytics) is installed under `/src/app/(user)/layout.tsx`. If you do not want to use Vercel Analytics or don't intent to host your website on Vercel, you can remove this.

There is also a `vercel.json` file in the root of the project. This is fairly specific to my website, so you should likely remove this or clear the redirects that are irrelevant to your setup.
