<template>
    <div class="home">
        <Hero />
        <LatestProduct />
        <JewelryBanner />
        <Category />
    </div>
</template>


<script>
import Hero from "../components/Hero.vue"
import JewelryBanner from "../components/JewelryBanner.vue"
import LatestProduct from "@/modules/product/components/LatestProduct.vue"
import Category from '@/modules/category/components/Category.vue'
import CustomFooter from '@/components/main/CustomFooter.vue'
export default {
    components: {
        Hero,
        LatestProduct,
        Category,
        CustomFooter,
        JewelryBanner
    },
    
    data: () => ({
        
    }),
    computed: {
    },
    methods: {
        
    },
    mounted() {
    }
};
</script>

<style lang="scss">
@import url(@/assets/Css/main.css);

</style>
