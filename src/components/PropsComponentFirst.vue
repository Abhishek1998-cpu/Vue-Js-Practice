<template>
  <div>
    <h1>Props Example</h1>
    <h2>Updated from Child Comp: {{ title }}</h2>
    <PropsComponentSecond
      userName="Abhishek Verma"
      v-on:changeTitle="updateTitle($event)"
    />
    <PropsComponentSecond v-bind:userName="firstName" />
    <PropsComponentSecond v-bind:userData="userData" />
  </div>
</template>

<script>
import PropsComponentSecond from "./PropsComponentSecond.vue";
export default {
  name: "PropsComponentFirst",
  components: { PropsComponentSecond },
  data() {
    return {
      title: "This is title",
      firstName: "Abhishek Verma 2",
      userData: [
        { name: "Rohan", age: 30, address: "Gorakhpur" },
        { name: "Rohit", age: 30, address: "Gorakhpur" },
        { name: "Sandeep", age: 30, address: "Gorakhpur" },
        { name: "Yuvraj", age: 30, address: "Gorakhpur" },
      ],
    };
  },
  methods: {
    updateTitle(title) {
      this.title = title;
    },
  },
};
</script>

<style></style>
