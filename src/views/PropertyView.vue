<script setup>
import { useRoute } from "vue-router";
import { doc } from "firebase/firestore";
import { useDocument, useFirestore } from "vuefire";
import { propertyPrice } from "../helpers";

const route = useRoute();
const db = useFirestore();
const docRef = doc(db, "properties", route.params.id);
const property = useDocument(docRef);
</script>

<template>
  <v-card flat>
    <v-card-title class="mt-5 text-h3 text-center py-5 font-weight-bold">
      {{ property?.title }}
    </v-card-title>
    <v-img :src="property?.image" height="450"></v-img>

    <div class="bg-blue-grey-lighten-4 d-flex flex-column flex-md-row">
      <v-card-text>
        Price:
        <span class="font-weight-bold">{{
          propertyPrice(property?.price)
        }}</span>
      </v-card-text>
      <v-card-text>
        Bathrooms:
        <span class="font-weight-bold">{{ property?.bathrooms }}</span>
      </v-card-text>
      <v-card-text>
        Parking Lots:
        <span class="font-weight-bold">{{ property?.parkingLots }}</span>
      </v-card-text>
      <v-card-text>
        Rooms:
        <span class="font-weight-bold">{{ property?.rooms }}</span>
      </v-card-text>
    </div>
    <v-row>
      <v-col cols="12" md="8">
        <div class="text-pre-wrap py-10 mx-5">{{ property?.description }}</div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="py-10">
          <p>Map</p>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style>
.text-pre-wrap {
  white-space: pre-wrap;
}
</style>
