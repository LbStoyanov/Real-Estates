import {collection, query, where, getDocs} from "firebase/firestore";
import {useFirestore, useCollection} from "vuefire";
import {computed} from "vue";

export default function useProperties() {
    const db = useFirestore();

    const propertiesCollection = useCollection(collection(db, "properties"));

    const propertyPrice = computed(() => {
        return (price) =>
            Number(price).toLocaleString("en-US", {
                style: "currency",
                currency: "EUR",
            });
    });

    return {
        propertiesCollection,
        propertyPrice,
    };
}
