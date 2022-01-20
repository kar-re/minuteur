import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { optimizeImports } from 'carbon-preprocess-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		optimizeImports(),
		preprocess({
			scss: { includePaths: ['node_modules', 'src'], prependData: '@use "src/variables.scss" as *;' },
			// postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		vite: {
			optimizeDeps: {
				include: ['carbon-components-svelte']
			},

			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
