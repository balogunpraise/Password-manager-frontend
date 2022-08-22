import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/DashboardView'
import AccountView from '../views/AccountView'

const routes = [
	{
		path: '/dashboard',
		name: 'dashboard',
		component: DashboardView
	},
	{
		path: '/',
		name: 'account',
		component: AccountView
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
