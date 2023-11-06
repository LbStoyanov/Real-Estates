<script setup>
import useProperties from "@/composables/useProperties";
import { propertyPrice } from "@/helpers";
import { ref } from "vue";

const { propertiesCollection, deletePropertyById } = useProperties();
const dialog = ref(false);
const confirmDelete = (propertyId, imageUrl) => {
  // Set the property ID to be deleted
  propertyToDeleteId.value = propertyId;
  imageToDeleteUrl.value = imageUrl;
  dialog.value = true;
};
const deleteProperty = () => {
  // Call the deletePropertyById function with the stored property ID
  deletePropertyById(propertyToDeleteId.value, imageToDeleteUrl.value);

  // Close the confirmation dialog
  dialog.value = false;
};

const propertyToDeleteId = ref(null);
const imageToDeleteUrl = ref(null);
</script>

<template>
  <div>
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
            <v-btn
              color="red-darken-3"
              @click="confirmDelete(property.id, property.image)"
              >Delete</v-btn
            >
          </template>
        </v-list-item>
      </v-list>
    </v-card>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title
          class="error headline"
          style="font-weight: bold; color: white"
          >Confirm Deletion</v-card-title
        >
        <v-card-text>
          Are you sure you want to delete this property?
        </v-card-text>
        <v-card-actions>
          <v-btn color="red darken-3" text @click="deleteProperty">Yes</v-btn>
          <v-btn text @click="dialog = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
