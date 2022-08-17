<template>
	<div class="account">
		<form class="login" action="">
			<div class="form-control">
				<label for="email">Email</label>
				<input name="email" type="email" placeholder="Enter your email" />
			</div>
			<div class="form-control">
				<label for="password">Password</label>
				<input type="password" name="password" />
			</div>

			<div class="form-control form-control-check">
				<label for="remember-me">Remember Me</label>
				<input name="remember-me" type="checkbox" />
			</div>
			<button class="btn" type="submit">Login</button>
		</form>
	</div>
</template>
<script>
export default {
	name: 'AccountView',
}
</script>
<style scoped>
.login {
	width: 50%;
	margin: auto;
}
.form-control {
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 50px;
}
.form-control label {
	display: block;
	/* flex: 4; */
}
.form-control input {
	width: 80%;
	height: 40px;
	padding: 3px 0px;
	font-size: 17px;
}
.form-control-check{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.form-control-check label{
	flex: 1;
}
.form-control-check input{
	flex: 1;
	height: 20px;
}
.btn{
	width: 100%;
	margin: 5px;
	height: 40px;
	font-size: 17px;
	background: #14213d;
	color: white;
	border: 1px solid #14213d;
	cursor: pointer;
	transition: .7s ease;
}
.btn:hover{
	background: white;
	color: #14213d;
}
</style>
