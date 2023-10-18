export const validationSchema = {
    title(value) {
        if (value?.length >= 6) return true;
        return "The title must be at least 6 characters long";
    },
    price(value) {
        if (/^[0-9]+$/.test(value)) return true;
        return "The price should be a number";
    },
    rooms(value) {
        if (value) return true;
        return "Choose a number of rooms";
    },
    bathrooms(value) {
        if (value) return true;
        return "Choose a number of bathrooms";
    },
    parkingLots(value) {
        if (value) return true;
        return "Choose a number of parking lots";
    },
    description(value) {
        if (value) return true;
        return "Add a description of the property";
    },
};

export const imageSchema = {
    image(value) {
        if (value) return true;
        return "The image is required";
    },
};
