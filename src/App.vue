<template>
	<div class="app">
		<Sidebar />
		<div class="app-inner">
			<nav>
				<router-link to="/">Signup</router-link>
				<router-link to="/account">Login</router-link>
			</nav>
			<router-view />
		</div>
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
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
	display: flex;
}
.app-inner{
	width: 80%;
	flex: 1 1 0;
	padding: 2rem;
	@media (max-width: 768) {
		padding-left: 6rem;
	}
}
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
