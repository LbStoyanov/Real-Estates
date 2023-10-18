<script setup>
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthStore } from "./stores/auth";

const auth = useAuthStore();
// Used to get the value of the reactive property isAuth
//It is ref point to the isAuth property in the auth store
const { isAuth } = storeToRefs(auth);
</script>

<template>
  <v-card elevation="3" max-width="1200" class="mx-auto">
    <v-layout>
      <V-app-bar color="light-blue-accent-3">
        <template v-slot:prepend>
          <v-btn :to="{ name: 'home' }"> Real Estates </v-btn>
        </template>

        <template v-slot:append>
          <div v-if="isAuth">
            <v-btn :to="{ name: 'admin-properties' }"> Admin </v-btn>
            <v-btn @click="auth.logout"> LogOut </v-btn>
          </div>
          <div v-else>
            <v-btn :to="{ name: 'home' }"> Home </v-btn>
            <v-btn :to="{ name: 'login' }"> Login </v-btn>
          </div>
        </template>
      </V-app-bar>
      <v-main>
        <v-container style="background-color: rgb(207, 247, 247)">
          <RouterView />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
