# Next.js Starter Template
This is a Next.js project template written by Al.ta Cucina.

## How to use
From the main page of this repository click the button "Use this template" to create a new repository based on this template.

## Run the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack
- Next.js 14 with App Router
- Tailwind CSS
- RTK Query

## What you get

#### Features
- Authentication management
- Redux Store setup (with auth and global reducers)
- Internationalization setup (with [next-intl](https://next-intl-docs.vercel.app/)): in the folder /src/18n declare a list of supported locales. Then inside middleware.ts declare the defaultLocale, this will not be visible to users in url bar. To add the translations create a [locale].json file in /src/i18n folder for each locale and that's it. Next-intl will handle the locale preferencies using a cookie called NEXT_LOCALE.

#### Configuration
- VS code configuration to manage imports (sorting and remove)
- Prettier with basic configuration file
- Pre-commit validation with [Husky](https://typicode.github.io/husky/get-started.html)

## Best Practices

- Conventional Commits (check the [CONTRIBUTING](https://github.com/altacucina/nextjs-template/blob/main/CONTRIBUTING.md) file)
