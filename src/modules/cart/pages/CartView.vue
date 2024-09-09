<template>
    <div class="cart container">
        <div v-if="cart.length" data-aos="fade-up" data-aos-duration="1500"  data-aos-once="true">
            <h3 class="total">Total: AED {{ totalCost }}</h3>
            <div v-for="(item) in cart" :key="item.id" >
                <ProductCardInCart :item="item" />
            </div>
        </div>
        <div v-else class="empty-cart">Your cart is empty :(</div>
        <Divider />
    </div>
</template>

<script>
import Divider from '@/components/main/Divider.vue'
import { mapState } from "pinia"
import { useCartStore } from "@/modules/cart/store/CartStore"
import ProductCardInCart from '@/modules/product/components/ProductCardInCart.vue'
export default {
    components: {
        Divider,
        ProductCardInCart
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState(useCartStore, ['cart', 'totalCost']),
    },
    created() {
        const cartStore = useCartStore();
        cartStore.initializeCart();
    },
}
</script>

<style>
.cart .total {
    color: var(--primary-base);
    text-align: center;
    font-family: "RobotoFlex-Regular" !important;
    margin-top: 40px;
}
.empty-cart{
    display: flex;
    justify-content: center;
    color: var(--primary-base);
    font-size: 25px;
    height: 200px;
    align-items: center;
}
</style>