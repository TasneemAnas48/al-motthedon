import { defineStore } from "pinia";
import { BaseState } from "@/store/BaseState";
import CategoryService from "../services/CategoryService";
export const useCategoryStore = defineStore("categoryStore", {
    state: () => ({
        categoryBase: new BaseState(),
        categoryModel: {
            title: '',
            image: ''
        },
        categoryList: [],
        image: '',
    }),
    getters: {
    },
    actions: {
        fetchAllCategory() {
            this.categoryBase.loadingFetch = true
            CategoryService.getAll().then((res) => {
                this.categoryList = res.data
                this.categoryBase.loadingFetch = false
                this.categoryBase.errorFetch = false
                // console.log(this.categoryList)
            })
                .catch((err) => {
                    this.categoryBase.loadingFetch = false
                    this.categoryBase.errorFetch = true
                });
        },
    },
});
