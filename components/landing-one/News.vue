<template>
<client-only>
    <!-- Start News Area -->
    <section class="news-area ptb-60">
        <div class="container">
            <div class="row" style="margin-bottom:44px">
                <div class="col md-4">
                    <h1 class="title"><nuxt-link to="/blog-one" >Blog</nuxt-link></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div class="col md-4"></div>
                <div class="col md-4"></div>
            </div>
            <div class="row" style="margin-bottom:44px">

                <div class="news-slides owl-carousel owl-theme">
                    <carousel :autoplay=true :autoplayTimeout=1000 :perPageCustom="[[0, 1], [768, 2], [1024, 3], [1200, 3]]">
                        <slide v-for="post in posts" :key="post.id">
                            <div class="col md-4">
                                <div class="single-news-post">
                                    <div class="news-image">
                                        <nuxt-link :to="post.link">
                                            <img :src="post.image" :alt="post.title">
                                        </nuxt-link>
                                    </div>

                                    <div class="news-content text-center">
                                        <h3>
                                            <nuxt-link :to="post.link">{{post.title}}</nuxt-link>
                                        </h3>
                                        <!-- <span class="author">By <a href="#">{{post.author}}</a></span> -->
                                        <!-- <p>{{post.post}}</p> -->
                                        <div>
                                            <ul class="list-inline justify-content-center">
                                                <li class="list-inline-item"><img src="img/group-10.png" class="Group-10"></li>
                                                <li class="list-inline-item" style="position: relative; bottom:20px;"><nuxt-link :to="post.link">Explore more</nuxt-link></li>
                                            </ul>
                                        </div>
                                        <div>
                                            
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
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



</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            posts: [],
        }
    },
    mounted() {
        const TOKEN = 'RiG7zh-dadLHoih5AeXXzmEbaXvWbHPS';
        
        // var bodyFormData = new FormData();
        // bodyFormData.set("branch", this.branch);
        // bodyFormData.set("status_key", this.status);

        axios.request({
            method: "post",
            url:
            "http://august.webertela.online/rest/web/index.php?r=v1/faq/list",
            headers: {
            Authorization: "Bearer " + TOKEN,
            },
            // data: bodyFormData,
        })
        .then((response) => {
            console.log('Products Response: ', response);
            this.allFAQ = response.data;
        });
    },
}
</script>
