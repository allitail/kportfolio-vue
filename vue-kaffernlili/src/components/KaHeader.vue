<template>

  <div class="KaSide">

    <li class="nav-k">
      <router-link class="nav-f" to="/KaProduct">
      perfume
      </router-link>
    </li>

      <li class="nav-k">
      <router-link class="nav-f" to="/KaNc">
      a
      </router-link>
    </li>

      <li class="nav-k">
      <router-link class="nav-f" to="/KaNl">
      f
      </router-link>
    </li>

    <span class="KaUser">
      <i class="fas fa-user" v-on:click="link"></i>
      
    </span>

    <span class="KaShopping">
      <i class="fas fa-shopping-bag"></i>
    </span>
    
    <span class="KaMap">
      <i class="fas fa-map-marker-alt"></i>
    </span>


    
  </div>
</template>

<script>


export default {
  methods: {
          link: function(event) {
            this.$router.push('/KaInput')
        }
  }
};
</script>
<style lang="css">



</style>



</style>