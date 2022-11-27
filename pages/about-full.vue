<template>
<div class="container">
    <!-- <div class="row">
        <div class="col-12" style="height: 100px;">
            <span class="about-us  pt-10">
               {{ about.title }}
            </span>
        </div>
    </div> -->
    <div class="row desktopiza">
        <div class="col-6 sm-12">
            <blockquote>
                <span  v-if="$i18n.locale=='ka'" class="about-quote mrgvlovani">
                    {{ about.quote_ge }}
                </span>
                <span v-else class="about-quote">
                {{  about.quote }}
            </span>
            </blockquote>

        </div>
        <div class="col-6">
            &nbsp;
        </div>
        <div class="row ">
            <div class="col-12">
                <img  src="../assets/img/about/august-about-full.jpg" class="mx-auto d-block">
            </div>
        </div>
        <div class="row mt-60 mb-60">
            <div class="col-4  sm-12">
                <span v-if="$i18n.locale=='ka'" class="about-us mrgvlovani">
                                     {{ about.title_ge }}
                                    </span>
                <span v-else class="about-us">
                {{ about.title }}
                </span>
            </div>
            <div class="col-4  sm-12"   v-html="aboutHalf1">
        
            </div>
            <div class="col-4  sm-12"  v-html="aboutHalf2">
  
            </div>

    </div>
   </div>
   <div class="mobiluriza">
    <div class="row mb-50 mt-30">
            <div class="col-12">
                <span v-if="lang == 'ka'" class="about-us mrgvlovani about-us">
                                     {{ about.title_ge }}
                                    </span>
                <span v-else class="about-us">
                {{ about.title }}
                </span>
            </div>
        </div>  
    <div class="row mt-30">
            <div class="col-12">
                <img  src="../assets/img/about/august-about-full.jpg" class="mx-auto d-block">
            </div>
        </div>
  
   <div class="row   mt-30">
    <blockquote>
                <span  v-if="$i18n.locale=='ka'" class="about-quote mrgvlovani">
                    {{ about.quote_ge }}
                </span>
                <span v-else class="about-quote">
                {{  about.quote }}
            </span>
            </blockquote>
   </div>
   <div class="row  mb-50 mt-30">
    <div class="col-12">
                <span v-if="$i18n.locale=='ka'" class=" about-us" v-html="about.description_ge">
                                    
                                    </span>
                <span v-else class="about-us" v-html="about.description">
                </span>
   </div>
</div>

</div>
</div>
</template>

<style scoped>
.about-us {
    font-family: PlayfairDisplaySC;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    vertical-align: middle;
    letter-spacing: normal;
    color: #949494;
    text-transform: uppercase;
}
.about-quote{
      font-size: calc(0.75em + 2vmin);
}
blockquote::before {
    position: absolute;left: 0px; right: 0px;
}
</style>

<script>
import axios from 'axios'
export default {
    data: () => ({
      allABOUT: [],
      about: {},
      aboutHalf1: '',
      aboutHalf2: '',
      lang: null,
    }),
     mounted() {
        this.lang = this.$i18n.locale;
        const TOKEN = 'RiG7zh-dadLHoih5AeXXzmEbaXvWbHPS';
        
        // var bodyFormData = new FormData();
        // bodyFormData.set("branch", this.branch);
        // bodyFormData.set("status_key", this.status);

        axios.request({
            method: "post",
            url:
            "https://august.ge/back/rest/web/index.php?r=v1/about/list",
            headers: {
            Authorization: "Bearer " + TOKEN,
            },
            // data: bodyFormData,
        })
        .then((response) => {
            console.log('Products Response: ', response);
            this.allABOUT = response.data;
            this.about = this.allABOUT[0];

            if(this.lang == 'ka'){
                var s = this.about.description_ge;
            } else {
                var s = this.about.description;
            }

            var middle = Math.floor(s.length / 2);
            var before = s.lastIndexOf(' ', middle);
            var after = s.indexOf(' ', middle + 1);

            if (middle - before < after - middle) {
                middle = before;
            } else {
                middle = after;
            }

            this.aboutHalf1 = s.substr(0, middle);
            this.aboutHalf2 = s.substr(middle + 1);
        });
    },
  }
</script>
