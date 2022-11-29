<template>
<div>
    <section>
        <div class="container" style="margin-top:90px;">
            <div class="row">
                <div class="col-lg-5 mb-70 blog-content">
                    <h1 class="blogTitle">
                        <nuxt-link to="/blog-one" class="blogTitle mrgvlovani">{{$t('navs.blog.title')}}</nuxt-link>
                    </h1>
                </div>
            </div>
            <div class="row" v-for="featured in featuredNews" :key="featured.id">            
                <div class="col-lg-12">
                    <img :src="`https://august.ge/back/backend/web/images/store/${featured.filePath}`" />
                </div>
                <div class="col-lg-12">
                    <div class="mt-10">
                        <h3 class="mrgvlovani" v-if="currentLang == 'ka'">{{ featured.title_ge }}</h3>
                        <h3 class="mrgvlovani" v-else>{{ featured.title_en }}</h3>
                        <div v-if="$i18n.locale=='ka'">
                        <!-- <p class="text" v-html="featured.description_ge">
                        </p> -->
                        </div>
                        <div v-else>
                        <!-- <p class="text" v-html="featured.description">
                        </p> -->
                    </div>
                        <ul class="list-inline justify-content-center">
                            <li class="list-inline-item"><img src="~/assets/img/group-10.png" class="Group-10"></li>
                            <li class="list-inline-item">

                                <!-- <router-link :to="{ path: 'home', params: { userId: 123 }}">Home</router-link> -->
                                <div @click="goBlog(featured)">
                                    {{$t('navs.more.title')}} 
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="news-area ptb-60">
        <div class="container">
            <div class="row">

                <div class="col-lg-4 col-md-6" v-for="news in allNews" :key="news.id">
                    <div class="single-news-post">
                        <div class="news-image">
                            <!-- <nuxt-link :to="post.link"> -->
                            <img :src="`https://august.ge/back/backend/web/images/store/${news.filePath}`" />
                            <!-- </nuxt-link> -->
                        </div>

                        <div class="news-content text-center">
                            <h3 class="mrgvlovani text-left" v-if="currentLang == 'ka'">
                                {{news.title_ge}}
                            </h3>
                            <h3 class="mrgvlovani text-left" v-else>
                                {{news.title_en}}
                            </h3>
                            <!-- <span class="author">By <a href="#">{{post.author}}</a></span> -->
                            <!-- <p>{{post.post}}</p> -->
                            <div class="text-left">
                                <ul class="list-inline justify-content-center">
                            <li class="list-inline-item"><img src="~/assets/img/group-10.png" class="Group-10"></li>
                            <li class="list-inline-item">
                                <div @click="goBlog(news)">
                                    {{$t('navs.more.title')}}
                                </div>
                            </li>
                        </ul>
                            </div>
                            <div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</div>
</template>

<style scoped>


.blogTitle
{
  font-family: 'Playfair Display SC', serif;
  font-size: 41px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #161e17
}
.futured{
    font-family:'FiraGO', serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: #131415;
}
.post p {
    font-family:'FiraGO', serif;
  font-size: 16px;
  font-weight: 200;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: #131415;
}

</style>

<script>
import axios from 'axios';
export default {
    name: 'blog',
    data() {
        return {
            allNews: [],
            featuredNews: {},
            lang: '',
            currentLang: this.$i18n.locale,
        }
    },
    computed: {
        singleBlog(){
            return this.$store.getters.singleBlog;
        },
    },
    mounted() {
        const lang = this.$store.getters.language;
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
    },
    methods: {
        goBlog(val){
            this.$store.dispatch("addBlog", val);
            this.$router.push({ path: "blog-details"});
        },
    },
}
</script>
