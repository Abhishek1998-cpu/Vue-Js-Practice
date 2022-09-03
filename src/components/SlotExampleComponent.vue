<template>
  <div>
    <h2>I am Slot Component</h2>
    <SlotExampleChildComponent>
      <h2 slot="title">I am a Slot Title</h2>
      <h2 slot="paragraph">I am a Slot Paragraph</h2>
    </SlotExampleChildComponent>
    <!-- <SlotExampleChildComponent />
    <h2>Hello</h2> -->
  </div>
</template>

<script>
import SlotExampleChildComponent from "./SlotExampleChildComponent.vue";
export default {
  name: "SlotExampleComponent",
  components: {
    SlotExampleChildComponent,
  },
};
</script>

<style scoped></style>
