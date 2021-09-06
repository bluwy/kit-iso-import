<script>
	import { browser } from '$app/env';
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
	import { foo } from '$lib/client-module?client';
	import { hey } from '$lib/server-module?server';
	import camelcase from 'camelcase?client';
	import { trim } from 'lodash-es?server';

	// In normal vite app, import.meta.env.SSR can be used
	if (browser) {
		console.log('foo', foo);
		console.log(camelcase('camel_case'));
	} else {
		console.log('hey', hey);
		console.log(trim(' trim '));
	}
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
