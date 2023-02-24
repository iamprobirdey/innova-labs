<template>
  <div>
    <input
      type="text"
      placeholder="search"
      v-model="inputValue"
      @input="handleSearch"
    />
    <ul>
      <li v-for="user in getDataFromStates" :key="user">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios");
import { mapState } from "vuex";

export default {
  name: "ListComponent",
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getPayloadFromTypicode() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.$store.dispatch("storeData", JSON.stringify(response.data));
        });
    },
    handleSearch(event) {
      this.$store.commit("updateSearch", event.target.value);
    },
  },
  computed: {
    getDataFromStates() {
      if (this.$store.getters.getInputValue === "") {
        return this.$store.getters.getData;
      } else if (this.$store.getters.getInputValue !== "") {
        return this.$store.getters.getFilteredData;
      } else {
        return [];
      }
    },
    ...mapState({
      formData: (state) => state.inputValue,
    }),
  },
  created() {
    this.getPayloadFromTypicode();
  },
  mounted() {},
};
</script>
