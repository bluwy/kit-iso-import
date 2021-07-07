# kit-iso-import

Testing a vite plugin that adds support for `?client` and `?server` import tags.

Plugin code in [svelte.config.js](./svelte.config.js)

```js
// Only loads if not ssr
import { foo } from '$lib/client-module?client';
// Only loads in ssr
import { hey } from '$lib/server-module?server';
```
