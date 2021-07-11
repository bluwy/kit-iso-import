import { isoImport } from 'vite-plugin-iso-import';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [isoImport()]
		}
	}
};

export default config;
