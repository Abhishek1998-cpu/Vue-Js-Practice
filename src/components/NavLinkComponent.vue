<template>
  <div class="navLink">
    <router-link to="/">Home</router-link>
    <router-link to="/counterappcomponent">CounterAppComponent</router-link>
    <router-link to="/forloopexamplecomponent"
      >ForLoopExampleComponent</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NavLinkComponent",
};
</script>

<style scoped>
.navLink {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
