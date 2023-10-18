import {ref} from "vue";

export default function useLocationMap() {
    const zoom = ref(5);
    const center = ref([10.25, -78.23]);

    function pin(e) {
        const marker = e.target.getLatLng();
        center.value = [marker.lat, marker.lng];
    }

    return {
        zoom,
        center,
        pin,
    };
}
