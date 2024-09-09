<template>
    <section class="jewelry-banner">
        <div class="title-container">
            <h4 class="banner-title">{{ title.toUpperCase() }}</h4>
        </div>
        <div class="content-banner">
            <b-row style="margin: 0px">
                <div class="col-sm-6"></div>
                <div
                    class="col-sm-6"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <p class="desc-banner">"{{ desc }}"</p>
                    <b-button class="main-btn big-btn" style="margin-top: 30px;">MORE</b-button>
                </div>
            </b-row>
        </div>
        <div class="img-container">
            <b-img-lazy
                data-aos="fade-right"
                data-aos-duration="1500"
                :src="require('@/assets/img/jewelry-banner.jpg')"
                alt="jewelry banner"
                class="banner-img"
            ></b-img-lazy>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title: "LUXURY JEWELRY COLLECTION",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore a praesentium animi ratione corrupti enim atque illo mollitia iusto? Facilis, aliquam ducimus. Laudantium illo dolorem ut obcaecati blanditiis distinctio? Facilis."
        };
    }

}
</script>

<style>
.jewelry-banner {
    margin: 150px 0px;
    /* height:400px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.jewelry-banner .title-container {
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: var(--primary-base);
    height: 70px;
    width: 100%;
}
.jewelry-banner .banner-title {
    font-family: "RobotoFlex-Regular" !important;
    margin-right: 15vw;
    margin-bottom: 0px;
}
.jewelry-banner .content-banner {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}
.jewelry-banner .desc-banner {
    width: 45vw;
    color: #fff;
    font-family: "RobotoFlex-Regular" !important;
}
.jewelry-banner .img-container {
    position: relative;
}
.jewelry-banner .banner-img {
    position: absolute;
    left: 110px;
    bottom: -100px;
    width: 30vw;
    height: 450px;
    border-radius: 5px;
    object-fit: cover;
}
@media (max-width: 900px) and (min-width: 725px) {
    .jewelry-banner .banner-title {
        margin-right: 8vw;
    }
    .jewelry-banner .banner-img {
        left: 70px;
        bottom: 0px;
        height: 400px;
    }
}
@media (max-width: 724px) and (min-width: 575px) {
    .jewelry-banner .banner-title {
        margin-right: 5vw;
        font-size: 20px;
    }
    .jewelry-banner .desc-banner {
        font-size: 14px;
    }
    .jewelry-banner .banner-img {
        left: 50px;
        bottom: 0px;
        height: 350px;
    }
}
@media (max-width: 575px) {
    .jewelry-banner {
        margin: 100px 0px;
    }
    .jewelry-banner .banner-title {
        margin-right: 20vw;
        font-size: 17px;
    }
    .jewelry-banner .desc-banner {
        width: 90vw;
        font-size: 14px;
    }
    .jewelry-banner .img-container {
        display: none;
    }
}
</style>