<template>
<div>
    <!-- <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>Blog</li>
                </ul>
            </div>
        </div> -->

    <section>
        <div class="container" style="margin-top:90px;">
            <div class="row">
                <div class="col-lg-5 mb-70">
                    <h1 class="title">
                        <nuxt-link to="/blog-one">Blog</nuxt-link>
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <img src="../assets/img/about/about-first.jpg" class="img-fluid">
                </div>
                <div class="col-lg-7">
                    <div class="mt-60">
                        <p class="futured">Feautured</p>
                        <h1 class="blogTitle">About Cool Pastry</h1>
                        <p class="text">
                            Our olive oil is a celebration of the creativity of chefs and food fans the world over. We wouldn’t be here without them, so this page is all about the great work they do. In other words, these stories are about you.
                        </p>
                        <ul class="list-inline justify-content-center">
                            <li class="list-inline-item"><img src="~/assets/img/group-10.png" class="Group-10"></li>
                            <li class="list-inline-item" style="position: relative; bottom:20px;">
                                <nuxt-link to="/blog-details">Explore more</nuxt-link>
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

                <div class="col-lg-4 col-md-6" v-for="post in posts" :key="post.id">
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
                                    <li class="list-inline-item"><img src="~/assets/img/group-10.png" class="Group-10"></li>
                                    <li class="list-inline-item" style="position: relative; bottom:20px;">
                                        <nuxt-link to="/blog-details">Explore more</nuxt-link>
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

<script>
export default {
    data() {
        return {
            posts: [{
                    id: 1,
                    title: 'Discover the best experience in baking and pastry',
                    link: 'blog-details',
                    author: 'Admin',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: require('~/assets/img/news1.jpg'),
                    class: 'active'
                },
                {
                    id: 2,
                    title: 'Discover the best experience in baking and pastry',
                    link: 'blog-details',
                    author: 'Admin',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: require('~/assets/img/news1.jpg')
                },
                {
                    id: 3,
                    title: 'Discover the best experience in baking and pastry',
                    link: 'blog-details',
                    author: 'Admin',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: require('~/assets/img/news1.jpg')
                },
                {
                    id: 4,
                    title: 'Discover the best experience in baking and pastry',
                    link: 'blog-details',
                    author: 'Admin',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: require('~/assets/img/news1.jpg')
                },
                {
                    id: 5,
                    title: 'Discover the best experience in baking and pastry',
                    link: 'blog-details',
                    author: 'Admin',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: require('~/assets/img/news1.jpg')
                },
            ]
        }
    }
}
</script>
