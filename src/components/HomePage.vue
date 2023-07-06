<template>
    <div>
        <div class="main-block main-block__60">
            <h1>Hi <span v-if="user">, {{ user }}! </span></h1>
            <h2 class="mt-3">Do you want to continiue your shopping?</h2>
            <router-link to="/cart" class="btn btn-accent mt-3 mr-3 disable" >Continiue shopping</router-link> 
            <router-link to="/cart" class="btn btn-accent mt-3">Go to cart</router-link> 
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {};
    },
    computed: {
        user() {
            return this.$store.state.userName;
        }
    },
    watch: {
        user() {
            console.log("user changed");
            return this.$store.state.userName;
        }
    },
}
</script>

<style scoped>
    h1 {
        font-size: 4vh;
        font-weight: 700;
    }
    h2 {
        font-size: 2.5vh;
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
</style>
