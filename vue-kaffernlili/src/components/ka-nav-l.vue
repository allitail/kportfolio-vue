<template>
 <div class="Ka-Product">
    <div class="p" v-for="(data, index) in product" :key="index">
        <img :src="data.productP" class="i">
        <h3>{{ data.productN }}</h3>
    </div>
</div> 
</template>

<script>
export default {
    name: 'KaNl',
    data() {
        return {
            product: [
                {
                    productN:"k",
                    productP: require('../assets/images/h1.jpg'),
                    productI: 1
                },
                {
                    productN:"",
                    productP: require('../assets/images/h2.jpg'),
                    productI: 2
                }        
            ]
        }
    }
}
</script>

<style>

</style>