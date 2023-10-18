<script setup>
import useProperties from "@/composables/useProperties";

const { propertiesCollection, propertyPrice } = useProperties();
</script>
<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Admin Panel</h2>
  <v-btn color="blue" variant="flat" :to="{ name: 'new-property' }"
    >New Property</v-btn
  >

  <v-card class="mx-auto mt-10">
    <v-list>
      <v-list-item
        v-for="property in propertiesCollection"
        :key="property.id"
        :title="property.title"
        :subtitle="propertyPrice(property.price)"
      >
        <template v-slot:prepend>
          <v-list-item-media :start="true">
            <img width="200" :src="property.image" />
          </v-list-item-media>
        </template>

        <template v-slot:append>
          <v-btn
            color="light-green-accent-3"
            class="mr-3"
            :to="{ name: 'edit-property', params: { id: property.id } }"
          >
            Edit
          </v-btn>
          <v-btn color="red-darken-3"> Delete </v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
