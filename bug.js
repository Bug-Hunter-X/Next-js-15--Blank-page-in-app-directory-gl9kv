```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
      <p>This is a simple Next.js 15 app.</p>
    </div>
  );
}
```
This code will produce a blank page in Next.js 15 app directory if you forget to add `'use client'` directive at the top of the file.  Next.js 15 introduces a new `app` directory with a client-side rendering model by default. If this directive is missing, the component won't render correctly.