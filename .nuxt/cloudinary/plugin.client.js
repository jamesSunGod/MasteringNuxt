import { ClientApi } from '~cloudinary/client'

const configuration = {
  "privateCdn": false,
  "cloudName": "dx2mill4a",
  "useComponent": true,
  "secure": true
}

import Vue from 'vue'
import Cloudinary from 'cloudinary-vue'

Vue.use(Cloudinary, {
  configuration
})

export default function (context, inject) {
  const cloudinary = new ClientApi(configuration)

  context.$cloudinary = cloudinary
  inject('cloudinary', cloudinary)
}