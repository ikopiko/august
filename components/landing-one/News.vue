<template>
<client-only>
    <!-- Start News Area -->
    <section class="news-area ptb-60">
        <div class="container padingiza">
            <div class="row" style="margin-bottom:44px">
                <div class="col-md-6">
                    <div v-if="$i18n.locale=='ka'">
                        <div class="blog-content">
                        <h1>
                            <nuxt-link to="/blog-one" class="titleA mrgvlovani"> {{allNewstitle.title_ge}}</nuxt-link>
                        </h1>
                        <p v-html="allNewstitle.description_ge"></p>
                    </div>
                                                    </div>
                                                    <div v-else>
                                                        <h1>
                            <nuxt-link to="/blog-one" class="titleA"> {{allNewstitle.title}}</nuxt-link>
                        </h1>
                        <p>{{allNewstitle.description}}</p>
                                                    </div>

                    
                </div>
                <div class="col md-4"></div>
                <div class="col md-4"></div>
            </div>
            <div class="row" style="margin-bottom:44px">
                <hooper :settings="hooperSettings">
                    <slide v-for="news in allNews" :key="news.id">
                        <div class="col md-4">
                            <div class="single-news-post">
                                <div class="news-image">
                                    <!-- <nuxt-link :to="news.link">  -->
                                    <img :src="`https://august.ge/back/backend/web/images/store/${news.filePath}`" />
                                    <!-- </nuxt-link>  -->
                                </div>

                                <div class="news-content text-center">
                                    <div v-if="$i18n.locale=='ka'">
                                    <h3 class="mrgvlovani">
                                        <!-- <nuxt-link :to="post.link">{{news.title}}</nuxt-link> -->
                                        {{news.title_ge}}
                                    </h3>
                                </div>
                                <div v-else>
                                     {{news.title}}
                                </div>
                                    <!-- <span class="author">By <a href="#">{{mews.author}}</a></span> -->
                                    <!-- <p>{{news.post}}</p> -->
                                    <div>
                                        <ul class="list-inline justify-content-center">
                                            <li class="list-inline-item"><img src="img/group-10.png" class="Group-10"></li>
                                            <li class="list-inline-item" style="position: relative; bottom:20px;">
                                                <router-link  class="maxLink" :to="{ name: 'blog-details', params: { news: news }}">
                                                    {{$t('navs.more.title')}}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
            </div>
        </div>
    </section>
    <!-- End News Area -->
</client-only>
</template>

<style scoped>

.Group-10 {
    width: 48px;
    height: 48px;
    object-fit: contain;
    float: left;
}

.hooper {
    height: auto;
}
</style>

<script>
import axios from 'axios';
import {
    Hooper,
    Slide,
    Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    components: {
        Hooper,
        Slide,
        HooperNavigation
    },
    data() {
        return {
            hooperSettings: {
                itemsToShow: 3,
                keysControl: false,
                autoPlay: true,
                playSpeed: 3000,
                transition: 300,
                hoverPause: true,
                centerMode: true,
                infiniteScroll: false,
                wheelControl: false,
                breakpoints: {
                    2400: {
                        itemsToShow: 4
                    },
                    1800: {
                        itemsToShow: 3
                    },
                    1500: {
                        itemsToShow: 3
                    },
                    1100: {
                        itemsToShow: 3
                    },
                    0: {
                        itemsToShow: 1.5
                    }
                }
            },
            allNews: [],
            featuredNews: {},
            allNewstitle: {},
            lang: null,
        }

    },
    mounted() {
        const lang =  this.$i18n.locale;;
        const TOKEN = 'RiG7zh-dadLHoih5AeXXzmEbaXvWbHPS';
        
        // var bodyFormData = new FormData();
        // bodyFormData.set("branch", this.branch);
        // bodyFormData.set("status_key", this.status);

        axios.request({
            method: "post",
            url:
            "https://august.ge/back/rest/web/index.php?r=v1/news/list",
            headers: {
            Authorization: "Bearer " + TOKEN,
            },
            // data: bodyFormData,
        })
        .then((response) => {
            if(lang == 'ka'){
                console.log('Catogeries Response: ', response);
                this.allNews = response.data;
                this.allNews.forEach((x) => {
                    x.title_en = x.title,
                    x.title = x.title_ge,
                    x.description_en = x.description,
                    x.description = x.description_ge
                });
                this.featuredNews = this.allNews.filter((x) => x.feautured == '1');
                console.log('featured: ', this.featuredNews);
            }
            else {
                console.log('Catogeries Response: ', response);
                this.allNews = response.data;
                this.featuredNews = this.allNews.filter((x) => x.feautured == '1');
                console.log('featured: ', this.featuredNews);
            }
        });
        axios.request({
            method: "post",
            url:
            "https://august.ge/back/rest/web/index.php?r=v1/newstitle/list",
            headers: {
            Authorization: "Bearer " + TOKEN,
            },
            // data: bodyFormData,
        })
        .then((response) => {
            console.log('Products Response: ', response);
            this.allNewstitle = response.data;
            this.allNewstitle = this.allNewstitle[0];

            

            // var s = this.newstitle.description;

            // var middle = Math.floor(s.length / 2);
            // var before = s.lastIndexOf(' ', middle);
            // var after = s.indexOf(' ', middle + 1);

            // if (middle - before < after - middle) {
            //     middle = before;
            // } else {
            //     middle = after;
            // }

            // this.aboutHalf1 = s.substr(0, middle);
            // this.aboutHalf2 = s.substr(middle + 1);
        });
    },
}
</script>
