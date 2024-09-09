<template>
    <section class="category container">
        <div class="overlay">
            <div class="header">
                <h1 class="category-title">CATEGORIES</h1>
            </div>
            <div class="content">
                <div
                    class="col-lg-3 col-sm-6 d-flex justify-content-center"
                    v-for="(item, i) in categoryList"
                    :key="i"
                >
                    <category-card :item="item" />
                </div>
            </div>
        </div>
        <Divider />
    </section>
</template>

<script>
import CategoryCard from "./CategoryCard.vue"
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Loader from "@/components/main/Loader.vue"
import Divider from "@/components/main/Divider.vue"

export default {
    components: {
        CategoryCard,
        VueperSlides,
        VueperSlide,
        Loader,
        Divider
    },
    data() {
        return {
            categoryList: ["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"]
        };
    },
    computed: {
    },
    methods: {
    },
    mounted() {
    }

}
</script>

<style>
.category {
    margin-top: 50px;
    padding: 0px !important;
    background-image: url(@/assets/img/Header2.jpg);
    position: relative;
    height: 100vh;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
}
.category .overlay {
    height: 100%;
    width: 100%;
    background-color: #000000c5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2vw;
}
.category .header {
    text-align: center;
}
.category .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* gap: 10px */
}
.category .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1.5s ease-out;
}
.category .enter {
    opacity: 1;
    transform: translateY(0px);
}
.category .category-title {
    color: var(--primary-base) !important;
    font-size: 3.5vw;
}
@media (max-width: 767px) {
    .category .category-title {
        font-size: 30px;
    }
}
</style>