import CartView from "../pages/CartView.vue"

export default {
    path: "/cart",
    component: CartView,
    children: [
        {
            path: "",
            name: "cart",
            component: CartView,
            meta: { title: "Shopping Cart" }
        },
    ]
};
