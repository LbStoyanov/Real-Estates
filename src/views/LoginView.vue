<script setup>
import { useForm, useField } from "vee-validate";

import { loginSchema as validationSchema } from "../validation/loginSchema";

import { useAuthStore } from "../stores/auth";

const { handleSubmit } = useForm({ validationSchema });

const auth = useAuthStore();

const email = useField("email");
const password = useField("password");

const submit = handleSubmit((values) => {
  auth.login(values);
});
</script>

<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-title class="text-h4 font-weight-bold"> Login </v-card-title>

    <v-card-subtitle class="text-h6 mb-5">
      Login to your account
    </v-card-subtitle>

    <v-alert
      v-if="auth.isLoginError"
      type="error"
      :title="auth.errorMsg"
    ></v-alert>

    <v-form class="mt-6">
      <v-text-field
        class="mb-3"
        type="email"
        label="Email"
        bg-color="blue-lighten-3"
        placeholder="johndoe@gmail.com"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
      >
      </v-text-field>

      <v-text-field
        class="mb-3"
        type="password"
        label="Password"
        bg-color="blue-lighten-3"
        hint="Enter your password to access this website"
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
      >
      </v-text-field>

      <v-btn color="green" rounded block @click="submit"> Login </v-btn>
    </v-form>
  </v-card>
</template>
