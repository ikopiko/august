<template>
    <div class="container">
        <client-only>
            <!-- Start Main Banner Area -->
            <div class="home-slides-two">
                <carousel :autoplay=false :autoplayTimeout=3000 :navigationEnabled=true :paginationEnabled=true
                    :perPageCustom="[[0, 1], [768, 1], [1024, 1], [1200, 1]]">
                    <slide v-for="slide in allSlides" :key="slide.id">
                        <!-- <router-link :to="{ name: 'products', params: { catId: slide.catId } }"> -->
                            <div class="banner-section item-left">
                                <div class="d-table">
                                    <div class="d-table-cell">
                                        <div v-if="lang == 'ka'">
                                            <div class="banner-content">
                                                <h1 v-html="slide.title_ge" class="mrgvlovani"></h1>
                                                <p v-html="slide.description_ge"></p>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="banner-content">
                                                <h1 v-html="slide.title"></h1>
                                                <p v-html="slide.description"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img :src="`https://august.ge/back/backend/web/images/store/${slide.filePath}`"
                                    class="banner-image-right" />
                            </div>
                        <!-- </router-link> -->
                    </slide>
                </carousel>
            </div>
            <!-- End Main Banner Area -->
        </client-only>
        <!-- <div class="mobiluriza" style="padding: 10px 0 50px 0"></div> -->
    </div>

</template>

<style scoped>
.VueCarousel-navigation-button {

    top: 45%;
    color: #C1C1C1 !important;
    left: 15px;
    outline: 0;
    transform: translateY(-50%) translateX(0);
    opacity: 1 !important;
    border: 1px solid #C1C1C1 !important;

    border-radius: 50% !important;
    width: 53px;
    height: 53px;
}



.VueCarousel-navigation-button[data-v-453ad8cd] {
    color: rebeccapurple !important;
}
</style>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            allSlides: [],
            lang: '',
        }
    },

    methods: {

    },
    mounted() {
        this.lang = this.$i18n.locale;
        const TOKEN = 'RiG7zh-dadLHoih5AeXXzmEbaXvWbHPS';

        axios.request({
            method: "post",
            url:
                "https://august.ge/back/rest/web/index.php?r=v1/slider/list",
            headers: {
                Authorization: "Bearer " + TOKEN,
            },
            // data: bodyFormData,
        })
            .then((response) => {
                console.log('Slides Response: ', response);
                this.allSlides = response.data;
            });
    },
}
</script>