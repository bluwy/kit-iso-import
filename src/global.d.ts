/// <reference types="@sveltejs/kit" />

declare module 'camelcase?client' {
	import * as all from 'lodash-es';
	export = all;
}

declare module 'lodash-es?server' {
	import * as all from 'lodash-es';
	export = all;
}
