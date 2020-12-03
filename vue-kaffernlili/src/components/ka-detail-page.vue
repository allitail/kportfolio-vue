<template>
  <div class="Kthumbnail">
      <div class="p" v-for="(data, index) in product" :key="index">
          <img :src="data.productT">
          <img :src="data.productN">
      </div>
  </div>
</template>

<script>
export default {
    name: 'Kanote',
    data() {
        return {
            product: [
                {
                    productT: require('../assets/images/liliT.png'),
                    productN: require('../assets/images/liliN.png')
                }
            ]
        }
    }
}
</script>

<style>

</style>