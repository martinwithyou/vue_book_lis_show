import Vue from 'vue';
import App from './App.vue'
import router from './router/index'
import modal from './plugin/modal.js'
import VueResource from 'vue-resource'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(modal);
Vue.use(VueResource)
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
new Vue({
	el:"#app",
	router,
	...App
})
