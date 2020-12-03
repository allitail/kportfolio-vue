<template>
  <div>
      <img src="../assets/images/logo.jpg"> <br>
      <input type="text" placeholder="아이디" v-model="newIdKaffernlili"> <br>
      <input type="text" placeholder="비밀번호" v-model="newPwKaffernlili"> <br>
      <input type="button" value="로그인" v-on:click="addIdKaffernlili">
  </div>
</template>

<script>
export default {
    name: 'KaInput',
    data: function() {
        return {
            newIdKaffernlili: "",
            newPwKaffernlili: ""
        }
    }
}
</script>

<style>

</style>