<template>
  <div>
    <!-- <h2>I am DynamicComponent</h2> -->
    <component v-bind:is="UseDynamicComponent"></component>
    <!-- <component v-bind:is="UseDynamicComponent"></component> -->
    <button v-on:click="updateComponent('DynamicComponent2')">
      Render DynamicComponent2
    </button>
    <button v-on:click="updateComponent('DynamicComponent1')">
      Render DynamicComponent1
    </button>
  </div>
</template>

<script>
import DynamicComponent1 from "./DynamicComponent1.vue";
import DynamicComponent2 from "./DynamicComponent2.vue";
export default {
  name: "DynamicComponent",
  components: {
    DynamicComponent1,
    DynamicComponent2,
  },
  data() {
    return { UseDynamicComponent: DynamicComponent1 };
  },
  methods: {
    updateComponent(component) {
      this.UseDynamicComponent = component;
    },
  },
};
</script>

<style scoped></style>
