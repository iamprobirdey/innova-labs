<template>
  <input
    :type="element.type"
    :name="element.props.title"
    :placeholder="element.props.placeholder"
    :required="element.props.required"
    @change="onUpdated"
  />
  <label v-if="element.type === 'checkbox'">{{ element.props.title }}</label>
</template>

<script>
/* eslint-disable */
export default {
  props: ["element", "modelValue"],
  emits: ["update:modelValue"],
  methods: {
    onUpdated(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
