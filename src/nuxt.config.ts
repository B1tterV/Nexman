// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      concurrency: 4,
      interval: 500,
    },
    compressPublicAssets: { gzip: true, brotli: true },
    routeRules: {
      "/_nuxt/**": {
        headers: { "Cache-Control": "public, max-age=31536000, immutable" },
      },
      "/public/**": {
        headers: { "Cache-Control": "public, max-age=2592000, immutable" }, // 30 дней
      },
      "/image/**": {
        headers: { "Cache-Control": "public, max-age=604800, immutable" }, // 7 дней
      },
    },
  },

  app: {
    head: {
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no",
      htmlAttrs: { dir: "ltr", lang: "ru" },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon.svg",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon/favicon-96x96.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
      meta: [
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      ],
    },
    baseURL: "/",
  },

  components: [
    {
      path: "~/components",
    },
  ],

  css: ["~/assets/scss/main.scss"],

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    "nuxt-svgo",
  ],

  pages: true,

  vite: {
    build: {
      target: ["esnext", "es2022"],
    },
    esbuild: {
      target: "es2022",
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "es2022",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/base/index" as *;
            @use "~/assets/scss/base/basic-mixins.scss" as *;
          `,
        },
      },
    },
  },

  typescript: {
    typeCheck: true,
    strict: true,
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['node', 'nuxt']
      }
    }
  },

  svgo: {
    global: false,
  },

  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg', 'jpeg', 'png', 'gif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  },

  features: {
    inlineStyles: false
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  },

  compatibilityDate: '2025-07-15'
})