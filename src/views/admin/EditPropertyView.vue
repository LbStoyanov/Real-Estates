<script setup>
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFirestore, useDocument } from "vuefire";
import { doc, updateDoc } from "firebase/firestore";
import { useField, useForm } from "vee-validate";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import useImage from "@/composables/useImage";
import useLocationMap from "@/composables/useLocationMap";
import { validationSchema } from "@/validation/propertySchema";

const items = [1, 2, 3, 4, 5];

const { url, uploadImage, photo } = useImage();
const { zoom, center, pin } = useLocationMap();

const { handleSubmit } = useForm({ validationSchema });

const title = useField("title");
const image = useField("photo");
const price = useField("price");
const rooms = useField("rooms");
const bathrooms = useField("bathrooms");
const parkingLots = useField("parkingLots");
const description = useField("description");
const swimmingPool = useField("swimmingPool");
const garden = useField("garden");
const airConditioning = useField("airConditioning");
const internet = useField("internet");
const route = useRoute();
const router = useRouter();

const { id } = route.params;
const db = useFirestore();
const docRef = doc(db, "properties", id);
const property = useDocument(docRef);

watch(property, (property) => {
  title.value.value = property.title;
  price.value.value = property.price;
  rooms.value.value = property.rooms;
  bathrooms.value.value = property.bathrooms;
  parkingLots.value.value = property.parkingLots;
  description.value.value = property.description;
  swimmingPool.value.value = property.swimmingPool;
  garden.value.value = property.garden;
  airConditioning.value.value = property.airConditioning;
  internet.value.value = property.internet;
  center.value = property.location;
});

const submit = handleSubmit(async (values) => {
  // Create a data object with the property values
  const data = {
    title: values.title,
    price: values.price,
    rooms: values.rooms,
    bathrooms: values.bathrooms,
    parkingLots: values.parkingLots,
    description: values.description,
    swimmingPool: values.swimmingPool,
    garden: values.garden,
    airConditioning: values.airConditioning,
    internet: values.internet,
    location: center.value,
  };

  // Check if a new image was uploaded
  if (photo.value) {
    data.image = photo.value; // Assign the new image
  } else {
    data.image = property.value.image; // Assign the existing image
  }

  await updateDoc(docRef, data);
  router.push({ name: "admin-properties" });
});
</script>

<template>
  <v-card max-width="800" flat class="mx-auto my-10" style="padding: 1.5rem">
    <v-card-title class="mt-5">
      <h1 class="text-h4 font-weight-bold">Edit Property</h1>
    </v-card-title>
    <v-card-subtitle>
      <p class="text-h5">Edit Property Details</p>
    </v-card-subtitle>

    <v-form class="mt-10">
      <v-text-field
        v-model="title.value.value"
        :error-messages="title.errorMessage.value"
        label="Title"
        class="mb-5"
      ></v-text-field>

      <v-file-input
        v-model="image.value.value"
        :error-messages="image.errorMessage.value"
        accept="image/jpeg"
        prepend-icon="mdi-camera"
        label="Photo"
        class="mb-5"
        @change="uploadImage"
      ></v-file-input>

      <div class="my-5">
        <p class="font-weight-bold">Actual Image:</p>

        <img v-if="photo" class="w50" :src="photo" />

        <img v-else class="w50" :src="property?.image" />
      </div>

      <v-text-field
        v-model="price.value.value"
        :error-messages="price.errorMessage.value"
        label="Price"
        class="mb-5"
      ></v-text-field>

      <v-row>
        <v-col cols="12" md="4">
          <v-select
            label="Rooms"
            class="mb-5"
            :items="items"
            v-model="rooms.value.value"
            :error-messages="rooms.errorMessage.value"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            label="Bathrooms"
            class="mb-5"
            :items="items"
            v-model="bathrooms.value.value"
            :error-messages="bathrooms.errorMessage.value"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            label="Parking Lots"
            class="mb-5"
            :items="items"
            v-model="parkingLots.value.value"
            :error-messages="parkingLots.errorMessage.value"
          />
        </v-col>
      </v-row>

      <v-textarea
        v-model="description.value.value"
        :error-messages="description.errorMessage.value"
        label="Description"
        class="mb-5"
      ></v-textarea>

      <v-row>
        <v-checkbox
          v-model="swimmingPool.value.value"
          label="Swimming Pool"
        ></v-checkbox>

        <v-checkbox v-model="garden.value.value" label="Garden"></v-checkbox>

        <v-checkbox
          v-model="airConditioning.value.value"
          label="Ait Conditioning"
        ></v-checkbox>

        <v-checkbox
          v-model="internet.value.value"
          label="Internet"
        ></v-checkbox>
      </v-row>

      <h2 class="font-weight-bold text-center my-5">Location</h2>
      <div class="pb-10">
        <div style="height: 600px">
          <LMap
            v-model:zoom="zoom"
            :center="center"
            :use-global-leaflet="false"
          >
            <LMarker :lat-lng="center" draggable @moveend="pin" />
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></LTileLayer>
          </LMap>
        </div>
      </div>

      <v-btn color="pink-accent-3" block @click="submit"> Save Changes </v-btn>
    </v-form>
  </v-card>
</template>
