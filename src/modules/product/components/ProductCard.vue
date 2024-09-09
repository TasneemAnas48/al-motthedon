<template>
    <b-card>
        <div class="image-container">
            <div class="love-icon">
                <b-icon icon="heart"></b-icon>
                <!-- <b-icon icon="heart-fill"></b-icon> -->
            </div>
            <b-img-lazy class="product-img" v-bind="mainProps" :src="item.image" :alt="item.title"></b-img-lazy>
        </div>
        <b-card-text>
            {{titleDisplayed(item.title)}}
            <span v-if="shouldShowPoints(item.title)">...</span>
        </b-card-text>
        <b-card-sub-title>AED {{ item.price }}</b-card-sub-title>
        <b-button class="main-btn small-btn" @click="showProduct">SEE MORE</b-button>
    </b-card>
</template>
<script>
export default {
    props: ["item"],
    data() {
        return {
            mainProps: {
                block: true,
                // blank: true,
                // blankColor: '#bbb',
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
        showProduct() {
            this.$router.push(`/product/${this.item.id}`)
        },
    },
}
</script>
<style lang="scss">
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
    background-color: #fff;
}
.product-img {
    max-width: 55%;
    height: 80%;
    transition: all .3s ease-in;
}
.product-img:hover{
    max-width: 65%;
    height: 90%;
    transition: all .3s ease-in;
}
.love-icon {
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
}
.bi-heart, .bi-heart-fill {
    color: var(--primary-base);
    font-size: 25px;
}
</style>
