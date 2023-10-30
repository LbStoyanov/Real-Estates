import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AdminLayoutView from "../views/admin/AdminLayoutView.vue";
import {onAuthStateChanged} from "firebase/auth";
import {useFirebaseAuth} from "vuefire";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path:  "/properties/:id",
            name: "property",
            component: () => import("../views/PropertyView.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
        {
            path: "/admin",
            name: "admin",
            component: AdminLayoutView,
            meta: {
                requiresAuth: true,
            },
            children: [
                {
                    path: "/admin/properties",
                    name: "admin-properties",
                    component: () => import("../views/admin/AdminView.vue"),
                },
                {
                    path: "/admin/new",
                    name: "new-property",
                    component: () => import("../views/admin/NewPropertyView.vue"),
                },
                {
                    path: "/admin/edit/:id",
                    name: "edit-property",
                    component: () => import("../views/admin/EditPropertyView.vue"),
                },
            ],
        },
    ],
});

//Navigation guard: Every time the user tries to access a url that requires authentication, the router will check if the user is logged in.
//If the user is not logged in, the router will redirect the user to the login page.
router.beforeEach(async (to, from, next) => {
    //To: the route(url) the user is trying to access. From: the route(url) the user is coming from. Next: a function that will be called to continue the navigation.
    const requiresAuth = to.matched.some((url) => url.meta.requiresAuth);
    if (requiresAuth) {
        try {
            await authenticateUser();
            next();
        } catch (error) {
            console.log(error);
            next({name: "login"});
        }
    } else {
        next();
    }
});

function authenticateUser() {
    const auth = useFirebaseAuth();
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user);
            } else {
                reject("User is not logged in");
            }
        });
    });
}

export default router;
