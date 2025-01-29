# Michelle Clement's Portfolio <br>🏃💨

A clean and fast Eleventy website with Vite based on the starter project by Matthias Ott.
* Matthias Ott [github.com/matthiasott/eleventy-plus-vite](https://github.com/matthiasott/eleventy-plus-vite)

View the website [here](https://michelleclement.co.uk/)

## Features - as per starter file

* Eleventy v3
* Eleventy Dev Server with live reload
* Vite v5
* Vite as Middleware in Eleventy Dev Server (uses [eleventy-plugin-vite](https://github.com/11ty/eleventy-plugin-vite/))
* Eleventy build output is post-processed by [Vite](https://vitejs.dev) (with Rollup)
* CSS/Sass post-processing with PostCSS incl. [Autoprefixer](https://github.com/postcss/autoprefixer) and cssnano
* Uses [my own opinionated CSS/Sass structure](https://matthiasott.com/notes/how-i-structure-my-css)
* Critical CSS, generated and inlined via [rollup-plugin-critical](https://github.com/nystudio107/rollup-plugin-critical). The main CSS file is then loaded asynchronously with [Scott Jehl’s `media` loading strategy](https://www.filamentgroup.com/lab/load-css-simpler/) (adds `media="print"` and swaps to `media="all"` once loaded)
* Example implementation of a web font loading strategy ([critical FOFT with preload](https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-preload))
* Basic fluid typography based on [Utopia](https://utopia.fyi)
* Polyfill for [focus-visible](https://matthiasott.com/notes/focus-visible-is-here)