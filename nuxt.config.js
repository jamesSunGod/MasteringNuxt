export default {
  rootUrl: process.env.NODE_ENV === 'production' ? 'https://mastering-nuxt-inky.vercel.app' : 'http://localhost:3000',
  components: true,
  head: {
    titleTemplate: "Mastering Nuxt %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: ['my-style']
    },
    meta: [{
      charset: "utf-8"
    }]
  },
  router: {
    prefetchLinks: false
  },
  plugins: [ '~/plugins/maps.client', '~/plugins/dataApi', '~/plugins/auth.client', '~/plugins/vCalendar.client', '~/plugins/stripe.client'],
  modules: ['~/modules/auth.js', '~/modules/algolia', '~/modules/cloudinary', '@nuxtjs/cloudinary', '~/modules/stripe'],
  buildModules: ['@nuxtjs/tailwindcss'],
  cloudinary: {
    cloudName: 'dx2mill4a',
    useComponent: true
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dx2mill4a/image/upload/'
    }
  },
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0
    },
    standalone: true
  },
  publicRuntimeConfig: {
    auth: {
      cookieName: 'idToken',
      clientId: '813268615129-e00jv4lqk1lijpn1i03lnk14kmd0r2td.apps.googleusercontent.com'
    },
    algolia: {  
      appID: 'FUB4IML060',
      key: '06beb4cdb2def9e93c4ae35006504cb6'
    },
    cloudinary: {
      apiKey: '417443345781744'
    },
    stripe: {
      key: 'pk_test_51KWLYJEz4abAot9SdZFQde1iD6Lxsx88UtHT5NxaOl8ZxKof4A6rj49x4EK4HQZnpMzvyExrUtIxZyY1RuZzplaJ00NtRCtNQs'
    }
  },
  privateRuntimeConfig: {
    algolia: {
      appID: 'FUB4IML060',
      key: '8d4a1d238bd43b765fa4c8fcbcf69057'
    },
    cloudinary: {
      apiSecret: 'xcGLyH0aiqrRBSBpSEtR5xborGo'
    },
    stripe: {
      secretKey: process.env.STRIPE_SECRET_KEY
    }
  }
}