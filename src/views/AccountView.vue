<template>
	<div class="account_body">
		<div class="container">
			<form action="" class="form" id="login">
				<h1 class="form__title">Login</h1>
				<div class="form__message form__message--error">
					Incorrect username/password combination.
				</div>
				<div class="form__input-group">
					<input
						type="text"
						class="form__input"
						autofocus
						placeholder="Username or email"
					/>
				</div>
				<div class="form__input-group">
					<input
						type="text"
						class="form__input"
						autofocus
						placeholder="Password"
					/>
				</div>
				<button class="form__button" type="submit">Continue</button>
				<p class="form__text">
					<a href="#" class="form__link">Forgot your password?</a>
				</p>
				<p class="form__text">
					<a id="linkCreateAccount" class="form__link"
						>Don't have an account? Create account</a
					>
				</p>
			</form>
		</div>
	</div>
</template>
<script>
export default {
	name: 'AccountView',
}
</script>
<style scoped>
.form__body {
	margin: 0;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
}
</style>
