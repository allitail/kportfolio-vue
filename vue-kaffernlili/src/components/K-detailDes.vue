<template>
  <div class="Ka-detail">
    <div class="p" v-for="(data, index) in product" :key="index">

        <img :src="data.productP" v-on:click="imgr">

        <h3>{{ data.productN }}</h3>
        <Option>￦ 110,000</Option>
        <button id="btnb" v-on:click="btnbasket">장바구니 담기</button>
        </div>

<!-- <li class="k-detail">
    <router-link class="k-nav" to="/Kanote">
    a
    </router-link>
</li> -->


</div>
</template>

<script>
export default {
    name: 'KdetailDes',
         methods: {
            imgr: function(event) {
                this.$router.push('/pdetail')
            },
            btnbasket: function(event) {
                this.$router.push('/ka')
            }
            
         },

    data() {
        return {
            product: [
                {
                    productN:"lili",
                    productP: require('../assets/images/li.jpg'),
                    productI: 1
                }
            ]
        }
        }
    }

</script>

<style>
h3 {
    margin: 100px;
}
button {
    margin:100px;

}
btnb {
    left: 10px;
}
</style>