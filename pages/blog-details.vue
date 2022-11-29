<template>
<div>

    <section class="blog-details-area mt-90">
        <div class="container">
            <div class="row">
                <div class="col-md-2">&nbsp;</div>
                <div class="col-md-8">
                <div v-if="currentLang == 'ka'">
                    <div class="article-content">
                        <h3 class="text-center title-detail mb-10 mrgvlovani">{{ news.title_ge }}</h3>
                    </div>
                </div>
                <div v-else>
                    <div class="article-content">
                        <h3 class="text-center title-detail mb-10 ">{{ news.title_en }}</h3>
                    </div>
                </div>
                </div>
                <div class="col-md-2">&nbsp;</div>
            </div>
            <div class="row mb-30">
                <div class="col-md-2">&nbsp;</div>
                <div class="col-md-8 text-center">
                    <div class="blog-details">
                        <div class="article-img">
                            <img :src="`http://august.ge/back/backend/web/images/store/${news.filePath}`" />
                        </div>
                    </div>
                </div>
                <div class="col-md-2">&nbsp;</div>
            </div>
        </div>

        <div class="container-fluid fullBg">
            <div class="row">
                <div class="col-md-12  mt-50 mb-75">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-2">
                                <div class="share text-center">
                                    <p>Share</p>
                                    <p class="xazi">
                                        &nbsp;
                                    </p>
                                    <ul class="shareUl">
                                        <li class="shareLi"><img src="../assets/img/facebook.svg" class="facebook"></li>
                                        <li class="shareLi"><img src="../assets/img/linkedin-1.svg" class="facebook"></li>
                                        <li class="shareLi"><img src="../assets/img/path.svg" class="facebook"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-8 ">
                                <div v-if="currentLange == 'ka'">
                                <div class="blog-details" v-html="news.description_ge">
                                </div>
                                </div>
                                <div v-else>
                                <div class="blog-details" v-html="news.description_en">
                                </div>
                                </div>
                            </div>
                            <div class="col-md-2">&nbsp;</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>

export default {
    name: 'news_detail',
    data() {
        return {
            news: {},
            lang: '',
            currentLang: this.$i18n.locale,
        }
    },
  async created () {
    this.news = this.singleBlog;
	},
    computed: {
        singleBlog(){
            return this.$store.getters.singleBlog;
        },
    },
    mounted() {
        console.log('orderNews: ', this.news);
    }
}
</script>
