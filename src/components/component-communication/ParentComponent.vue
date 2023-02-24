<template>
  <div>
    <ChildComponent
      message="I am from Parent"
      @child-package="capturePackage"
    ></ChildComponent>

    <h1>Child Message: {{ childMessage }}</h1>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "ParentComponent",
  data() {
    return {
      childMessage: "",
    };
  },
  methods: {
    capturePackage(msg) {
      this.childMessage = msg;
    },
  },
  components: {
    ChildComponent,
  },
};
</script>
