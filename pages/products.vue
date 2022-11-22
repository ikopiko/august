<template>
<div>

    <!-- Start Page Title Area -->
    <div class="page-title-area">

        <div class="container mt-20">
            <div class="row">
                <div class="col" v-for="category in allCategories" :key="category.id">
                    <div class="productsWrapper" :class="{ active : category.id == selectedCategory.id }" @click="selectCategory(category)">
                        <img :src="`https://august.ge/${category.img}`" class="Group-9">
                        <div class="title">
                            {{ category.menu_count }}
                        </div>
                        <div class="titleSmall"  v-if="lang == 'ka'">
                            {{ category.name_ge }}
                        </div>
                        <div v-else>
                                     {{ category.name}}
                                    </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    <section class="products-collections-area ptb-60" v-if="!selectedCategory.isSelected">
        <div class="container" v-for="cat in allCategories" :key="cat.id">
            <div class="row">
            <div class="section-title" >
                <span v-if="lang == 'ka'" class="mrgvlovani">
                                     {{ cat.name_ge }}
                                    </span>
                                    <span v-else>
                                     {{ cat.name}}
                                    </span>
            </div>
            </div>
            <div class="row">
                <AllProducts :category="cat" :catList="allCategories"/>
            </div>
        </div>
    </section>
    <section class="products-collections-area ptb-60" v-if="selectedCategory.isSelected">
        <div class="container">
            <div class="row">
            <div class="section-title" >
                <span>{{ selectedCategory.name }}</span>
            </div>
            </div>
            <div class="row">
                <AllProducts :category="selectedCategory" :catList="allCategories"/>
            </div>
        </div>
    </section>
    <!-- End Collections Area -->
</div>
</template>

<style scoped>
.col 
{
    padding-left: 0px;
    padding-right: 0px;
}

</style>

<script>
import Sidebar from '../components/all-products/Sidebar';
import AllProducts from '../components/all-products/AllProducts';
import axios from 'axios';
export default {
    components: {
        Sidebar,
        AllProducts
    },
    data() {
        return{
            allCategories: [],
            selectedCategory: { id: -1 },
            sentCat: { id: -1 },
            lang: null,
        }
    },
    mounted() {
        this.lang = this.$i18n.locale;
        const TOKEN = 'RiG7zh-dadLHoih5AeXXzmEbaXvWbHPS';
        
        // var bodyFormData = new FormData();
        // bodyFormData.set("branch", this.branch);
        // bodyFormData.set("status_key", this.status);

        axios.request({
            method: "post",
            url:
            "https://august.ge/back/rest/web/index.php?r=v1/categories/list",
            headers: {
            Authorization: "Bearer " + TOKEN,
            },
            // data: bodyFormData,
        })
        .then((response) => {
            this.allCategories = response.data;
            console.log('response cat: ', this.allCategories);
            var category = this.$route.params.catId

            if(category){

                this.sentCat = this.allCategories.find(x => {
                    return x.id === Number(category);
                });
                this.selectCategory(this.sentCat);
            }
        });

    },

    

    methods: {
        selectCategory(cat) {
            if(cat.id == this.selectedCategory.id){
                this.selectedCategory = { id: -1 };
            }
            else {
                this.selectedCategory = cat;
                this.selectedCategory.isSelected = true;
            }
        }
    },
}
</script>
