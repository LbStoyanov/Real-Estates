import {ref, computed, onMounted} from "vue";
import {defineStore} from "pinia";
import {useFirebaseAuth} from "vuefire";
import {signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore("auth", () => {
    const auth = useFirebaseAuth();
    const authUser = ref(null);
    const router = useRouter();
    const errorMsg = ref("");
    const errorCodes = {
        "auth/invalid-login-credentials": "Username or password is incorrect",
    };

    onMounted(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                authUser.value = user;
            }
        });
    });

    const login = ({email, password}) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            authUser.value = user;
            //If the user is logged in, should be redirected to the home page
            router.push({name: "admin-properties"});
        })
        .catch((error) => {
            errorMsg.value = errorCodes[error.code];
        });
    };

    const logout = () => {
        signOut(auth)
        .then(() => {
            authUser.value = null;
            router.push({name: "login"});
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const isLoginError = computed(() => {
        return errorMsg.value;
    });

    const isAuth = computed(() => {
        return authUser.value;
    });

    return {
        login,
        logout,
        isLoginError,
        errorMsg,
        isAuth,
    };
});
