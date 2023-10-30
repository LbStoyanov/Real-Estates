<script setup>
defineProps({
  property: {
    type: Object,
  },
  price: { type: Function },
});
</script>

<template>
  <v-col cols="12" md="4">
    <v-card class="ml-5 mr-5">
      <v-img :src="property.image" />
      <v-card-title class="font-weight-bold">{{ property.title }}</v-card-title>
      <v-card-text class="text-truncate">{{
        property.description
      }}</v-card-text>
      <v-card-text class="text-h5 font-weight-bold"
        >Price: {{ price(property.price) }}</v-card-text
      >
      <template v-slot:actions>
        <v-btn block color="info" variant="tonal">See Details</v-btn>
      </template>
    </v-card>
  </v-col>
</template>
