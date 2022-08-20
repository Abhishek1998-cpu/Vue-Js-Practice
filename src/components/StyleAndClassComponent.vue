<template>
  <div>
    <h1>Class and Style Binding</h1>
    <h1 class="homeStyle">Class Binding</h1>
    <h1 v-bind:style="{ color: 'blue' }">Style Binding</h1>
    <h1 v-bind:class="{ display: show, display2: show }">
      Class Binding with Object
    </h1>
    <h1 v-bind:class="[displayClass1, displayClass2]">
      Class Binding with Array
    </h1>
  </div>
</template>

<script>
export default {
  name: "StyleAndClassComponent",
  data() {
    return {
      show: true,
      displayClass1: "display",
      displayClass2: "display2",
    };
  },
};
</script>

<style scoped>
.homeStyle {
  color: orange;
}
.display {
  background-color: red;
}
.display2 {
  color: voilet;
}
</style>
