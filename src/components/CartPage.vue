<template>
    <div>
        <div class="main-block main-block__60">
            <h1>Your cart</h1>
            <div class="carts mt-4" v-if="Object.keys(carts.carts).length > 0">
                <div class="cart" v-for="cart of carts.carts" :key="cart.id">
                    <div class="products" v-if="cart.products">
                        <div class="product__header d-flex ">
                            <h3 class="procuct__item procuct__item-40 fw-bold">Product</h3>
                            <h3 class="procuct__item fw-bold">Price, $</h3>
                            <h3 class="procuct__item fw-bold">Amount</h3>
                            <h3 class="procuct__item fw-bold">Total, $</h3>
                            <h3 class="procuct__item fw-bold"></h3>
                        </div>
                        <div class="product" v-for="(product, index) of cart.products" :key="product.id">
                            <div class="product__info d-flex align-items-end ">
                                <div class="procuct__item procuct__item-40">{{ product.title }}</div>
                                <div class="procuct__item">{{ product.discountPrice }}</div>
                                <div class="procuct__item d-flex justify-content-center align-items-center">
                                    <span class="action" @click="minusAmount(product);">-</span>
                                    <span>{{ product.quantity }}</span>
                                    <span class="action" @click="plusAmount(product)">+</span>
                                </div>
                                <div class="procuct__item">{{ product.finalTotal }}</div>
                                <div class="procuct__item">
                                    <a href="#" class="delete" @click.prevent="deleteProduct(product, index)">x</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="total mt-4">
                    <div>You saved : <span class="fw-bold"> {{ discount }}</span></div>
                    <div>Total : <span class="fw-bold"> {{ total }}</span></div>
                </div>
                <div class="text-center">
                    <a href="#" class="btn btn-accent mt-3 mr-3" @click.prevent="makeOrder()">Buy</a>
                </div>
            </div>
            <div v-else>
                <h3>Your cart is empty 😔 </h3>
                <a href="/cart" class="btn btn-accent mt-3 mr-3 disable" >Continiue shopping</a> 
                
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "CartPage",
    data() {
        return {
            user: this.$store.state.userId,
            carts: {
                carts: [],
            },
            total: 0,
            discount: 0,
            finalTotal: 0,
        }
    },
    mounted(){
        this.getUserCard();
    },
    methods: {
        getUserCard() {
            this.axios
                .get(`carts/user/${this.user}`)
                .then((response) => {
                    console.log(response);
                    this.carts = response.data;
                    this.recalc();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        minusAmount(product){
            if (product.quantity >= 1) {
                product.quantity--;
                this.changeProductTotal(product);
                this.recalc();
            }
        },
        plusAmount(product){
            product.quantity++;
            this.changeProductTotal(product);
            this.recalc();
        },
        changeProductTotal(product){
                product.total = (product.price * product.quantity ).toFixed(2);
                product.finalTotal =( product.price * product.quantity * (1 - product.discountPercentage / 100).toFixed(2));
                product.discountPrice = (product.price * (1 - product.discountPercentage / 100).toFixed(2));
        },
        recalc(){
            let total = 0;
            let discount = 0;

            if (this.carts.carts) {
                this.carts.carts.forEach((cart) => {
                    if (cart.products) {
                        cart.products.forEach((product) => {
                            product.finalTotal = (product.price * product.quantity * (1 - product.discountPercentage / 100).toFixed(2));
                            product.discountPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
                            console.log(product.discountPrice);

                            total += product.finalTotal;
                            discount += product.price * product.quantity * product.discountPercentage / 100;
                        });
                    }
                });
            }
            this.total = total.toFixed(2);
            this.discount = discount.toFixed(2);
        },
        makeOrder(){
            alert('Slippy Panda thanks for your order!');
        },
        deleteProduct(product, index){
            if(confirm(`Are you sure you want to delete ${product.title}?`)) {
                this.carts.carts[0].products.splice(index, 1);
                this.recalc();
            }
        },
    },
}
</script>

<style scoped>
    .main-block {
        margin-bottom: 30px;
    }
    h1 {
        font-size: 4vh;
        font-weight: 700;
    }
    h2 {
        font-size: 2.5vh;
    }
    .product__header {
        justify-content: space-between;
        font-size: 1.5vh;
    }
    .product__info {
        justify-content: space-between;
        font-size: 1.5vh;
    }
    .procuct__item
    {
        text-align: center;
        width: calc(70% / 4);
        font-size: 2vh;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
    .procuct__item-40
    {
        width: 30%;
        text-align: left;
    }

    .total {
        width: auto;
        margin-left: auto;
        font-size: 3vh;
        color: #FB006B;
        padding: 10px 20px;
        border-radius: 15px;
        text-align: right;
    }
    .action , .delete{
        width: 16px;
        height: 16px;
        color:#fff;
        font-weight: 600;
        background: #FB006B;
        border-radius: 50%;
        line-height: 16px;
        vertical-align: middle;
        text-align: center;
        margin: 0 8px;
        cursor: pointer;
    }
    .delete {
        background: #ccc;
        display: inline-block;
        text-decoration: none;
    }

     .btn-accent{
        background-color: #FB006B;
        color: #fff;
        padding: 10px 15px;
        border-radius: 15px;
    }
    .btn-accent:hover {
        background-image: linear-gradient(to right, #fb006b, #fd0080, #fb0097, #f600ae, #eb12c7);
        color: #fff;
        -webkit-transition: background-color 0.3s ease-in-out;
        transition: background-color 0.3s ease-in-out;
    }

    .disable {
        opacity: 0.5;
        cursor: not-allowed;
        display: inline-block;
        margin-right: 20px;
        pointer-events: none;
    }
    .underlined {
        text-decoration: line-through;
    }
    .small {
        font-size: 1.5vh;
        display: inline-block;
        margin-right: 5px;
        position: relative;
        top: -10px;
    }

    @media screen and (max-width: 576px) {
       .main-block {
        width: 100%;
        padding: 10px 10px 40px;
        margin-top: 30px;
        border-radius: 0;
       }
       h1 {
        margin-top: 10px;
       }
       .procuct__item-40 , .procuct__item{
        width: 20%;
        font-size: 1.4vh;
       }
       .product__info {
        align-items: end;
       }
       .action {
        width: 16px;
        height: 16px;
        line-height: 16px;
       }
    }
</style>
