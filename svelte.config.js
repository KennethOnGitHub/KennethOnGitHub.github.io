import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex'

//Markdown Rendering
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math'; 
import remarkBreaks from 'remark-breaks'; //This adds a linebreak when have an 'enter' in the markdown file
import rehypeExternalLinks from 'rehype-external-links'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [remarkMath, remarkBreaks],
			rehypePlugins: [
				[
					rehypeKatexSvelte,
					{output: 'mathml'} //without this, both HTML and mathml are rendered, which isn't good. I picked mathml because A: the blog post i read picked it and B: in my own testing html doesn't render nicely
				],
				[
					rehypeExternalLinks,
					{target: '_blank'}
				]
			]
		})
	]
};

export default config;
