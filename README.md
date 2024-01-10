## Answers to the questions:

1. **Optimizing List Rendering:**
    - Memoize components with `React.memo` to avoid re-renders.
    - For huge lists, use a virtualized list.
    - Use `useCallback` to memoize functions passed to child components.
    - Use `useMemo` to memoize values passed to child components.
    - Fetch and combine data as needed.

2. **State vs Props in React:**
    - State is owned by the component and can be changed.
    - Props are owned by a parent component and can't be changed.
    - For a feature like search that affects multiple components, we can save the input's value in state and pass it to the components that need it.

3. **TypeScript in React:**
    - Caches errors before going into production, by catching them during development.
    - Makes code more clean and readable, also self-documenting.
    - Good for defining prop types and catching misuse.

4. **Pagination/Infinite Scrolling:**
    - Save of the current page inside state, and fetch data as needed when the page changes, or reaching the end of the list.

5. **Useful TypeScript Features:**
    - Generics for reusable components.
    - Utility types such as Omit, Partial, Pick, Record, etc...
    - Decorators, thou they are not production ready yet, and also a lot less used in React.

6. **Context API/Redux:**
    - Context API is better for more simple state logic that doesn't change frequently.
    - Redux offers a lot more rich set of features, and better for more complex state logic. (Thou there are other alternatives like Zustand what gained a lot of popularity recently caused by use-query)
    - Wrap you App with the Context provider and use each of it's hooks to access the state and dispatch actions.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
