> This repo is now included at [vite-plugin-iso-import playground](https://github.com/bluwy/vite-plugin-iso-import/tree/master/playground/svelte-kit).

# kit-iso-import

Uses [vite-plugin-iso-import](https://github.com/bluwy/vite-plugin-iso-import) that adds support for `?client` and `?server` import tags.

```js
// Only loads if not ssr
import { foo } from '$lib/client-module?client';
// Only loads in ssr
import { hey } from '$lib/server-module?server';
```

Example import usage in [src/routes/\_\_layout.svelte](./src/routes/__layout.svelte).

For intellisense to work in JS/TS files, make sure you set `"typescript.tsserver.pluginPaths": ["."]` in VSCode's `settings.json`.

Support for Svelte files is not available yet.
