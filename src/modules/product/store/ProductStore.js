import { defineStore } from "pinia";
import { BaseState } from "@/store/BaseState";
import ProductService from "../services/ProductService";
export const useProductStore = defineStore("productStore", {
    state: () => ({
        productBase: new BaseState(),
        productModel: {
            id: '',
            title: '',
            price: '',
            category: '',
            description: '',
            image: '',
            rating: {},
            quantity: 1,
        },
        productList: [],
        latestProducts: [],
        productByCatList: [],
    }),
    actions: {
        clearProductModal() {
            this.productModel.id = ''
            this.productModel.title = ''
            this.productModel.price = ''
            this.productModel.category = ''
            this.productModel.description = ''
            this.productModel.image = ''
            this.productModel.rating = {}
            this.productModel.quantity = 1
        },
        fetchAllProduct() {
            this.productBase.loadingFetch = true
            ProductService.getAll().then((res) => {
                this.productList = res.data
                this.productBase.loadingFetch = false
                this.productBase.errorFetch = false
            })
                .catch((err) => {
                    this.productBase.loadingFetch = false
                    this.productBase.errorFetch = true
                });
        },
        fetchLatestProduct() {
            this.productBase.loadingFetch = true
            ProductService.getLatest().then((res) => {
                this.latestProducts = res.data
                this.productBase.loadingFetch = false
                this.productBase.errorFetch = false
            })
                .catch((err) => {
                    this.productBase.loadingFetch = false
                    this.productBase.errorFetch = true
                });
        },
        getProductById(id) {
            this.productBase.loadingFetchItem = true
            ProductService.getById(id).then((res) => {
                this.productBase.loadingFetchItem = false
                this.productBase.error = false
                this.productModel.id = res.data.id
                this.productModel.title = res.data.title
                this.productModel.price = res.data.price
                this.productModel.category = res.data.category
                this.productModel.description = res.data.description
                this.productModel.image = res.data.image
                this.productModel.rating = res.data.rating
            })
                .catch((err) => {
                    this.productBase.loadingFetchItem = false
                    this.productBase.error = true
                })
        },
        getProductByCat(category) {
            this.productByCatList = []
            this.productBase.loadingFetch = true
            ProductService.getByCat(category).then((res) => {
                this.productByCatList = res.data
                this.productBase.loadingFetch = false
                this.productBase.errorFetch = false
            })
                .catch((err) => {
                    this.productBase.loadingFetch = false
                    this.productBase.errorFetch = true
                });
        },
    },
});