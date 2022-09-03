<template>
  <div>
    <slot name="title"></slot>
    <h2>I am Slot Child Component</h2>
    <slot name="paragraph"></slot>
  </div>
</template>

<script>
export default {
  name: "SlotExampleChildComponent",
};
</script>

<style scoped></style>
