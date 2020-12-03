import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// import vuetify from './plugins/vuetify';



window.Kakao.init("bb5ae9a152038b5e44848f152566c2dd");
// Vue.use(Vuetify);


new Vue({
  el: '#app',

  // 애플리케이션 등록하기
  router,

  // vuetify,
  render: h => h(App)
}).$mount('#app')






