<template>
    <div class="product-by-cat container">
        <div class="row" style="margin:40px 0px;">
            <div class="col-lg-8">
                <p
                    style="color: #fff;font-size: 25px;font-weight: 800;margin-right: 15px;"
                >{{ category.toUpperCase() }}</p>
            </div>
            <div class="col-lg-4">
                <b-form-input v-model="search" placeholder="Search ..." class="form-input"></b-form-input>
            </div>
        </div>

        <div
            class="row"
            style="row-gap: 50px"
            v-if="!productBase.loadingFetch || productByCatList.length > 0"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <div
                v-for="(product, index) in filterSearch"
                :key="index"
                class="col-lg-4 col-md-6 col-sm-12"
            >
                <ProductCard :item="product" />
            </div>
        </div>
        <Loader v-if="productBase.loadingFetch" />
        <NotFound v-if="!productBase.loadingFetch && productByCatList.length == 0 && !productBase.errorFetch"/>
        <NoInternet v-if="!productBase.loadingFetch && productBase.errorFetch" />
        <Divider />
    </div>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useProductStore } from "../store/ProductStore"
import ProductCard from "../components/ProductCard.vue"
import Loader from "@/components/main/Loader.vue"
import Divider from "@/components/main/Divider.vue"
import NoInternet from "@/components/main/NoInternet.vue"
import NotFound from "@/components/main/NotFound.vue"
export default {
    components: {
        ProductCard,
        Loader,
        Divider,
        NoInternet,
        NotFound
    },
    data() {
        return {
            search: null,
        }
    },
    computed: {
        ...mapState(useProductStore, ['productBase', 'productByCatList']),
        filterSearch() {
            return this.productByCatList.filter(item => {
                return !this.search || item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        },
        category() {
            return this.$route.params.category
        }
    },
    methods: {
        ...mapActions(useProductStore, ['getProductByCat']),
    },
    watch: {
        category(newVal) {
            this.getProductByCat(newVal)
        }
    },
    mounted() {
        this.getProductByCat(this.$route.params.category)
    }
}
</script>

<style>

</style>