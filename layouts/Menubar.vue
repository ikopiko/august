<template>
<div>
    <!-- Start Navbar Area -->
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="comero-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">

                    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">

                            <li class="nav-item p-relative">
                                <nuxt-link to="/about-full" class="nav-link">About us</nuxt-link>
                                <!-- <a href="#" class="nav-link">About us <i class="fas fa-chevron-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <nuxt-link to="/" class="nav-link active">Home Style One</nuxt-link>
                                    </li>

                                    <li class="nav-item">
                                        <nuxt-link to="/diction-two" class="nav-link active">Home Style Two</nuxt-link>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link to="/diction-three" class="nav-link active">Home Style Three</nuxt-link>
                                    </li>
                                </ul> -->
                            </li>

                            <li class="nav-item p-relative">
                                <nuxt-link to="/products" class="nav-link">Shop</nuxt-link>
                                <!-- <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <nuxt-link to="/products" class="nav-link">Products</nuxt-link>
                                    </li>

                                    <li class="nav-item">
                                        <nuxt-link to="/products-details/1" class="nav-link">Products Details</nuxt-link>
                                    </li>
                                </ul> -->
                            </li>

                            <!-- <li class="nav-item">
                                <nuxt-link to="/gallery-one" class="nav-link">Gallery</nuxt-link>
                            </li> -->

                            <!-- <li class="nav-item p-relative"><a href="#" class="nav-link">Pages <i class="fas fa-chevron-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <nuxt-link to="/gallery-one" class="nav-link">Gallery</nuxt-link>
                                    </li>

                                    <li class="nav-item">
                                        <nuxt-link to="/cart" class="nav-link">Cart</nuxt-link>
                                    </li>

                                    <li class="nav-item">
                                        <nuxt-link to="/checkout" class="nav-link">Checkout</nuxt-link>
                                    </li>

                                    <li class="nav-item">
                                        <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
                                    </li>

                                    <li class="nav-item">
                                        <nuxt-link to="/signup" class="nav-link">Signup</nuxt-link>
                                    </li>

                                    <li class="nav-item">
                                        <nuxt-link to="/not-found" class="nav-link">Error 404</nuxt-link>
                                    </li>

                                    <li class="nav-item">
                                        <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                                    </li>
                                </ul>
                            </li> -->

                            <li class="nav-item p-relative"><nuxt-link to="/blog-one" class="nav-link">Blog</nuxt-link>
                                <!-- <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <nuxt-link to="/blog-one" class="nav-link">Blog Grid</nuxt-link>
                                    </li> 

                                    <li class="nav-item">
                                        <nuxt-link to="/blog-details" class="nav-link">Blog Details</nuxt-link>
                                    </li>
                                </ul> -->
                            </li>

                            <li class="nav-item">
                                <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/faq" class="nav-link">FAQ</nuxt-link>
                            </li>
                        </ul>

                        <div class="others-option">
                            <div class="option-item">
                                <nuxt-link to="/login">Login</nuxt-link>
                            </div>
                            <div class="option-item">
                                <a @click.prevent="toggle" href="#">
                                    Cart({{cart.length}}) <i class="fas fa-shopping-bag"></i>
                                </a>
                            </div>
                        </div>
                    </b-collapse>
                </nav>
            </div>
        </div>
    </div>
    <!-- End Navbar Area -->

    <SidebarPanel></SidebarPanel>
</div>
</template>

<style scoped>
ul {
    width: 84%;
    display: table;
    table-layout: fixed;
}

ul>li {
    display: table-cell;
}

ul>li>a {
    display: block;

}
</style>

<script>
import SidebarPanel from '../layouts/SidebarPanel';
import {
    mutations
} from '../utils/sidebar-util';
export default {
    components: {
        SidebarPanel
    },
    data() {
        return {
            isSticky: false
        }
    },
    mounted() {
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if (scrollPos >= 100) {
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    },
    computed: {
        cart() {
            return this.$store.getters.cart
        }
    },
    methods: {
        toggle() {
            mutations.toggleNav()
        }
    }
}
</script>
