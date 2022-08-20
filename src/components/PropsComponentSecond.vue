<template>
  <div>
    <h1>{{ userName }}</h1>
    <button v-on:click="updateTitle">Update Title</button>
    <div v-for="user in userData" :key="user.id">
      <h2>{{ user.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropsComponentSecond",
  props: {
    userName: String,
    userData: [],
  },
  methods: {
    updateTitle() {
      console.log("Hello");
      this.$emit("changeTitle", "This is the Updated Title");
    },
  },
};
</script>

<style></style>
