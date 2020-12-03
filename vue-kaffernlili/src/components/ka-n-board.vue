<template>
  <table style="table-layout: fixed; width: 100%;" class="table table-hover table-striped">
      <colgroup>
      <col width="30px">
      <col width="230px">
      <col width="70px">
      <col width="110px">
      <col width="60px">
      </colgroup>
  <thead>
      <tr>
          <th>Id</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
          <th>조회수</th>
      </tr>
  </thead>
  <tbody>
      <tr v-for="user in users">
          <td>{{ user.DR_ID }}</td>
      </tr>
  </tbody>
    </table>
</template>

<script>
export default {

}
</script>

<style>

</style>