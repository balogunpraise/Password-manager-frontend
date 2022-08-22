<template>
	<div class="app-inner">
		<Sidebar />
		<Mainpane />
	</div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue'
import Mainpane from '../components/Mainpane.vue'
import axios from 'axios'

export default {
	name: 'DashboardView',
	components: {
		Sidebar,
		Mainpane,
	},
	data() {
		return {
			creds: [],
		}
	},
	async created() {
		const response = await axios.get('user', {
			headers: {
				Authorization: 'Bearer' + localStorage.getItem('token')
			}
		})
	},
	methods: {},
	props: {},
}
</script>
<style scoped>
.app-inner {
	display: flex;
	/* justify-content: space-around; */
	/* padding-left: 50px; */
	align-items: flex-start;
	margin-left: 200px;
	width: calc(100% - 250px);
}
</style>
