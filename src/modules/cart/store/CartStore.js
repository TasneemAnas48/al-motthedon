import { defineStore } from "pinia"
import Vue from 'vue'
export const useCartStore = defineStore("cartStore", {
    state: () => ({
        cart: [],
    }),
    getters: {
        count() {
            return this.cart.length
        },
        totalCost() {
            
            return this.cart.reduce((total, product) => total + (product.price * product.quantity), 0);
        },

    },
    actions: {
        initializeCart() {
            const storedCart = localStorage.getItem("cart");
            if (storedCart) {
                this.cart = JSON.parse(storedCart);
            }
        },
        addToCart(product) {
            this.cart = [...this.cart, product]
            localStorage.setItem("cart", JSON.stringify(this.cart))
            Vue.$toast.success("Added successfully", {
                duration: 4000,
                position: "top-right",
                queue: false
            });
        },
        removeFromCart(product) {
            this.cart = [...this.cart.filter((item) => item.id !== product.id)]
            localStorage.setItem("cart", JSON.stringify(this.cart))
            Vue.$toast.success("Removed successfully", {
                duration: 4000,
                position: "top-right",
                queue: false
            });
        },
        isProductInCart(product) {
            return this.cart.some(item => item.id === product.id);
        }
    },
});