<template>
    <div class="card">
        <AddCredView/>
    </div>
</template>
<script>
import AddCredView from './AddCredView.vue'
export default {
    name: "RightpaneView",
    data() {
    },
    components: { AddCredView }
}
</script>
<style scoped>
    .card{
        width: 700px;
        border-radius: 10px;
        background: white;
        height: 450px;
        z-index: 100;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 20px;
    }
</style>