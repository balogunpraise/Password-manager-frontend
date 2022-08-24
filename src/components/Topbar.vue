<template>
	<div class="navigation">
		<div class="n1">
			<div class="search">
				<span class="material-symbols-outlined"> search </span>
				<input type="text" placeholder="search" />
			</div>
		</div>
		<div class="profile">
			<span class="material-symbols-outlined"> notifications </span>
			<div class="account-action">
				<div class="pname"></div>
				<a href="" class="logout">Logout</a>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'Topbar',
	methods: {
		async logout() {
			await axios.post('Account/logout')
			this.$router.push('/')
		},
	},
}
</script>
<style scoped>
.navigation {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #fff;
	padding: 7px 30px;
	border-bottom: 3px solid;
	width: 100%;
}
.navigation .search {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 5px 5px;
	border: 1px solid #d7dbe6;
	border-radius: 4px;
}
.navigation .search .material-symbols-outlined {
	margin-right: 14px;
}
.navigation .search input {
	border: none;
	outline: none;
	font-size: 14px;
}
.navigation .profile {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.navigation .profile .material-symbols-outlined {
	margin-right: 20px;
	font-size: 19px;
	font-weight: 400px;
}
.navigation .profile .pname {
	width: 30px;
	height: 30px;
	background: #253047;
	border-radius: 50%;
}
.account-action {
	display: flex;
	justify-content: center;
	gap: 2px;
	align-items: center;
}
.account-action a {
	text-decoration: none;
	color: #253047;
}
</style>