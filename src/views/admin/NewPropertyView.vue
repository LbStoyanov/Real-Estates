<script setup>
import { useForm, useField } from "vee-validate";
import { collection, addDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { useRouter } from "vue-router";
import useImage from "@/composables/useImage";
import useLocationMap from "@/composables/useLocationMap";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

import { validationSchema, imageSchema } from "@/validation/propertySchema";

const roomQuantity = [1, 2, 3, 4, 5, 6, 7, 8];
const router = useRouter();

const { url, uploadImage, photo } = useImage();
const { zoom, center, pin} = useLocationMap();

const db = useFirestore();

const { handleSubmit } = useForm({
  validationSchema: {
    ...validationSchema,
    ...imageSchema,
  },
});

const title = useField("title");
const image = useField("image");
const price = useField("price");
const description = useField("description");
const rooms = useField("rooms");
const bathrooms = useField("bathrooms");
const parkingLots = useField("parkingLots");
const swimmingPool = useField("swimmingPool", null, { initialValue: false });
const garden = useField("garden", null, { initialValue: false });
const airConditioning = useField("airConditioning", null, {
  initialValue: false,
});
const internet = useField("internet", null, { initialValue: false });

const submit = handleSubmit(async (values) => {
  const { image, ...property } = values;

  const docRef = await addDoc(collection(db, "properties"), {
    ...property,
    image: url.value,
    location: center.value,
  });
  if (docRef.id) {
    router.push({ name: "admin-properties" });
  }
});
</script>
<template>
  <v-card flat max-width="800" class="mx-auto my-10 custom-card">
    <v-card-title class="text-h4 font-weight-bold" tag="h3">
      New Property
    </v-card-title>

    <v-card-subtitle class="text-h6 mb-5 py-5">
      Craft a fresh property by furnishing the form underneath.
    </v-card-subtitle>

    <v-form class="mt-10">
      <v-text-field
        class="mb-5"
        label="Property Title"
        v-model="title.value.value"
        :error-messages="title.errorMessage.value"
      />
      <v-file-input
        label="Upload Property Image"
        accept="image/jpeg"
        prepend-icon="mdi-camera"
        @change="uploadImage"
        class="mb-5"
        v-model="image.value.value"
        :error-messages="image.errorMessage.value"
      />

      <div v-if="photo" class="my-5">
        <p class="fon-weight-bold">Property Image:</p>
        <img class="w-50" :src="photo" alt="Property Image" />
      </div>

      <v-text-field
        class="mb-5"
        label="Price"
        v-model="price.value.value"
        :error-messages="price.errorMessage.value"
      />
      <v-row class="pl-3 pr-3">
        <v-select
          label="Rooms"
          class="mb-5 mr-5"
          :items="roomQuantity"
          v-model="rooms.value.value"
          :error-messages="rooms.errorMessage.value"
        />
        <v-select
          label="Bathrooms"
          class="mb-5 mr-5"
          :items="roomQuantity"
          v-model="bathrooms.value.value"
          :error-messages="bathrooms.errorMessage.value"
        />
        <v-select
          label="Parking spaces"
          class="mb-5"
          :items="roomQuantity"
          v-model="parkingLots.value.value"
          :error-messages="parkingLots.errorMessage.value"
        />
      </v-row>
      <v-textarea
        class="mb-5"
        label="Description"
        v-model="description.value.value"
        :error-messages="description.errorMessage.value"
      ></v-textarea>
      <v-row>
        <v-checkbox
          label="Swimming pool"
          class="ml-3"
          v-model="swimmingPool.value.value"
          :error-messages="swimmingPool.errorMessage.value"
        />
        <v-checkbox
          label="Garden"
          v-model="garden.value.value"
          :error-messages="garden.errorMessage.value"
        />
        <v-checkbox
          label="Air conditioning"
          v-model="airConditioning.value.value"
          :error-messages="airConditioning.errorMessage.value"
        />
        <v-checkbox
          label="Internet"
          v-model="internet.value.value"
          :error-messages="internet.errorMessage.value"
        />
      </v-row>

      <h2 class="text-center font-weight-bold my-5">Property Location</h2>

      <div style="height: 400px; width: 800px" class="pr-10 pb-5">
        <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
          <LMarker :lat-lng="center" draggable @moveend="pin"/>
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></LTileLayer>
        </LMap>
      </div>

      <v-btn color="blue" append-icon="mdi-send" @click="submit"
        >Add Property</v-btn
      >
    </v-form>
  </v-card>
</template>

<style>
.custom-card {
  padding: 22px;
}
</style>
