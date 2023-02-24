<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  data() {
    return {
      childMessage: "I am from Child",
    };
  },
  props: {
    message: String,
  },
  methods: {
    sendTheChildPackage() {
      this.$emit("child-package", this.childMessage);
    },
  },
  mounted() {
    this.sendTheChildPackage();
  },
  components: {},
};
</script>
