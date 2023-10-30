<script setup>
import useProperties from "../composables/useProperties";
import Property from "../components/Property.vue";


const { propertiesCollection } = useProperties();
</script>

<template>
  <h1 class="text-center">Vue Real Estates</h1>

  <v-card flat class="py-10">
    <V-row>
      <Property v-for="property in propertiesCollection" :key="property.id" :property="property" />
    </V-row>
  </v-card>
</template>
