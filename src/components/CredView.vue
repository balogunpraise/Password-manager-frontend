<template>
	<div class="mytask-container">
		<h4><span>Username: </span>{{ cred.username }}</h4>
		<p><span>password: </span>{{ cred.password }}</p>
		<p><span>Website: </span>{{ cred.website }}</p>
		<a :href=cred.address><p><span>password: </span>{{ cred.address }}</p></a>
	</div>
</template>

<script>
export default {
	name: 'CredView',
	props: {
		cred: Object,
	},
}
</script>

<style scope>
.mytask-container {
	background: #f4f4f4;
	border: 1px solid rgb(20,33,61);
	width: 90%;
	padding: 5px 5px;
	margin: auto;
    margin-top: 20px;
    border-radius: 10px;
	cursor: pointer;
}
.reminder {
	border-left: 5px solid green;
}
h3 {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
h4 > span {
	color: rgba(124, 18, 18, 0.76);
}
</style>
