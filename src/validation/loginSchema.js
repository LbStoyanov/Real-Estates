export const loginSchema = {
    email(value) {
        if (!value) return "Email is required";

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(value)) return "Email must be valid";

        return true;
    },

    password(value) {
        if (!value) return "Password is required";

        if (value.length < 6) return "Password must be at least 6 characters";

        return true;
    },
};
