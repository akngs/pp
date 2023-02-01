import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import postcssPresetEnv from 'postcss-preset-env'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: {
        plugins: [
          postcssPresetEnv({
            browsers: '> 1% and last 3 versions',
            features: {
              'nesting-rules': true,
              'media-query-ranges': true,
            },
          }),
        ],
      },
    }),
  ],

  kit: {
    adapter: adapter(),
  },

  vitePlugin: {
    experimental: {
      inspector: true,
    },
  },
}

export default config
