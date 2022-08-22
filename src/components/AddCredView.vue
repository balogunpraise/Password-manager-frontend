<template>
	<form class="add-form" @submit="onSubmit" action="">
		<div class="form-control">
			<label for="">Username</label>
			<input
				v-model="username"
				type="text"
				name="username"
				id=""
				placeholder="Add Username"
			/>
		</div>
		<div class="form-control">
			<label for="">Site Name</label>
			<input
				v-model="siteName"
				type="text"
				name="siteName"
				placeholder="Add site name"
			/>
		</div>
		<div class="form-control">
			<label for="">Site Address</label>
			<input
				v-model="address"
				type="text"
				name="address"
				placeholder="http://example.com"
			/>
		</div>
		<div class="form-control">
			<label for="">Password</label>
			<input v-model="password" type="password" name="password" />
		</div>
		<input type="submit" value="Save Credential" class="btn btn-block" />
	</form>
</template>
<script>
export default {
	name: 'AddTask',
	data() {
		return {
			username: '',
			siteName: '',
			address: '',
			password: '',
		}
	},
	methods: {
		onSubmit(e) {
			e.preventDefault()

			if (!this.username || !this.password || !this.address || this.siteName) {
				alert('Please add credential')
				return
			}

			const newTask = {
				id: Math.floor(Math.random() * 100000),
				text: this.text,
				day: this.day,
				reminder: this.reminder,
			}

			this.$emit('add-task', newTask)

			this.text = ''
			this.day = ''
			this.reminder = false
		},
	},
}
</script>
<style scoped>
.add-form {
	/* margin: auto';' */
}
.form-control {
	margin: 20px 0;
}
.form-control label {
	display: block;
}
.form-control input {
	width: 100%;
	height: 40px;
	/* margin: 5px; */
	padding: 3px 0px;
	font-size: 17px;
}
.form-control-check {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.form-control-check label {
	flex: 1;
}
.form-control-check input {
	flex: 1;
	height: 20px;
}
.btn {
	width: 100%;
	margin: 5px;
	height: 40px;
	font-size: 17px;
	background: rgb(20,33,61);
	border: 1px solid rgb(20,33,61);
	color: white;
	cursor: pointer;
	transition: 0.7s ease;
}
.btn:hover {
	background: white;
	color: rgb(20,33,61);
}
</style>
