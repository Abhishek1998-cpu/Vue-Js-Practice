<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HomeComponent userName="Abhishek Verma" /> -->
    <!-- <ForLoopExampleComponent /> -->
    <!-- <OperatorExampleComponent /> -->
    <!-- <CounterAppComponent /> -->
    <!-- <StyleAndClassComponent /> -->
    <!-- <DataBindingExampleComponent /> -->
    <!-- <PropsComponentFirst /> -->
    <!-- <WatchExampleComponent /> -->
    <!-- <ComputedPropertyExampleComponent /> -->
    <!-- <UsingFilterComponentExample /> -->
    <!-- <VueBootstrapExampleComponent /> -->
    <NavLinkComponent />
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import HomeComponent from "./components/HomeComponent.vue";
// import ForLoopExampleComponent from "./components/ForLoopExampleComponent.vue";
// import OperatorExampleComponent from "./components/OperatorExampleComponent.vue";
// import CounterAppComponent from "./components/CounterAppComponent.vue";
// import StyleAndClassComponent from "./components/StyleAndClassComponent.vue";
// import DataBindingExampleComponent from "./components/DataBindingExampleComponent.vue";
// import PropsComponentFirst from "./components/PropsComponentFirst.vue";
// import WatchExampleComponent from "./components/WatchExampleComponent.vue";
// import ComputedPropertyExampleComponent from "./components/ComputedPropertyExampleComponent.vue";
// import UsingFilterComponentExample from "./components/UsingFilterComponentExample.vue";
// import VueBootstrapExampleComponent from "./components/VueBootstrapExampleComponent.vue";
import NavLinkComponent from "./components/NavLinkComponent.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // HomeComponent,
    // ForLoopExampleComponent,
    // OperatorExampleComponent,
    // CounterAppComponent,
    // StyleAndClassComponent,
    // DataBindingExampleComponent,
    // PropsComponentFirst,
    // WatchExampleComponent,
    // ComputedPropertyExampleComponent,
    // UsingFilterComponentExample,
    // VueBootstrapExampleComponent,
    NavLinkComponent,
  },
};
</script>

<!-- <style lang="scss"> -->
<style scoped>
/* @import "~@/assets/scss/vendors/bootstrap-vue/index"; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
