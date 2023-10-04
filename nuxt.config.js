const getDynamicRoutes = require('./sitemapRoutes');
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    //title: 'attentity-new',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // <script src="https://myawesome-lib.js"></script>
      { src: '/js/preline.js' },
      {src: "/cookiebotHide.js"},
      { src: "https://consent.cookiebot.com/uc.js?cbid=abb50094-60dd-4ec0-b61b-4a5f40e6922f" }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
  ],
  googleFonts: {
    families: {
      Poppins: [300,400,500,700,900]
    }

  },
  fontawesome: {
    icons: {
      solid: ['faHome'],
      brands: [
        'faFacebookF',
        'faFacebook',
        'faFacebookSquare',
        'faLinkedinIn',
        'faLinkedin',
        'faTwitter',
        'faTwitterSquare'
  
      ]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios','@nuxtjs/dayjs',
    'vue-social-sharing/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-WPZPZNP'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
  sitemap: {
    cacheTime: 1000 * 60 * 60 * 2,
    path: '/sitemap.xml',
    hostname: 'https://attentity.com',  // Replace with your site's URL
    exclude: [
      '/thank-you'
    ],
    async routes() {
      return await getDynamicRoutes();
    }
  },
}
