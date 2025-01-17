```javascript
// pages/index.js
'use client';
export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
      <p>This is a simple Next.js 15 app.</p>
    </div>
  );
}
```
Adding `'use client'` directive solves the issue by explicitly telling Next.js to render the component on the client-side.  This is crucial for components within the app directory of Next.js 15.