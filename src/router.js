import {createRouter, createWebHistory} from "vue-router";

import loginauthorize from "/src/composable/loginauthorize"

import Index from "./pages/index.vue"
import About from "./pages/about.vue"
import Appointments from "./pages/appointments.vue"
import Contact from "./pages/contacts.vue"
import Login from "./pages/login.vue"
import AppointmentInformation from "./pages/appointmentInformation.vue"
import Reviews from "./pages/reviews.vue"
import PageNotFound404 from "./pages/404.vue"

const {loginStatus} = loginauthorize();

const routes = [{
    path: "/",
    name: "Index",
    component: Index,
},
{
    path: "/about",
    name: "About",
    component: About,
},
{
    path: "/appointments",
    name: "Appointments",
    component: Appointments,
},
{
    path: "/contacts",
    name: "Contact",
    component: Contact,
},
{
    path: "/login",
    name: "Login",
    component: Login,
},
{
    path: "/appointmentInformation",
    name: "AppointmentInformation",
    component: AppointmentInformation,
    beforeEnter: (to, from, next) => {

        if (!loginStatus.value)
        {
            next("/login");
        }
        next();
    },
},
{
    path: "/reviews",
    name: "Reviews",
    component: Reviews,
},
{
    path: "/:pathMatch(.*)*",
    name: "PageNotFound404",
    component: PageNotFound404,
},
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    });
export default router;