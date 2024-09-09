<template>
    <div class="product-details container">
        <div
            class="row"
            v-if="!productBase.loadingFetchItem && !productBase.error"
            style="row-gap: 30px"
        >
            <div class="col-lg-5" data-aos="fade-right" data-aos-duration="1500">
                <div class="image-container">
                    <b-img :src="productModel.image" :alt="productModel.title" class="product-img"></b-img>
                </div>
            </div>
            <div class="col-lg-7" data-aos="fade-left" data-aos-duration="1500">
                <div class="product-category">{{ capitalizeFirstLetter(productModel.category) }}</div>
                <h4 class="product-title">{{ productModel.title }}</h4>
                <b-form-rating
                    id="rating-inline"
                    inline
                    readonly
                    no-border
                    v-model="productModel.rating.rate"
                    variant="warning"
                    precision="1"
                ></b-form-rating>
                <span class="reviews-num">{{ productModel.rating.count }} reviews</span>
                <div class="price">AED {{ productModel.price }}</div>
                <p class="product-desc">{{ productModel.description }}</p>
                <div v-if="!isProductInCart(productModel)">
                    <b-button class="main-btn big-btn" @click="addToCart(productModel)">
                        ADD TO CART
                        <b-icon icon="cart" style="margin-left: 10px"></b-icon>
                    </b-button>
                </div>
                <div v-else>
                    <b-button class="main-btn big-btn" @click="removeFromCart(productModel)">
                        REMOVE FROM CART
                        <b-icon icon="cart" style="margin-left: 10px"></b-icon>
                    </b-button>
                </div>
            </div>
        </div>
        <Loader v-if="productBase.loadingFetchItem" />
        <NoInternet v-if="!productBase.loadingFetchItem && productBase.error" />
        <Divider />
    </div>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useProductStore } from "../store/ProductStore"
import { useCartStore } from "@/modules/cart/store/CartStore"
import Loader from "@/components/main/Loader.vue"
import Divider from '@/components/main/Divider.vue'
import NoInternet from "@/components/main/NoInternet.vue"
export default {
    components: {
        Loader,
        Divider,
        NoInternet,
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState(useProductStore, ['productBase', 'productModel']),
    },
    methods: {
        ...mapActions(useProductStore, ['getProductById']),
        ...mapActions(useCartStore, ['addToCart', 'isProductInCart', 'removeFromCart']),
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
    created() {
        const cartStore = useCartStore();
        cartStore.initializeCart();
    },
    mounted() {
        const id = this.$route.params.id
        this.getProductById(id)
    },
}
</script>

<style>
.product-details {
    padding: 30px 0px;
    font-family: "RobotoFlex-Regular" !important;
}
.product-details .image-container {
    height: 380px;
}
.product-details .product-title {
    color: #fff;
    margin-top: 10px;
}
.b-rating {
    background-color: transparent !important;
    padding-left: 0px !important;
}
.reviews-num {
    color: var(--primary-base);
}
.product-details .product-category {
    color: #fff;
    font-size: 18px;
}
.product-details .price {
    color: var(--primary-base);
    font-size: 30px;
    margin-top: 10px;
}
.product-details .product-desc {
    color: #d1d1d1;
    font-size: 14px;
    margin: 10px 0px 20px;
}
</style>