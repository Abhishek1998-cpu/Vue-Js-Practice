<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" />
  </div>
</template>

<script>
export default {
  name: "DataBindingExampleComponent",
  data() {
    return {
      msg: "Hello",
    };
  },
};
</script>

<style scoped></style>
