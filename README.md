# Next.js 15 Blank Page Bug

This repository demonstrates a common issue encountered when developing Next.js 15 applications using the app directory. The problem arises from forgetting to include the `'use client'` directive at the top of a component file, resulting in a blank page despite seemingly correct code.

## Bug Description

A Next.js 15 application using the app directory structure might render a blank page when a component is missing the `'use client'` directive. This is because the app directory employs a client-side rendering model by default. Without this directive, the component won't render properly.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the blank page in the browser.

## Solution

The solution is to add the `'use client'` directive to the top of the component file, like this:

```javascript
'use client';
// Your component code here
```

This tells Next.js to render the component on the client-side, resolving the blank page issue.