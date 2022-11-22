<template>
<!-- Start Top Header Area -->
<div class="top-header desktopiza">
    <div class="container">
        <div class="row align-items-center">

            <div class="col-lg-2 col-md-3">
                <nuxt-link class="navbar-brand" to="/" v-if="storeLang == 'en'">
                    <img src="img/logo.png" alt="logo">
                </nuxt-link>
                <nuxt-link class="navbar-brand" to="/ka" v-else>
                    <img src="img/logo.png" alt="logo">
                </nuxt-link>
            </div>
            <div class="col-lg-10 col-md-8 ">
                <ul class="top-header-right-nav ">
                    <!-- <li>
                        <nuxt-link to="/login">Login</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/signup">Signup</nuxt-link>
                    </li>
                    <li><nuxt-link to="/products">Products</nuxt-link></li> -->
                    <!-- <li>
                        <nuxt-link to="/contact">{{$t('navs.contact.title')}}</nuxt-link>
                    </li>
                    <li>
                        <a href="tel:+995598641315">+995 598 64 13 15</a>
                    </li> -->
                    <!-- <li>
                        <v-text-field append-icon="mdi-magnify" class="searchInner"></v-text-field>
                    </li> -->
                    <li>
                        <a @click="changeLang(storeLang)" style="float:left; margin-right:20px; position: relative; bottom: 2px" >{{ this.langText }}</a><i class="fas fa-chevron-right"></i>
                    </li>
                    <!-- <li>
                        <nuxt-link to="/cart">Cart</nuxt-link>
                    </li> -->
                    <!-- <li>
                            <div class="languages-list">
                                <select>
                                    <option value="1">Eng</option>
                                    <option value="2">Ger</option>
                                    <option value="3">Span</option>
                                </select>
                            </div>
                        </li> -->
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- End Top Header Area -->
</template>

<style>
.v-text-field.searchInner {
    width: 225px;
    height: 46px !important;
    border-radius: 24.5px;
    border: solid 1px #4a4a4a;
    padding:  12px;
}
.v-input__slot:before{
    border-bottom: none !important
}
.top-header-right-nav li{
margin-right: 35px;
    }

</style>

<script>
export default {
    data(){
        return{
            langText: '',
            lang: '',
        }
    },
    mounted(){
        // alert(this.storeLang);
        if(this.storeLang == 'ka'){
            this.langText = 'ENG';
            this.lang = 'ka';
            // this.$store.commit('SET_LANG', this.lang)
            // this.$i18n.setLocale(this.lang)

        }
        else {
            this.langText = 'ქართ';
            this.lang = 'en';
            // this.$store.commit('SET_LANG', this.lang)
            // this.$i18n.setLocale(this.lang)
        }
    },
    computed: {
        storeLang(){
            return this.$store.getters.getLang; 
        },
    },
    methods: {
        changeLang (val) {
            // alert(val);
            // alert(this.$store.getters.getLang);
            if(val == 'en'){
                this.lang = 'ka';
                this.langText = 'ENG';
            } else {
                this.lang = 'en';
                this.langText = 'ქართ';
            }
            this.$i18n.setLocale(this.lang);
            this.$store.commit('SET_LANG', this.lang);
            this.$forceUpdate();
        this.$router.go();
        // if(this.storeLang == 'en'){
        //     this.lang = 'en';
        //     this.$i18n.setLocale(this.lang)
        //     this.$store.commit('SET_LANG', this.lang)
        // }
        // else {
        //     this.lang = 'ka';
        //     this.$i18n.setLocale(this.lang)
        //     this.$store.commit('SET_LANG', this.lang)
        // }
        // alert(this.lang);
        // this.$i18n.setLocale(this.lang)
        // this.$store.commit('SET_LANG', this.lang)
        // this.$router.go();
        }
    }
}
</script>
