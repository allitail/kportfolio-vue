<template>
<div>
  <transition-group name="fade" tag="div">
    <div v-for="number in [currentNumber]" :key="number" transition="fade">
      <img :src="currentImg"/>
    </div>
  </transition-group>

    
      <a class="prev" @click="prev">&#10094; Previous</a>
      <a class="next" @click="next">&#10095; Next</a>
    

    
    
  
</div>
</template>


<script>
export default {
name:"kslider",

  data() {
    return{
    images: ['https://ifh.cc/g/hSQXG8.png',  'https://ifh.cc/g/Y7gNzm.jpg'],
    timer: null,
    currentNumber: 0
  };
  },

  mounted: function () {
    this.startRotation();
  },

  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 1000);
    },

    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function() {
      this.currentNumber += 1
    },
    prev: function() {
      this.currentNumber -= 1
    }
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentNumber) % this.images.length];
    }
  }
};

</script>

<style>
.fade-enter-transition
.fade-leave-to
 {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
  width:100%;
}

.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
  width:100%;
}

  /* img {
  height:600px;
  width:100%;
} */

/* .prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size:18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
} */
</style>