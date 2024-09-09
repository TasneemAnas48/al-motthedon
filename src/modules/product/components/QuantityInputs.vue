<template>
    <div class="quantity-row">
        <b-button class="main-btn xs-btn" @click="plusQty">
            <b-icon icon="plus-lg"></b-icon>
        </b-button>
        <span class="quantity">{{ newQuantity }}</span>
        <b-button class="main-btn xs-btn" @click="minQty">
            <b-icon icon="dash-lg"></b-icon>
        </b-button>
    </div>
</template>

<script>
export default {
    props: ["quantity"],
    data() {
        return {
        };
    },
    computed:{
        newQuantity: {
            get() {
                return this.quantity
            },
            set(value) {
                this.$emit('update:quantity', value)
            }
        },
    },
    methods: {
        plusQty() {
            this.newQuantity++
        },
        minQty() {
            if (this.newQuantity > 1)
                this.newQuantity--
        },
    }

}
</script>

<style>
.quantity-row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.quantity {
    color: var(--primary-base);
    font-size: 20px;
    width: 70px;
    text-align: center;
}
</style>