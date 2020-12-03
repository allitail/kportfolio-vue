<template>
<div id="app">
  <router-link to="/"></router-link>
  <KaHeader></KaHeader>
  
</div>
</template>

<script>
import KaHeader from './components/KaHeader'
export default {
  name: 'app',
  components: {
    KaHeader
  }


};
</script>
