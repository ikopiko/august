<template>
<div class="ptb-60 augustBackground">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="faqTitle mt-100 mb-60">
                    <h2>My address</h2>
                </div>
                <template>
                    <div class="faqiza">
                        <v-expansion-panels
                        popout
                        >
                            <v-expansion-panel
                                 v-for="address in addresses"
                                :key="address"
                            >
                                <v-expansion-panel-header>{{ address.address }}</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    {{ address.city }} {{ address.district }}
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
        
           
                <div class="faqTitle mt-100 mb-60">
                    <h2>My orders</h2>
                </div>
                    <div class="faqiza">
                        <!-- <div class="d-flex">
                            <v-checkbox v-model="disabled" label="Disabled"></v-checkbox>
                        </div> -->

                        <v-expansion-panels
                        popout
                        >
                            <v-expansion-panel
                                 v-for="order in allOrders"
                                :key="order"
                            >
                                <v-expansion-panel-header>Order {{ order.id }}</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    {{ order.orderData }}
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </template>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
      panel: [0],
      allOrders: [],
      addresses: {},
      disabled: false,
      readonly: false,
    }),
     mounted() {
        const TOKEN = 'RiG7zh-dadLHoih5AeXXzmEbaXvWbHPS';
        
        // var bodyFormData = new FormData();
        // bodyFormData.set("branch", this.branch);
        // bodyFormData.set("status_key", this.status);

        // ORDERS
        axios.request({
            method: "post",
            url:
            "http://august.webertela.online/rest/web/index.php?r=v1/orders/list",
            headers: {
            Authorization: "Bearer " + TOKEN,
            },
        
            // data: bodyFormData,
        })
        .then((response) => {
            
            console.log('Orders Response: ', response);
            this.allOrders = response.data;
        });

        // ADDRESS
        axios.request({
            method: "post",
            url:
            "http://august.webertela.online/rest/web/index.php?r=v1/address/list",
            headers: {
            Authorization: "Bearer " + TOKEN,
            },
        
            // data: bodyFormData,
        })
        .then((response) => {
            
            console.log('Orders Response: ', response);
            this.addresses = response.data;
        });
    },
  }
</script>
