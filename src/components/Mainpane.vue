<template>
	<div class="main-body">
		<Topbar />
        <CredlistView/>
	</div>
</template>
<script>
import Topbar from './Topbar.vue'
import CredlistView from './CredlistView.vue'
export default {
	name: 'Mainpane',
	components: {
    Topbar,
    CredlistView
},
}
</script>
<style>
.main-body {
	width: 100%;
	background: white;
}
.hframe {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 5px;
}
.add-button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 160px;
	height: 30px;
	border-radius: 4px;
	border: none;
	background: #253047;
    color: white;
    font-size: 18px;
    cursor: pointer;
}
</style>