//https://docs.strapi.io/dev-docs/integrations/nuxt-js
export default defineNuxtConfig({
	modules: ['@nuxtjs/strapi'],
  	strapi: {
    	//url: process.env.STRAPI_URL || 'http://localhost:1337',
		url: 'https://drill.ptzsite.ru',
		
  	},
	  css: [
		// SCSS file in the project
		'@/assets/scss/app.scss'
	  ],
})
