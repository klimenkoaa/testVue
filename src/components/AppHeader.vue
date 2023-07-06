<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light mt-4 mb-4">
            <div class="container">
                <a class="logo" href="/">
                    <img src="../assets/logo.svg" alt="AI generated logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cart" v-if="user">Cart</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login" v-if="!user">Log in</router-link>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#" v-if="user" @click.prevent="logout()">Log out</a>
                    </li>
                </ul>
                </div>
            </div>
    </nav>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    props: {},
    data() {
        return {
        }
    },  
    computed: {
        user() {
            return this.$store.state.userId;
        }
    },
    watch: {
        user() {
            console.log("user changed");
            return this.$store.state.userId;
        }
    },
    mounted() {
    },
    methods: {
        logout() {
            console.log("logout");
            if(confirm("Are you sure you want to log out?")){
                console.log(true)
                this.$store.commit("setUserId", null);
                this.$store.commit("setToken", null);
                this.$store.commit("setUserName", null);
                this.$router.push("/");
            }
           
        }
    }
}
</script>

<style scoped>
.logo {
    width: 80px;
}
.logo img {
    width: 100%;
} 
.nav-link, .router-link-active {
    color: #333;
    font-weight: 500;
    font-size: 2.2vh;
    position: relative;
    &::after {
        position: absolute;
        content: "";
        display: block;
        width: 30px;
        height: 0px;
        background-color: #492ae9;
        margin-top: 2px;
        -webkit-transition: all 0.1s ease-in;
        transition: all 0.1s ease-in;
    }
    &:hover::after {
        height: 2px;
        
    }
}
.router-link-active {
    &::after {
        height: 2px;
    }
}
</style>
