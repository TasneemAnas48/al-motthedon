<template>
    <section class="latest-product container">
        <div class="header">
            <h4 class="latest-product-title">LATEST PRODUCTS</h4>
            <b-img :src="require('@/assets/icons/logo3.png')" class="logo-title"></b-img>
        </div>
        <div
            v-if="!productBase.loadingFetch"
            data-aos="fade-up"
            data-aos-duration="1800"
        >
            <vueper-slides
                autoplay
                :arrows="false"
                :touchable="false"
                :pause-on-hover="false"
                ref="vueperslides1"
                :breakpoints="{ 767: { visibleSlides: 1, slideMultiple: 1 }, 992: { visibleSlides: 2, slideMultiple: 2 } }"
                :visible-slides="3"
                fixed-height="405px"
            >
                <vueper-slide v-for="(item, i) in latestProducts" :key="i">
                    <template #content>
                        <product-card :item="item" />
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>
        <loader v-else />
    </section>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useProductStore } from "../store/ProductStore"
import ProductCard from "./ProductCard.vue"
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Loader from "@/components/main/Loader.vue"
export default {
    components: {
        ProductCard,
        VueperSlides,
        VueperSlide,
        Loader
    },
    computed: {
        ...mapState(useProductStore, ['productBase', 'latestProducts']),
    },
    methods: {
        ...mapActions(useProductStore, ['fetchLatestProduct']),
    },
    mounted() {
        this.fetchLatestProduct()
    }

}
</script>

<style>
.vueperslides__bullet .default {
    background-color: var(--primary-base);
    border: none;
    box-shadow: none;
    transition: 0.3s;
    width: 10px;
    height: 10px;
}
.vueperslides__bullet--active .default {
    width: 15px;
    height: 15px;
    background-color: var(--primary-base);
}

.latest-product .header {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.latest-product .logo-title {
    width: 190px;
    height: auto;
    position: relative;
    right: 80px;
    bottom: 25px;
}
.latest-product {
    padding: 30px 0px;
}

.latest-product .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1.5s ease-out;
}

.latest-product .enter {
    opacity: 1;
    transform: translateY(0px);
}
.latest-product-title {
    color: #fff;
}
</style>