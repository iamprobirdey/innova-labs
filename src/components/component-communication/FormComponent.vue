<template>
  <form v-on:submit.prevent="onSubmit()">
    <div v-for="element in formData" :key="element">
      <BaseComponent
        :element="element"
        v-model="formInput[element.token]"
      ></BaseComponent>
    </div>
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import BaseComponent from "./FormElement/BaseComponent.vue";
import { mapState } from "vuex";
export default {
  name: "FormComponent",
  data() {
    return {
      formInput: {},
    };
  },
  computed: {
    ...mapState({
      formData: (state) => state.formData,
    }),
  },
  methods: {
    onSubmit() {
      console.log(this.formInput);
    },
    onUpdate(value) {
      console.log(value);
    },
  },
  mounted() {
    this.formData.map((element) => {
      this.formInput[element.token] = "";
    });
  },
  components: {
    BaseComponent,
  },
};
</script>
