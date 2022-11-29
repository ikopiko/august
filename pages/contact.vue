<template>
<div>
    <!-- <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div> -->

    <section class="contact-area ptb-60 augustBackground">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div class="section-title">
                        <h1>Contact Us</h1>
                    </div>
                    <div class="contact-info">

                        <ul class="contact-list">
                            <li>{{$t('navs.email.title')}}: <a href="Info@augustbakery.com">Info@augustbakery.com</a></li>
                            <li><a href="tel:+9950322020304">{{$t('navs.phone.title')}}: 032 202 03 04</a></li>
                            <li><a href="tel:+995591820808">{{$t('navs.sales.title')}}: 591 82 08 08</a></li>
                        </ul>
                    </div>

                    <div class="section-title mt-100">
                        <h1>Our Socials</h1>
                    </div>
                    <div class="contact-info">
                        <ul class="social">
                            <li><a href="https://www.facebook.com/Augustbakery.ge" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/augustbakery.ge_/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <!-- <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                <li><a href="#"><i class="fab fa-skype"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li> -->
                            <!-- <li><a href="#"><i class="fab fa-youtube"></i></a></li> -->
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12 titleInner">
                    <div class="section-title">
                        <h1 class="mb-100">Our Locations</h1>
                    </div>
                        <table>
                            <tbody>
                        <span v-for="(location,index) in allLocation" :key="index">
                            <tr>
                                <td class="locationNumber" style="padding-right:40px ; border-right: solid 1px #ECECEC;"><span class="locationNumber">0{{ index+1 }}</span></td>
                                <td v-if="currentLang == 'ka'" style="padding-left:40px ; "><a v-bind:href="location.keywords" target="_blank"  class="contactlink">{{ location.title_ge }}</a></td>
                                <td v-else style="padding-left:40px ; "><a v-bind:href="location.keywords" target="_blank"  class="contactlink">{{ location.title_en }}</a></td>
                                
                            </tr>
                            <!-- <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                
                            </tr> -->
                        </span>
                    </tbody>
                        </table>
                </div>

            </div>
        </div>
    </section>
</div>
</template>

<style scoped>
h1 {
   
  font-family: PlayfairDisplaySC;
  font-size: 50px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #131415;
 
}

.locations {
    background-color: white;
    padding: 0 0 0 120px;
}

.locations table tr td {
    height: 80px;
      font-family: PlayfairDisplaySC;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #131415;
   text-transform: uppercase;
}
.locationNumber
{
  font-family: PlayfairDisplaySC;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #131415;
}
</style>

<script>
import axios from 'axios'
export default {
    data: () => ({
      allLocation: [],
      location: {},
      currentLang: null,
    }),
     mounted() {
        this.currentLang = this.$i18n.locale;
        const lang = this.$store.getters.language;
        const TOKEN = 'RiG7zh-dadLHoih5AeXXzmEbaXvWbHPS';
   

        axios.request({
            method: "post",
            url:
            "https://august.ge/back/rest/web/index.php?r=v1/locations/list",
            headers: {
            Authorization: "Bearer " + TOKEN,
            },
        
            // data: bodyFormData,
        })
        .then((response) => {
            if(lang == 'ka'){
                this.allLocation = response.data;
                this.allLocation.forEach((x) => {
                    x.title_en = x.title;
                    x.title = x.title_ge;
                    x.keywords = x.keyword_ge;
                    x.keyword_ge = x.keywords
                });
            } else {
                console.log('Products Response: ', response);
                this.allLocation = response.data;
            }
        });
    },
  }
</script>
