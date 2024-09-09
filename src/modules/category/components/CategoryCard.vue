<template>
    <div class="category-card" @click="showProduct" data-aos="flip-left" data-aos-duration="1800">
        <h4 class="title">{{ item.toUpperCase() }}</h4>
    </div>
</template>

<script>
export default {
    props: ["item"],
    methods:{
        showProduct(){
            this.$router.push(`/product/category/${this.item.toLowerCase()}`)
        }
    }

}
</script>

<style>
.category-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17vw;
    height: 12vw;
    background-color: #e6ca6994;
    cursor: pointer;
    transition: all 0.3s ease-in;
    margin: 10px;
}
.category-card:hover {
    background-color: var(--primary-base);  
    box-shadow: 0 0 30px #000;  
    transition: all 0.3s ease-in;
}
.category-card .title {
    color: #fff !important;
    font-size: 1.5vw;
}
@media (max-width: 767px) {
    .category-card {
        width: 180px;
        height: 100px;
    }
    .category-card .title {
        font-size: 15px;
    }
}

</style>