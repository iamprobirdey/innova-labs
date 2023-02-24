<template>
  <ParentComponent></ParentComponent>
  <br />
  <br />
  <br />
  <br />

  <FormComponent></FormComponent>
  <br />
  <br />
  <br />
  <br />
  <ListComponent></ListComponent>
</template>

<script>
import ParentComponent from "./components/component-communication/ParentComponent.vue";
import ListComponent from "./components/component-communication/ListComponent.vue";
import FormComponent from "./components/component-communication/FormComponent.vue";

export default {
  name: "App",
  components: {
    ParentComponent,
    ListComponent,
    FormComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
