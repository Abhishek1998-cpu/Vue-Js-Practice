<template>
  <div>
    <h2>Template and Operator in Vue Js</h2>
    <h2>{{ name }}</h2>
    <h2>Add of a and b is {{ a + b }}</h2>
    <h2 v-html="renderHTML"></h2>
    <button v-bind:disabled="disabled" v-on:click="updateName">
      Update Name
    </button>
  </div>
</template>

<script>
export default {
  name: "OperatorExampleComponent",
  data() {
    return {
      name: "Abhishek",
      a: 10,
      b: 20,
      renderHTML: "<p>Rendering HTML</p>",
      disabled: true,
    };
  },
  methods: {
    updateName() {
      this.name = "Verma";
    },
  },
};
</script>

<style scoped></style>
