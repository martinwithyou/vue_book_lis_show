import Vue from 'vue';
import VueRouter from 'vue-router'
import home from '../components/home'
import list from '../components/list'
import add from '../components/add'

Vue.use(VueRouter);

let routes=[
    {path:"/home",component:home},
    {path:"/list",component:list},
    {path:"/add",component:add},
];

let router = new VueRouter({
	routes
})

export default router