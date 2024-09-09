import ProductDetails from "../pages/ProductDetails.vue"
import ProductByCategory from "../pages/ProductByCategory.vue"
import BaseWrapper from "@/wrappers/BaseWrapper.vue"

export default {
    path: "/product",
    component: BaseWrapper,
    children: [
        {
            path: "/product/:id",
            name: "product-details",
            component: ProductDetails,
            meta: { title: "Product Details" }
        },
        {
            path: "/product/category/:category",
            name: "product-by-category",
            component: ProductByCategory,
            meta: { title: "Product By Category" }
        },
    ]
};
