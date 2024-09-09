<template>
    <b-navbar fixed toggleable="lg">
        <b-row>
            <b-img :src="require('@/assets/img/logo.png')" alt="AL MOTTHEDON" class="logo"></b-img>
            <b-navbar-toggle target="nav-collapse">
                <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="x-lg"></b-icon>
                    <b-icon v-else icon="list"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="my-collapse" style="justify-content:end">
                <div class="nav-right">
                    <b-navbar-nav class="social">
                        <li class="search-icon">
                            <b-icon icon="search"></b-icon>
                        </li>
                        <li class="cart-icon" @click="navigateCartView">
                            <b-icon icon="cart"></b-icon>
                            <span class="count" v-if="count > 0">{{ count }}</span>
                        </li>
                        <li v-for="(icon, index) in icons" :key="index">
                            <a :href="icon.link" target="_blank">
                                <b-img :src="icon.image" class="social-icons"></b-img>
                            </a>
                        </li>
                    </b-navbar-nav>
                    <b-navbar-nav style="align-items: flex-start;">
                        <li v-for="(item, index) in title" :key="index">
                            <router-link :to="item.to">{{ item.title }}</router-link>
                        </li>
                    </b-navbar-nav>
                </div>
            </b-collapse>
        </b-row>
    </b-navbar>
</template>

<script>
import { mapState } from "pinia"
import { useCartStore } from "@/modules/cart/store/CartStore"
export default {
    name: 'Navbar',
    data: () => ({
        title: [
            {
                title: "Home",
                to: "/",
            },
            {
                title: "Electronics",
                to: "/product/category/electronics",
            },
            {
                title: "Jewelery",
                to: "/product/category/jewelery",
            },
            {
                title: "Men's Clothing",
                to: "/product/category/men's clothing",
            },
            {
                title: "Women's Clothing",
                to: "/product/category/women's clothing",
            },
            {
                title: "Media Center",
                to: "/",
            },
            {
                title: "Contact Us",
                to: "/",
            },
        ],
        icons: [
            {
                image: require("@/assets/icons/Youtube - Gold.png"),
                link: "https://www.youtube.com/"
            },
            {
                image: require("@/assets/icons/instagram_Gold.png"),
                link: "https://www.instagram.com/al_motthedon?igsh=MWZqeWp6MHFrNTcycQ%3D%3D"
            },
            {
                image: require("@/assets/icons/Twitter - Gold.png"),
                link: "https://twitter.com/"
            },
            {
                image: require("@/assets/icons/facebook_Gold.png"),
                link: "https://www.facebook.com/AMGDECORuae/?_rdr"
            },
        ],
    }),
    computed: {
        ...mapState(useCartStore, ['count']),
    },
    created() {
        const cartStore = useCartStore();
        cartStore.initializeCart();
    },
    methods:{
        navigateCartView(){
            this.$router.push('/cart')
        }
    }
};
</script>

<style lang="scss">
.navbar .logo {
    width: 160px;
    height: auto;
}
.navbar .navbar-toggler {
    color: var(--primary-base) !important;
    border-color: var(--primary-base) !important;
    height: 45px;
}
.navbar {
    background-color: var(--secondary-base);
    border-bottom: 10px solid var(--primary-base);
    box-shadow: 0 0 10px #e4e4e4;
    padding: 15px 40px !important;
}
.navbar .row {
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.navbar-nav {
    gap: 25px;
    align-items: center;
}
.navbar-nav a {
    color: #fff;
    transition: all 0.2s ease-in;
}
.navbar-nav a:hover {
    color: var(--primary-base);
    transition: all 0.2s ease-in;
}
.navbar .nav-link {
    padding: 6px 8px !important;
}
.navbar-nav .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    font-size: 16px;
}
.navbar .nav-item {
    margin: 0px 10px;
}
.navbar .social-icons {
    width: 30px;
    height: auto;
}
.navbar .nav-right {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 30px;
}
.navbar .bi-search,
.navbar .bi-cart {
    color: white;
    font-size: 22px;
    margin-right: 40px;
}
.navbar .bi-search:hover,
.navbar .bi-cart:hover {
    color: var(--primary-base);
    cursor: pointer;
}
.navbar .cart-icon {
    position: relative;
}
.navbar .count {
    position: absolute;
    left: 20px;
    bottom: 15px;
    color: #fff;
    background-color: var(--primary-base);
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-family: "RobotoFlex-Regular" !important;
}

@media (max-width: 991px) {
    .navbar .social {
        flex-direction: row;
        order: 2;
    }
    .navbar .nav-right {
        align-items: flex-start;
        margin-left: 40px;
        margin-top: 10px;
    }
    .navbar .search-icon {
        display: none;
    }
}
</style>