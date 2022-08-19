<template>
	<div class="cover">
		<nav>
			<router-link to="/">Signup</router-link>
			<router-link to="/account">Login</router-link>
			<router-link to="/dashboard">Dashboard</router-link>
		</nav>
		<router-view />
	</div>
</template>
<script>
export default {
	name: 'HomeView',
	components: {},
}
</script>
<style scoped></style>
