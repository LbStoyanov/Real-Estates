<script setup>
import useProperties from "../composables/useProperties";
import Property from "../components/Property.vue";
import { propertyPrice } from "../helpers";

const { filteredProperties, swimmingPool, garden, airConditioning, internet } =
  useProperties();
</script>

<template>
  <h1 class="text-center">Vue Real Estates</h1>

  <v-card flat class="py-10">
    <v-card-title class="text-h5">
      Filter
      <v-row>
        <v-checkbox label="Swimming pool" v-model="swimmingPool" />
        <v-checkbox label="Garden" v-model="garden" />
        <v-checkbox label="Air Conditioning" v-model="airConditioning" />
        <v-checkbox label="Internet" v-model="internet" />
      </v-row>
    </v-card-title>
    <V-row>
      <Property
        v-for="property in filteredProperties"
        :key="property.id"
        :property="property"
        :price="propertyPrice"
      />
    </V-row>
  </v-card>
</template>
