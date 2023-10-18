<script setup>
import { useRoute } from "vue-router";
import { useFirestore, useDocument } from "vuefire";
import { doc, updateDoc } from "firebase/firestore";

const route = useRoute();

const { id } = route.params;
const db = useFirestore();
const docRef = doc(db, "properties", id);
const property = useDocument(docRef);
</script>

<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Edit Property</h2>
</template>
