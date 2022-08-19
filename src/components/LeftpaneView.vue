<template>
    <div class="card">
        <div v-for="m in creds" :key="m.id" class="cred">
            <CredView :cred="m"/>
        </div>
    </div>
</template>
<script>
import CredView from './CredView.vue'
export default {
    name: "LeftpaneView",
    data() {
        return {};
    },
    props: {
        creds: Array
    },
    components: { CredView }
}
</script>
<style scoped>
    .card{
        width: 400px;
        border-radius: 10px;
        background: white;
        height: 450px;
        z-index: 100;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
</style>
