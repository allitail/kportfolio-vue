<template>
<div class="ka-body">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'ka',
    data() {
        return {
            product: [
                {
                    productN:"li",
                    productP: require('../assets/images/lit.png'),
                    productI: 1
                }
            ]
        }
    }
}


</script>

<style>

</style>