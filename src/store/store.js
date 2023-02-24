import { createStore } from "vuex";

export default createStore({
  state: {
    usersData: [],
    inputValue: "",
    formData: [
      {
        token: "PERSON_NAME",
        type: "text",
        props: {
          title: "Enter your name",
          required: true,
          placeholder: "Joe Doe",
        },
      },
      {
        token: "IS_PERSON_MINOR",
        type: "checkbox",
        props: {
          title: "Is the current person minor",
          required: false,
        },
      },
      {
        token: "PERSON_DOB",
        type: "date",
        props: {
          title: "Enter your DOB",
          required: true,
          placeholder: "01/01/2023",
        },
      },
    ],
  },
  mutations: {
    storeData(state, payload) {
      state.usersData = payload;
    },
    updateSearch(state, value) {
      state.inputValue = value;
    },
  },
  actions: {
    storeData(context, payload) {
      context.commit("storeData", payload);
    },
  },
  getters: {
    getData(state) {
      return JSON.parse(state.usersData);
    },
    getInputValue(state) {
      return state.inputValue;
    },
    getFilteredData(state) {
      let payload = JSON.parse(state.usersData);
      return payload.filter((user) =>
        user.name.toLowerCase().includes(state.inputValue.toLowerCase())
      );
    },
    getFormData(state) {
      return state.formData;
    },
  },
});
