import Home from "../pages/Home.vue"
export default {
    path: "/",
    component: Home,
    children: [
        {
            path: "",
            name: "home",
            meta: { title: "Home" }
        },
    ]
};
