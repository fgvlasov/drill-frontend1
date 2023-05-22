// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/strapi'],
  	strapi: {
    	//url: process.env.STRAPI_URL || 'http://localhost:1337',
		url: process.env.STRAPI_URL || 'https://drill.ptzsite.ru',
  		prefix: '/api',
  		version: 'v4',
  		cookie: {},
  		cookieName: 'strapi_jwt'
  	},
	  css: [
		// SCSS file in the project
		'@/assets/scss/app.scss'
	  ],
})
