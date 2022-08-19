<template>
	<div class="app-inner">
		<Sidebar />
		<div class="main-pane">
			<LeftpaneView :creds="creds"/>
			<RightpaneView />
		</div>
	</div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue'
import LeftpaneView from '../components/LeftpaneView.vue'
import RightpaneView from '../components/RightpaneView.vue'
export default {
	name: 'DashboardView',
	data() {
		return {
			creds: [],
		}
	},
	created() {
		this.creds = [
			{
				id: 1,
				username: 'balogunpraise2@gmail.com',
				password: 'linkTest@123',
				website: 'Linkedin',
				address: 'https://linkedin.com',
			},
			{
				id: 2,
				username: 'onimsi10@yahoo.com',
				password: 'Pa$$w0rd',
				website: 'Yahoo',
				address: 'https://yahoomail.com',
			},
			{
				id: 3,
				username: 'ptestemailaddress@gmail.com',
				password: 'Mailtest@123',
				website: 'Gmail',
				address: 'https://gmail.com',
			},
		]
	},
	methods: {},
	components: {
		Sidebar,
		LeftpaneView,
		RightpaneView,
	},
	props: {},
}
</script>
<style scoped>
.main-pane {
	display: flex;
	justify-content: space-around;
	padding-left: 120px;
}
</style>
