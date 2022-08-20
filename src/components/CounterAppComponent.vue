<template>
  <div class="main-wrapper">
    <button v-on:click="inc">Inc by 1</button>
    <h2>{{ count }}</h2>
    <button v-on:click="dec">Dec by 1</button>
  </div>
</template>

<script>
export default {
  name: "CounterAppComponent",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    inc() {
      this.count = this.count + 1;
    },
    dec() {
      this.count = this.count - 1;
    },
  },
};
</script>

<style scoped>
.main-wrapper {
  background: cadetblue;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
