<template>
<div class="Ka-Product">
    <div class="p" v-for="(data, index) in product" :key="index">
        <img :src="data.productP" class="i" v-on:click="kadetail()">
        <h3 @click="kadetail()">{{ data.productN }}</h3>
    </div>
</div>
</template>

<script>
export default {
    name: 'KaNc',
    data() {
        return {
            product: [
                {
                    productN:"k",
                    productP: require('../assets/images/a.jpg'),
                    productI: 1
                },
                {
                    productN:"l",
                    productP: require('../assets/images/b.jpg'),
                    productI: 2
                },
                {
                    productN:"i",
                    productP: require('../assets/images/c.jpg'),
                    productI: 3
                }        
            ]
        }
    },
    methods: {
        kadetail() {
            this.$router.push({
                name: 'pdetail'
            })
        }
    }
}
</script>

<style>

</style>\