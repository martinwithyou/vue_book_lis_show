import Vue from 'vue';
import App from './App.vue'
import router from './router/index'
import modal from './plugin/modal.js'
import VueResource from 'vue-resource'
Vue.use(modal);
Vue.use(VueResource)
console.log(modal.modal(1,9));
new Vue({
	el:"#app",
	router,
	...App
})
