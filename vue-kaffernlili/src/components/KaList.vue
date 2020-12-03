<template>
<div class="Ka-Product">
    <div class="p" v-for="(data, index) in product" :key="index">
        <img :src="data.productP" class="i" v-on:click="Kdes()">
        <h3>{{ data.productN }}</h3>
    </div>
</div>
</template>



<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>

export default {   
    name: 'KaProduct',
    data() {
        return {
            product: [
                {
                    productN:"lili",
                    productP: require('../assets/images/li.jpg'),
                    productI: 1
                    
                },
                
                {
                    productN:"k",
                    productP: require('../assets/images/lili.jpg'),
                    productI: 2
                }        
            ]
            }
        },
    methods: {
        Kdes() {
            this.$router.push({
                name: 'KdetailDes'
            })
        }
        }
    }
</script>

<style lang="css">

img {
    left: 100px;
    right: 50px;
    hegiht: -40px;
    margin: 180px;
    
}



</style>