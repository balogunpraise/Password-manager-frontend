<template>
	<div class="credlistpane">
        <CredView/>
        <CredView/>
        <CredView/>
        <CredView/>
        <CredView/>
    </div>
</template>
<script>
import axios from 'axios'
import CredView from './CredView.vue'
export default {
    name: "Credlist",
    data() {
        return {
            data: [],
        };
    },
    methods: {
        async getCredentials() {
            const result = await axios.get("logincredentials/getallcredentials");
            this.data = result;
        },
    },
    // async created() {
    //     const response = await axios.get('user', {
    //         headers: {
    //             Authorization: 'Bearer' + JSON.parse(localStorage.getItem('token'))
    //         }
    //     })
    // },
    components: { CredView }
}
</script>
<style scoped>
.credlistpane {
	width: 100%;
	height: 90vh;
	background: white;
	padding: 10px 10px;
}
</style>
