<template>
<div>
    <!-- Start Page Title Area -->
    <div class="container p-0">
        <!-- Start Cart Area -->
        <div class="cart-area ptb-60  backgroundWhite">
            <div class="container">
                <form>
                    <div class="row ">
                        <div class="col-lg-9 col-sm-12 checkout-details ">
                            <div class="rectangle">
                                <h3 class="title"> Choose Payment Method</h3>

                            </div>
                            <div class="row">
                                <div class="payButtonebi">
                                    <div class="cardButt" @click="sendPayment('card')">
                                        <span>
                                            Pay by Card
                                        </span>
                                    </div>
                                    <div class="cardButt" @click="sendPayment('cash')">
                                        Pay by Cash
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-12 backgroundGray short">
                            <div class="racxa">
                                <div class="cart-table table-responsive">
                                    <table class="table table-bordered webertela">
                                        <thead>
                                            <tr>
                                                <th scope="col">Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Full price <span style="float:right"><b>${{parseFloat(cartTotal + 10).toFixed(2)}}</b></span></td>
                                            </tr>
                                            <nuxt-link to="/checkout" class="btn btn-checkout">Buy</nuxt-link>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>

        </div>
        <!-- End Cart Area -->
    </div>

    <v-dialog v-model="cashDialog" max-width="388px">
        <v-container>
                    <v-row>
        <v-card>
            <v-card-title>
                <span class="headline">Create an Account</span>
            </v-card-title>
            <v-card-text>
                
                        <div class="login-content">

                            <form class="login-form">
                                <v-text-field v-model="fullName" label="Full Name" required></v-text-field>
                                <v-text-field v-model="email" label="E-mail" ></v-text-field>
                                <v-text-field v-model="phone" label="Phone number"></v-text-field>
                                <v-text-field v-model="password" label="Password"></v-text-field>
                                <v-text-field v-model="confirmPassword" label="Confirm Password"></v-text-field>
                                <div class="row mt-10 mb-10">
                                    <div class="col-md-12">
                                        <div class="product-cart-btn" @click="signUp">
                                            <a class="btn btn-primary btn-august">Create an Account</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-10 mb-10">
                                    <div class="col-md-12">
                                        <div class="text-center">
                                            <span class="hrza"> </span> <span class="textzi">Or</span> <span class="hrza"> </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-10 mb-10">
                                    <div class="col-md-12">
                                        <div class="product-cart-btn">
                                            <a class="btn btn-primary btn-august-fb">Authorization</a>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                
                <!-- <small>*indicates required field</small> -->
            </v-card-text>
        </v-card>
         </v-row>
                </v-container>
        <div class="formiza">

        </div>

    </v-dialog>
    <!-- End Checkout Area -->
</div>
</template>

<style scoped>



</style>

<script>
import firebase from '../../plugins/firebase';
export default {
    data() {
        return {
            personDetails: {
                fullName: '',
                address: '',
                city: '',
                email: '',
                phone: '',
                createdAt: new Date()
            },
            cashDialog: false,
            e1: 1
        }
    },
    computed: {
        cart() {
            return this.$store.getters.cart
        },
        cartTotal() {
            return this.$store.getters.totalAmount
        }
    },
    methods: {
        add() {
            const cartData = {
                details: this.personDetails,
                items: this.cart
            }
            const db = firebase.firestore();
            const dbOrderRef = db.collection('orders');
            dbOrderRef.add(cartData);
            this.$toast.success(`Thanks for the order`, {
                icon: 'fas fa-cart-plus'
            });
            this.$store.dispatch('cartEmpty')
            this.$router.push("/");
        },
        sendPayment(type) {
            if(type == 'cash'){
                this.cashDialog = true;
            }
            else {
                this.$emit('onPaymentType', type);
            }
        },
    }
}
</script>
