import {collection, doc, deleteDoc} from "firebase/firestore";
import {useFirestore, useCollection} from "vuefire";
import {computed, ref} from "vue";

export default function useProperties() {
    const swimmingPool = ref(false);
    const garden = ref(false);
    const airConditioning = ref(false);
    const internet = ref(false);

    const db = useFirestore();
    const propertiesCollection = useCollection(collection(db, "properties"));

    async function deletePropertyById(id) {
        //Add vue delete dialog for confirmation of deleting the selected property
        const docRef = doc(db, "properties", id);
        await deleteDoc(docRef);
    }

    const filteredProperties = computed(() => {
        return propertiesCollection.value.filter((property) => {
            if (swimmingPool.value && !property.swimmingPool) {
                return false;
            }

            if (garden.value && !property.garden) {
                return false;
            }

            if (airConditioning.value && !property.airConditioning) {
                return false;
            }

            if (internet.value && !property.internet) {
                return false;
            }

            return true;
        });
    });

    return {
        propertiesCollection,
        filteredProperties,
        swimmingPool,
        garden,
        airConditioning,
        internet,
        deletePropertyById,
    };
}
