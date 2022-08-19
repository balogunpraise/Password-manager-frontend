import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/SignupView.vue'
import AccountView from '../views/AccountView.vue'
import DashboardView from '../views/DashboardView'

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
	{
		path: '/dashboard',
		name: 'dashboard',
		component: DashboardView
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
