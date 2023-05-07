<template>
  <div>
    <h1></h1>
    <div class="login-form d-inline-flex col-5">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="user.username"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="user.password"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Remember me</label
          >
        </div>
        <button type="submit" class="btn btn-primary" @click="submitForm">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";

export default {
  name: "LoginForm",
  setup() {
    const store = useStore();

    let user = reactive({
      username: "",
      password: "",
    });
    function submitForm() {
      // alert("Username: " + user.username + "\nPassword: " + user.password);
      store.dispatch("logUser", user);
    }

    return {
      user,
      submitForm,
    };
  },
};
</script>

<style>
.login-form {
  justify-content: center;
}
</style>
