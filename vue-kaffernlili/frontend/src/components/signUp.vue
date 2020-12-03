<template>
 <div>
      <div class="input_row">
  <label for="userid">아이디</label>
  <h1>{{ user.userid }}</h1>
  id: <input type="text" id="userid" v-model="user.userid">
</div>

<div class="input_row">
   <label for="name">이름</label>
   name: <input type="text" id="name" v-model="user.name">
</div>

<div class="input_row">
   <label for="password">비밀번호</label>
   password: <input type="password" id="password" v-model="user.password">
</div>

<button @click="signUp">가입하기</button>

</div>
</template>

<script>
export default {
data: function () {
  return {
    user: {
    userid: '',
    name: '',
    password: ''
    }
  }
},
methods: {
  signUp: function(event)// eslint-disable-line no-unused-vars
  {
    this.$http.post('/api/users/signUp', { 
      user: this.user
    })
    .then((res) => {
      if (res.data.success == true) {
        alert(res.data.message);
        this.$router.push('/login') 
      }
      if (res.data.success == false) {
        alert(res.data.message);
      }
    })
    .catch(function(error) // eslint-disable-line no-unused-vars
    {
      alert('err')
    })
  }
}
}

</script>

<style>

</style>