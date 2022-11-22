<template>
<div :class="className">
    <div class="single-product-box">
               <!--    -->

        <div class="product-image">
            <nuxt-link :to="`/products-details/${product.id}`">
                <!-- <img :src="require(`~/assets/img/uploads/store/${product.filePath}`)" @error="imageError()" /> -->
                <img :src="`https://august.ge/back/backend/web/images/store/${product.filePath}`" @error="imageError()" />
                <!-- <img :src="product.image" :alt="product.name">
                <img :src="product.imageHover" :alt="product.name"> -->
            </nuxt-link>

            <!-- <Timer v-if="product.timePeriod" v-bind:dateTime="product.dateTime"></Timer> -->
        </div>

        <div class="product-content">
            <div class="row pt-30">
                <div class="col productName text-left pl-20">
                    <!-- <nuxt-link :to="`/products-details/${product.id}`" class="itemName">{{product.name}}</nuxt-link> -->
                    <div v-if="$i18n.locale=='ka'" class="mrgvlovani">
                    {{product.name_ge}}
                </div>
                <div v-else>
                    {{product.name}}
                </div>
                </div>
                <div class="col productName  text-right pr-20">
                    <span class="old-price" v-if="product.offer == 1">
                        {{ product.price - product.offerPrice }} ₾
                    </span>
                    <!-- <nuxt-link :to="`/products-details/${product.id}`" class="price">${{product.price}}</nuxt-link> -->
                    <span class="old-price" v-if="product.offer != 1">
                        {{ product.price }} ₾
                    </span>
                </div>
            </div>
            <!-- <div class="row mt-30 mb-30 pb-30">
                <div class="col-3 verticalMiddle">
                    <span class="quantity">Quantity:</span>
                </div>
                <div class="col-3 verticalMiddle">
                    <div class="quantityPlusMinus">
                        <div class="quantPlus" @click="addQty(product)"><a>+</a></div>
                         <div class="quantLine">|</div>
                        <div class="quantMinus" @click="minusQty(product)">-</div>
                    </div>
                </div>
                <div class="col-3 verticalMiddle">
                    <span class="quantityCircle">
                        <span class="quantityNumber">{{ product.qty }}</span>
                    </span>
                </div>
                <div class="col-3 verticalMiddle">
                     <span class="quantityBuyv">
                        <a v-if="getExistPId === product.id" href="javascript:void(0)" class="btn btn-light added-btn" @click="addToCart(product)">
                            Added Already!
                        </a>
                        <a v-else href="javascript:void(0)" class="btn btn-light quantityBuy" @click="addToCart(product)">
                            <i class="fas fa-shopping-bag chanta"></i>
                        </a>
                    </span>
                </div>
            </div> -->
            <div class=" row mt-30 mb-30 pb-30">
                <div v-if="$i18n.locale=='ka'">
                <div class="col-12  text-left pl-20" v-html="product.description_ge"></div>
            </div>
            <div v-else>
                <div class="col-12  text-left pl-20" v-html="product.description"></div>
            </div>
                </div>
        </div>
    </div>
</div>
</template>
<script>
import Timer from './Timer';
export default {
    name: 'ProductItem',
    components: {
        Timer
    },
    data: () => {
        lang: null
        return {
            getExistPId: null
        }
    },
    props: ['product', 'className'],
    computed: {
        cart() {
            return this.$store.getters.cart
        }
    },
    mounted() {
        this.lang = this.$i18n.locale;
    },
    methods: {
        addQty(item){
            item.qty++;
            this.$forceUpdate();
        },
        minusQty(item){
            if(item.qty > 0){
                item.qty--;
                this.$forceUpdate();
            }
        },
        quickView(e) {
            this.$emit('clicked')
        },
        addToCart(item) {
            const product = [{
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.filePath,
                quantity: item.qty
            }]

            if (this.cart.length > 0) {
                let id = item.id
                this.getExistPId = id
                let cartIndex = this.cart.findIndex(cart => {
                    return cart.id == id
                })

                if (cartIndex == -1) {
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Added to cart", {
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.$store.dispatch('updateCart', {
                        id,
                        unit: 1,
                        cart: this.cart
                    });
                    this.$toast.info("Already added to the cart and update with one");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Added to cart", {
                    icon: 'fas fa-cart-plus'
                });
            }
        }
    }
}
</script>
