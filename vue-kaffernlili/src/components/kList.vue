<template>
  <div class="kList-container">
      <transition-group v-on:leave="leave" v-on:enter="enter">
          <card v-for="(product, index) in computedproducts" :key="index">
              <div class="k-slide slide-up-leave-active slide-up-enter-to" style="width: 820px;"></div>
          </card>
      </transition-group>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.slide-up { transition: all 0.25s; }
.slide-up-enter-active { transition: all 0.25s ease; }
.slide-up-leave-active { transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1); }
.slide-up-enter, .slide-up-leave-active { opacity: 0; transform: translateY(100%); }

</style>
