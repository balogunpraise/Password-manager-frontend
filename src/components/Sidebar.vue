<template>
	<aside id="sidebar">
		<div class="logo">
			<img
				src="https://cdn-icons-png.flaticon.com/512/891/891399.png"
				alt="logo"
			/>
			<h2>ULock</h2>
		</div>
		<div class="items">
			<li @click="enableCred()" :class="[cred ? 'active' : '', 'menu']">
				<span class="material-symbols-outlined"> key </span><a>Credentials</a>
			</li>

			<li @click="enableTodo()"  :class="[todo ? 'active' : '', 'menu']">
				<span class="material-symbols-outlined"> checklist_rtl </span
				><a>Add Credentials</a>
			</li>
			<li @click="enableNote()" :class="[note ? 'active' : '', 'menu']">
				<span class="material-symbols-outlined"> note </span><a>Notes</a>
			</li>
		</div>
	</aside>
</template>
<script>
export default {
	name: 'Sidebar',
	data() {
		return {
			cred: true,
			todo: false,
			note: false,
		}
	},
	methods: {
		enableCred() {
			this.cred = true
			this.todo = false
			this.note = false
		},
		enableTodo() {
			this.cred = false
			this.todo = true
			this.note = false
		},
		enableNote() {
			this.cred = false
			this.todo = false
			this.note = true
		},
	},
}
</script>

<style scoped>
#sidebar {
	position: fixed;
	top: 0;
	left: 0;
	background: var(--color-primary);
	width: 200px;
	height: 100%;
	z-index: 10;
}
#sidebar .logo {
	display: flex;
	align-items: center;
	color: #fff;
	padding: 30px 0 0 30px;
}
#sidebar .logo img {
	width: 40px;
	margin-right: 15px;
}
#sidebar .items {
	margin-top: 40px;
}
#sidebar .items li {
	list-style: none;
	padding: 15px 0;
	transition: 0.3s ease;
}
#sidebar .items li:hover {
	background: #253047;
	cursor: pointer;
}
/* #sidebar .items li:nth-child(1) {
	border-left: 4px solid #fff;
} */
.active {
	border-left: 4px solid #fff;
}
#sidebar .items li .material-symbols-outlined {
	color: #253047;
	width: 30px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 14px;
	margin: 0 10px 0 25px;
}
#sidebar .items li:hover .material-symbols-outlined,
#sidebar .items li:hover a {
	color: #f3f4f6;
}
#sidebar .items li a {
	text-decoration: none;
	color: #253047;
	font-weight: 300px;
	transition: 0.3s ease;
}
</style>
