<template>
	<div class="app" v-cloak>
		<router-view />
	</div>
</template>

<script>
// import axios from 'axios'
// import DashboardView from './views/DashboardView.vue'
export default {
	name: 'App.Vue',
}
</script>

<style>
#app {
	font-family: 'Fira sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
.app {
	margin: 0;
	height: 100vh;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	font-size: 18px;
}
</style>
