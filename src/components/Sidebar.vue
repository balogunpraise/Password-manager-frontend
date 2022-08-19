<template>
	<aside>
		<p>
			<span class="material-symbols-outlined"> dashboard </span>
			Dashboard
		</p>
		<div class="navigations">
			<p>
				<span class="material-symbols-outlined"> folder_open </span>
				My folder
			</p>
			<p>
				<span class="material-symbols-outlined"> list_alt </span>
				My logins
			</p>
		</div>
	</aside>
</template>
<script></script>
<style scoped>
aside {
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: column;
	background: #14213d;
	color: white;
	overflow: hidden;
	width: calc(8rem + 5px);
	min-height: 100vh;
	padding: 1rem;
	transition: 0.4s ease-out;
	z-index: 100;
}
p {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.navigations {
	margin-top: 50px;
	height: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 10px;
}
.navigations p {
	cursor: pointer;
	transition: 0.5s ease;
}
.navigations p:hover {
	font-weight: bold;
}
</style>
