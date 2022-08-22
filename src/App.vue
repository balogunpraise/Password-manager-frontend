<template>
	<div class="app" v-cloak>
		<div class="container">
			<form
				v-if="isLoginVisible"
				action=""
				class="form"
				id="login"
				@submit.prevent="handleLogin"
			>
				<h1 class="form__title">Login</h1>
				<div class="form__message form__message--error"></div>
				<div class="form__input-group">
					<input
						v-model="loginemail"
						type="text"
						class="form__input"
						autofocus
						placeholder="Username or email"
					/>
				</div>
				<div class="form__input-group">
					<input
						v-model="loginpassword"
						type="password"
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
					<a @click="showRegister" id="linkCreateAccount" class="form__link"
						>Don't have an account? Create account</a
					>
				</p>
			</form>
			<form
				v-if="isRegisterVisble"
				@submit.prevent="handleRegister"
				action=""
				class="form"
				id="createAccount"
			>
				<h1 class="form__title">Create Account</h1>
				<div class="form__message form__message--error">
					{{ passwordMatchErr }}
				</div>
				<div class="form__input-group">
					<input
						v-model="fullname"
						type="text"
						class="form__input"
						autofocus
						placeholder="Fullname"
					/>
				</div>
				<div class="form__input-group">
					<input
						v-model="username"
						type="text"
						class="form__input"
						autofocus
						placeholder="Username"
					/>
				</div>
				<div class="form__input-group">
					<input
						v-model="registeremail"
						type="email"
						class="form__input"
						autofocus
						placeholder="Email Address"
					/>
				</div>
				<div class="form__input-group">
					<input
						v-model="registerpassword"
						type="password"
						class="form__input"
						autofocus
						placeholder="Password"
					/>
				</div>
				<div class="form__input-group">
					<input
						v-model="confirmpassword"
						type="password"
						class="form__input"
						autofocus
						placeholder="Confirm Password"
					/>
				</div>
				<button class="form__button" type="submit">Continue</button>
				<p class="form__text">
					<a @click="showLogin" id="linkCreateAccount" class="form__link"
						>Already have an account? Sign in</a
					>
				</p>
			</form>
		</div>
		<!-- <AccountView/> -->
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'App.Vue',
	data() {
		return {
			isLoginVisible: true,
			isRegisterVisble: false,
			fullname: '',
			registeremail: '',
			loginemail: '',
			registerpassword: '',
			loginpassword: '',
			confirmpassword: '',
			username: '',
			rememberme: false,
			passwordMatchErr: '',
		}
	},
	methods: {
		showLogin() {
			this.isLoginVisible = true
			this.isRegisterVisble = false
		},
		showRegister() {
			this.isRegisterVisble = true
			this.isLoginVisible = false
		},
		async handleRegister() {
			const splitname = this.fullname.split(' ')
			const data = {
				firstname: splitname[0],
				lastname: splitname[splitname.length - 1],
				email: this.registeremail,
				username: this.username,
				passwordhash: this.registerpassword,
			}
			const response = await axios.post('Account/register', data)
				
		},
		async handleLogin() {
			const response = await axios.post('Account/login', {
				email: this.loginemail,
				password: this.loginpassword,
				rememberme: this.rememberme,
			})
		},
	},
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
	align-items: center;
	justify-content: center;
	font-size: 18px;
}
.container {
	width: 400px;
	max-width: 400px;
	margin: 1rem;
	padding: 2rem;
	box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
	border-radius: var(--border-radius);
	background: white;
}
.container,
.form__input,
.form__button {
	font: 500 1rem 'Quicksand', sans-serif;
}
.form > *:first-child {
	margin-top: 0;
}
.form > *:last-child {
	margin-bottom: 0;
}
.form__title {
	margin-bottom: 2rem;
	text-align: center;
}
.form__message {
	text-align: center;
	margin-bottom: 1rem;
}
.form__message--error {
	color: var(--color-error);
}
.form__input-group {
	margin-bottom: 1rem;
}
.form__input {
	display: block;
	width: 100%;
	padding: 0.75rem;
	box-sizing: border-box;
	border-radius: var(--border-radius);
	border: 1px solid #dddddd;
	background: #eeeeee;
	transition: background 0.2s, border-color 0.2s;
}
.form__input:focus {
	border-color: var(--color-primary);
	background: white;
}
/*
.form__input--error{
	color: var(--color-error);
	border-color: var(--color-error);
} 
.form__input-error-message{
	margin-top: 0.5rem;
	font-size: 0.85rem;
	color: var(--color-error);
}
 */
.form__button {
	width: 100%;
	padding: 1rem 2rem;
	font-weight: bold;
	font-size: 1.1rem;
	color: #ffffff;
	border: none;
	border-radius: var(--border-radius);
	outline: none;
	cursor: pointer;
	background: var(--color-primary);
}
.form__button:hover {
	background: var(--color-primary-dark);
}
.form__button:active {
	transform: scale(0.98);
}
.form__text {
	text-align: center;
	margin-top: 1rem;
}
.form__link {
	color: var(--color-secondary);
	text-decoration: none;
	cursor: pointer;
}
.form__link:hover {
	text-decoration: underline;
}
</style>
