<template>
	<div class="app">
		<HomeView />
	</div>
</template>

<script setup>
import HomeView from './views/HomeView.vue'
// import DashboardView from './views/DashboardView.vue'
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
/* .app-inner {
	width: 80%;
	flex: 1 1 0;
	padding: 2rem;
	@media (max-width: 768) {
		padding-left: 6rem;
	}
} */
nav {
	text-align: center;
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
	font-size: 1.2rem;
	text-decoration: none;
	padding: 5px;
}

nav a.router-link-exact-active {
	/* color: #42b983; */
	border-bottom: 1px solid #2c3e50;
}
</style>
