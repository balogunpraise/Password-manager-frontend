<template>
	<div class="cred">
		<div class="basic-info">
			<h3>Facebook</h3>
			<p>https://facebook.com</p>
		</div>
		<div class="logins">
			<form action="">
				<input
					class="my-creds"
					type="text"
					readonly
					value="balogunpraise2@gmail.com"
				/>
				<input
					class="my-creds"
					type="password"
					readonly
					value="balogunpraise2@gmail.com"
				/>
			</form>
		</div>
		<div class="alter">
			<span class="material-symbols-outlined edit"> edit </span>
			<span class="material-symbols-outlined delete"> delete </span>
		</div>
	</div>
</template>
<script>
export default {
	name: 'CredView',
	data() {
		return {}
	},
	methods: {},
	props: {},
}
</script>
<style>
.cred {
	width: 100%;
	height: 80px;
	margin-top: 10px;
	border-left: 4px solid;
	padding: 5px 10px;
	background: #eeeded;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.my-creds {
	width: 200px;
	height: 40px;
	padding: 5px;
	border: none;
	background: #2c3e50;
	color: white;
}
.material-symbols-outlined {
	margin-left: 10px;
	cursor: pointer;
}
.edit {
	color: #009579;
}
.delete {
	color: red;
}
</style>
