<template>
    <div class="hero">
        <vueper-slides autoplay :arrows="false" :touchable="false"  :pause-on-hover="false">
            <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: {
        VueperSlides,
        VueperSlide,
    },
    data() {
        return {
            slides: [{
                image: require('@/assets/img/Header1.jpg'),
            },
            {
                image: require('@/assets/img/Header3.jpg'),
            },
            {
                image: require('@/assets/img/Header1.jpg'),
            },
            {
                image: require('@/assets/img/Header3.jpg'),
            }],
        };
    },

}
</script>
``
<style>
.hero {
    /* margin-top: 10px; */
    margin-bottom: 100px;
}
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
.vueperslides__bullets {
    bottom: -60px;
}
</style>