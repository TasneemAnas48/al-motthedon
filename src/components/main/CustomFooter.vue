<template>
    <footer class="custom-footer container">
        <div class="row align-items-center" style="row-gap: 20px;">
            <div class="col-lg-4 col-md-6">
                <b-img :src="require('@/assets/img/logo2.png')" alt="AL MOTTHEDON" class="logo"></b-img>
                <ul class="footer-social-links">
                    <li v-for="(icon, index) in icons" :key="index">
                        <a :href="icon.link" target="_blank">
                            <b-img :src="icon.image" class="social-icons"></b-img>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="footer-title">Home</h5>
                <ul class="footer-ul">
                    <li style="margin-top: 18px" v-for="(item, index) in title" :key="index">
                        <router-link :to="item.to">{{ item.title }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-6">
                <router-link to="/product/category/electronics" style="color: var(--primary-base)">Elctronics</router-link>
                <ul class="footer-ul">
                    <li style="margin-top: 18px" v-for="(item, index) in title2" :key="index">
                        <router-link :to="item.to">{{ item.title }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="footer-title">Contact Us</h5>
                <ul class="footer-ul">
                    <li>
                        <a class="row list-contact-item" :href="'tel:+971 567155150'">
                            <b-icon class="icon-contact" icon="telephone-fill" aria-hidden="true"></b-icon>
                            <p style="direction: ltr">+971 56 715 5150</p>
                        </a>
                    </li>
                    <li>
                        <a class="row list-contact-item" :href="'tel:+971 48322253'">
                            <b-icon class="icon-contact" icon="telephone-fill" aria-hidden="true"></b-icon>
                            <p style="direction: ltr">+971 4 832 2253</p>
                        </a>
                    </li>
                    <li>
                        <a class="row list-contact-item" :href="'mailto:info@almotthedon.com'">
                            <b-icon class="icon-contact" icon="envelope-fill" aria-hidden="true"></b-icon>
                            <p>info@almotthedon.com</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <hr style="background-color: #fff; height: 1px; margin-bottom:0px">
        <P class="rights-reseved">
            © Al Motthedon 2024. All Rights Reseved.
        </P>
    </footer>
</template>
<script>

export default {

    data() {
        return {
            title: [
                {
                    title: "About Us",
                    to: "/about-us",
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
            title2: [
                {
                    title: "Jewelry",
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
            ],
            icons: [
                {
                    image: require("@/assets/icons/facebook_White.png"),
                    link: "https://www.facebook.com/AMGDECORuae/?_rdr"
                },
                {
                    image: require("@/assets/icons/Youtube - White .png"),
                    link: "https://www.youtube.com/"
                },
                {
                    image: require("@/assets/icons/instagram_White.png"),
                    link: "https://www.instagram.com/al_motthedon?igsh=MWZqeWp6MHFrNTcycQ%3D%3D"
                },
                {
                    image: require("@/assets/icons/Twitter - White .png"),
                    link: "https://twitter.com/"
                },
            ]
        };
    },
    methods: {
    },
    mounted() {
    },
}
</script>
<style lang="scss">
.custom-footer{
    margin-top: 50px
}
.custom-footer .logo {
    width: 200px;
    height: auto;
}
.custom-footer .social-icons {
    width: 30px;
    height: auto;
}
.custom-footer .footer-social-links {
    display: flex;
    gap: 20px;
    padding: 0px;
}
.custom-footer .b-icon {
    margin-top: 4px;
    margin-right: 7px;
}
.custom-footer .footer-title {
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
}
.custom-footer .list-contact-item {
    margin-top: 5px !important;
}
.custom-footer .footer-ul {
    padding-left: 0px !important;
}
.custom-footer .footer-ul a {
    color: var(--primary-base) !important;
    font-size: 15px;
    transition: all 0.5s;
    margin: auto 0px;
}
.custom-footer .footer-ul a:hover {
    margin-left: 10px !important;
    cursor: pointer;
    transition: all 0.5s;
}
.custom-footer .rights-reseved{
    color: #fff;
    text-align: center;
    padding: 15px 0px;
    margin-bottom: 0px;
    font-family: "RobotoFlex-Regular" !important;
}
</style>