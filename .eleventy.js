import markdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import 'focus-visible';
import EleventyPluginNavigation from '@11ty/eleventy-navigation';
import EleventyPluginSyntaxhighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'

import rollupPluginCritical from 'rollup-plugin-critical'

import filters from './utils/filters.js'
import transforms from './utils/transforms.js'
import shortcodes from './utils/shortcodes.js'

export default function (eleventyConfig) {
	eleventyConfig.setServerPassthroughCopyBehavior('copy');
	
	// ✅ Ensure images and favicons are copied before Vite runs
	eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
	eleventyConfig.addPassthroughCopy({ "src/assets/documents": "assets/documents" });
	
	// Copy static files
	eleventyConfig.addPassthroughCopy('public');
	eleventyConfig.addPassthroughCopy('src/assets/css');
	eleventyConfig.addPassthroughCopy('src/assets/js');
	eleventyConfig.addPassthroughCopy('src/assets/documents');

	// Plugins
	eleventyConfig.addPlugin(EleventyPluginNavigation);
	eleventyConfig.addPlugin(EleventyPluginSyntaxhighlight);
	eleventyConfig.addPlugin(EleventyVitePlugin, {
		tempFolderName: '.11ty-vite',

		viteOptions: {
			publicDir: 'public', // Ensure static files are kept
			clearScreen: false,
			server: {
				mode: 'development',
				middlewareMode: true,
			},
			appType: 'custom',
			assetsInclude: ['**/*.xml', '**/*.txt', '**/*.pdf', '**/*.docx'],
			build: {
				mode: 'production',
				sourcemap: 'true',
				manifest: true,
				rollupOptions: {
					output: {
						// ✅ Ensure CSS & JS are correctly named
						assetFileNames: (assetInfo) => {
							if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
								return 'assets/images/[name]-[hash][extname]'; // Keep images in /assets/images/
							}
							if (/\.(ico|webmanifest|xml|json)$/.test(assetInfo.name)) {
								return 'assets/favicons/[name][extname]'; // Keep favicons in /assets/favicons/
							}
							return 'assets/[name]-[hash][extname]';
						},
						chunkFileNames: 'assets/js/[name].[hash].js',
						entryFileNames: 'assets/js/[name].[hash].js'
					},
					plugins: [rollupPluginCritical({
						criticalUrl: './_site/',
						criticalBase: './_site/',
						criticalPages: [
							{ uri: 'index.html', template: 'index' },
							{ uri: 'posts/index.html', template: 'posts/index' },
							{ uri: '404.html', template: '404' },
						],
						criticalConfig: {
							inline: true,
							dimensions: [
								{ height: 900, width: 375 },
								{ height: 720, width: 1280 },
								{ height: 1080, width: 1920 },
							],
							penthouse: {
								forceInclude: ['.fonts-loaded-1 body', '.fonts-loaded-2 body'],
							}
						}
					})]
				}
			}
		}
	});

	// Filters
	Object.keys(filters).forEach((filterName) => {
		eleventyConfig.addFilter(filterName, filters[filterName])
	});

	// Transforms
	Object.keys(transforms).forEach((transformName) => {
		eleventyConfig.addTransform(transformName, transforms[transformName])
	});

	// Shortcodes
	Object.keys(shortcodes).forEach((shortcodeName) => {
		eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
	});
	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

	// Customize Markdown
	let markdownLibrary = markdownIt({
		html: true,
		breaks: true,
		linkify: true
	}).use(markdownItAnchor, {
		permalink: markdownItAnchor.permalink.ariaHidden({
			placement: 'after',
			class: 'direct-link',
			symbol: '#',
			level: [1, 2, 3, 4]
		}),
		slugify: eleventyConfig.getFilter('slug')
	});
	eleventyConfig.setLibrary('md', markdownLibrary);

	// Layouts
	eleventyConfig.addLayoutAlias('base', 'base.njk');
	eleventyConfig.addLayoutAlias('post', 'post.njk');

	return {
		templateFormats: ['md', 'njk', 'html', 'liquid'],
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: true,
		dir: {
			input: 'src',
			output: '_site',
			includes: '_includes',
			layouts: 'layouts',
			data: '_data'
		}
	};
}
