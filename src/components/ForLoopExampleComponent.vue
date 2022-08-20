<template>
  <div>
  <h1>For Loop in Vue js</h1>
  <table>
    <th>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
    </th>
    <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
    </tr>
  </table>
  </div>
</template>

<script>
export default {
  name: "ForLoopExampleComponent",
  props: {
    data: String,
    msg: String, 
  },
  data() {
    return {
      users: [
        { id: 1, name: "Abhishek", email: "abhishekverma998@gmail.com" },
        { id: 2, name: "Rohan", email: "rohan998@gmail.com" },
        { id: 3, name: "Amit", email: "amit998@gmail.com" },
        { id: 4, name: "Piyush", email: "piyush998@gmail.com" },
      ],
    };
  },
};
</script>

<style scoped>

</style>
