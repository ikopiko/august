<template>
  <div>
    <!-- <TopPanel v-if="isShowing" @clicked="onTopPanelClose"></TopPanel> -->
    <TopHeader @onLocaleChange="updateLocale"></TopHeader>
    <Menubar :locale="localeLang" :key="localeChange"></Menubar>
    <nuxt />
    <Footer></Footer>
    <SiteLoader  v-if="loading" />
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';
import Menubar from './Menubar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import SiteLoader from './SiteLoder';
export default {
  components: {
    TopPanel, TopHeader, Menubar, Footer, BackToTop, SiteLoader
  },
  data() {
    return {
      loading: true,
      isShowing: true,
      localeLang: '',
      localeChange: 0,
    }
  },
  methods: {
    onTopPanelClose (value) {
      this.isShowing = value;
    },
    updateLocale(locale) {
      // alert("UPDATEEE "+locale);
      this.localeLang = locale;
      this.localeChange++;
    },
  },
  watch: {
    '$route' (pathUrl){
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 600);
    }
  },
  mounted(){
    setTimeout(() => { this.loading = false; }, 600);
  }
}
</script>