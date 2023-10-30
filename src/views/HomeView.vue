<script setup>
import useProperties from "../composables/useProperties";
import Property from "../components/Property.vue";
import {propertyPrice} from '../helpers'


const { propertiesCollection } = useProperties();
</script>

<template>
  <h1 class="text-center">Vue Real Estates</h1>

  <v-card flat class="py-10" >
    <V-row>
      <Property v-for="property in propertiesCollection" :key="property.id" :property="property" :price="propertyPrice"/>
    </V-row>
  </v-card>
</template>
