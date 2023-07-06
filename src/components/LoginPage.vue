<template>
    <div class="main-block">
        <h1>Welcome</h1>
        <form @submit.prevent="submit()">
            <div class="input-group">
                <input type="text" 
                    v-model="form.username" 
                    @input="errors.message = '', errors.username = ''"
                    placeholder="Username"  />
                <div class="error" v-if="errors.username">{{ errors.username }}</div>
            </div>
            <div class="input-group">
                <input type="password"  
                    v-model="form.password"
                    @input="errors.message = '', errors.password = ''"
                    placeholder="Password"  />
                <div class="error" v-if="errors.password">{{ errors.password }}</div>
            </div>
            <button type="submit" class="btn">Login</button>
            <div class="error" v-if="errors.message">{{ errors.message }}</div>
        </form>
        <div>
            <a href="#" class="badge" @click="setLoginData('kminchelle', '0lelplR')">Go as Jeanne</a>
            <a href="#" class="badge" @click="setLoginData('atuny0', '9uQFF1Lh')">Go as Terry</a>
            <a href="#" class="badge" @click="setLoginData('dpettegre6', 'YVmhktgYVS')">Go as Sheldon</a>
        </div>
        <div class="mt-4">I haven't account. <router-link to="/register" class="link">Register</router-link></div>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    mounted() {
       console.log(this.$route.query)
    },
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            errors: {},
            nextUrl: this.$route.query.nextUrl,

        }
    },
    methods: {
        submit() {
            this.errors = {};
            let hasErrors = this.prevalidation();
            if(!hasErrors){
                this.axios.post("/auth/login", this.form)
                .then((response)=>{
                    console.log(response);
                    this.$store.commit("setUserId", response.data.id);
                    this.$store.commit("setToken", response.data.token);
                    this.$store.commit("setUserName", response.data.firstName);
                    if(this.nextUrl)
                        this.$router.push(this.nextUrl);
                    else
                        this.$router.push("/");
                })
                .catch((err)=>{
                    console.log(err);
                    this.errors = err.response.data;
                })
            }
        },
        prevalidation(){
            let hasErrors = 0;
            this.errors = {};
            if(!this.form.username){
                this.errors.username = "Username is required";
                hasErrors++;
            }
            if(!this.form.password){
                this.errors.password = "Password is required";
                hasErrors++;
            }
            return hasErrors;
        },
        setLoginData(username, password){
            this.form.username = username;
            this.form.password = password;
        }
    },
}
</script>

<style scoped>
h1 {
    font-size: 2.5vh;
    font-weight: 700;
    margin-top: 20px;
}
 input {
    width: 100%;
    border: none;
    padding: 10px 15px;
    background-color: #F0F1F4;
    border-radius: 15px;
    margin: 10px 0;
}
.badge {
    font-size: 10px;
    padding: 3px 10px;
    margin-right: 15px;
    background-color: #F0F1F4;
    border-radius: 15px;
    color: #333;
    text-decoration: none;
    margin-top: 20px;
}

.error {
    color: red;
    font-size: 12px;
    position: relative;
}
.link {
    color: #492ae9;
}
.btn {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 15px;
    background: #492ae9;
    color: #fff;
    -webkit-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
}
.btn:hover {
    color: #fff;
    background-image: linear-gradient(to right top, #492ae9, #3c39eb, #2f44ec, #214eec, #1256eb);
    -webkit-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
}

</style>
