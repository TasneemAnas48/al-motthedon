<template>
    <b-card class="product-in-cart">
        <b-row style="width: 80%">
            <div class="col-lg-6">
                <div class="image-container">
                    <div class="love-icon">
                        <b-icon icon="heart"></b-icon>
                        <!-- <b-icon icon="heart-fill"></b-icon> -->
                    </div>
                    <b-img-lazy
                        class="product-img"
                        v-bind="mainProps"
                        :src="item.image"
                        :alt="item.title"
                    ></b-img-lazy>
                </div>
            </div>
            <div class="col-lg-6">
                <b-card-text>
                    {{ item.title }}
                </b-card-text>
                <b-card-sub-title>AED {{ item.price }}</b-card-sub-title>
                <QuantityInputs :quantity.sync="item.quantity" />
                <div>
                    <b-button class="main-btn small-btn" @click="removeFromCart(item)">
                        REMOVE FROM CART
                        <b-icon icon="cart" style="margin-left: 10px"></b-icon>
                    </b-button>
                </div>
            </div>
        </b-row>
    </b-card>
</template>
<script>
import QuantityInputs from './QuantityInputs.vue';
import { mapActions } from "pinia"
import { useCartStore } from "@/modules/cart/store/CartStore"

export default {
    props: ["item"],
    components: { QuantityInputs },
    data() {
        return {
            mainProps: {
                block: true,
            },
            maxCharacters: 28,
        };
    },
    computed: {
        titleDisplayed() {
            return (title) => {
                return title.slice(0, this.maxCharacters);
            };
        },
        shouldShowPoints() {
            return (title) => {
                return title.length > this.maxCharacters;
            };
        }
    },
    methods: {
        ...mapActions(useCartStore, ['removeFromCart']),

        showProduct() {
            this.$router.push(`/product/${this.item.id}`)
        },
    },
}
</script>
<style lang="scss">
.product-in-cart{
    margin: 25px 0px;
}
.product-in-cart .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: #fff;
}
.product-in-cart .product-img {
    max-width: 55%;
    height: 80%;
    transition: all 0.3s ease-in;
}
.product-in-cart .product-img:hover {
    max-width: 65%;
    height: 90%;
    transition: all 0.3s ease-in;
}
.product-in-cart .love-icon {
    position: absolute;
    top: 10px;
    right: 25px;
    cursor: pointer;
}
.product-in-cart .bi-heart,
.product-in-cart .bi-heart-fill {
    color: var(--primary-base);
    font-size: 25px;
}
.product-in-cart .card-text {
    margin-top: 0px;
    text-align: left;
}
.product-in-cart .card-subtitle {
    text-align: left;
    margin-bottom: 25px;
}
</style>
