import MagicString from 'magic-string';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [iso()]
		}
	}
};

export default config;

function iso() {
	const clientImportRe = /import\s*(?:[\w*{}\n\r\t, ]+\s*from\s*)?(?:"[^"]+\?client"|'[^']+\?client')/gm;
	const serverImportRe = /import\s*(?:[\w*{}\n\r\t, ]+\s*from\s*)?(?:"[^"]+\?server"|'[^']+\?server')/gm;

	return {
		name: 'vite-plugin-iso',
		enforce: 'post',
		resolveId(importee, importer, customOptions, ssr) {
			if (ssr ? importee.endsWith('?server') : importee.endsWith('?client')) {
				return importee.slice(0, -7);
			}
		},
		transform(code, id, ssr) {
			let s,
				m,
				re = ssr ? clientImportRe : serverImportRe;
			while ((m = re.exec(code)) != null) {
				if (!s) s = new MagicString(code);
				s.overwrite(m.index, m.index + m[0].length, '');
			}
			if (s) {
				return {
					code: s.toString(),
					map: s.generateMap()
				};
			}
		}
	};
}
