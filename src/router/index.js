import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/account',
		name: 'account',
		component: AccountView,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
