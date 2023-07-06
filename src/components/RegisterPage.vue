<template>
    <div class="main-block">
        <h1>Create your account</h1>
        <form @submit="submit()">
            <div class="input-group">
                    <input type="text" 
                        v-model="form.username" 
                        @input="errors.message = '', errors.username = ''"
                        placeholder="Username"  />
                    <div class="error" v-if="errors.username">{{ errors.username }}</div>
                </div>
            <div class="input-group">
                <input type="email"  
                    v-model="form.email"
                    @input="errors.message = '', errors.email = ''"
                    placeholder="Email"  />
                <div class="error" v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div class="input-group">
                <input type="password"  
                    v-model="form.password"
                    @input="errors.message = '', errors.password = ''"
                    placeholder="Password"  />
                <div class="error" v-if="errors.password">{{ errors.password }}</div>
            </div>
           <div class="input-group">
                    <input type="password"  
                        v-model="form.confirmPassword"
                        @input="errors.message = '', errors.confirmPassword = ''"
                        placeholder="Confirm password"  />
                    <div class="error" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>
                </div>
            <button type="submit" class="btn" @click.prevent="submit">Register</button>
        </form>
        <div class="mt-4">I have already account. <router-link class="link" to="/login">Login</router-link></div>
    </div>
</template>

<script>
export default {
    name: "RegisterPage",
    data() {
        return {
            form: {
                username: "",
                password: "",
                email: "",
                confirmPassword: "",
            },
            errors: {},
        }
    },
    methods: {
        submit() {
            this.errors = {};
            let hasErrors = this.prevalidation();
            if (!hasErrors) {
                this.axios.post("users/add", this.form)
                    .then((response) => {
                        console.log(response);
                        this.getUserToUse();
                    })
                    .catch((err) => {
                        console.log(err);
                        this.errors = err.response.data;
                    })
            }
        },
        prevalidation(){
            let hasErrors = 0;
            this.errors = {};
            if (!this.form.username) {
                this.errors.username = "Username is required";
                hasErrors++;
            }
            if (!this.form.email) {
                this.errors.email = "Email is required";
                hasErrors++;
            }
            else if((!/^[^@]+@\w+(\.\w+)+\w$/.test(this.form.email))){
                this.errors.email = "Email is not valid";
                hasErrors++;
            }
            if (!this.form.password) {
                this.errors.password = "Password is required";
                hasErrors++;
            }
            if (!this.form.confirmPassword) {
                this.errors.confirmPassword = "Confirm password is required";
                hasErrors++;
            }
            if(this.form.password !== this.form.confirmPassword){
                this.errors.confirmPassword = "Password and confirm password must be same";
                hasErrors++;
            }
            return hasErrors;
        },
        getUserToUse(){
            //available users in API for use the card
            let users = [
                { 'id': 4, 'username': 'yraigatt3', 'passrord': 'sRQxjPfdS'},
                { 'id': 5, 'username': 'kmeus4', 'passrord': 'aUTdmmmbH'},
                { 'id': 6, 'username': 'jtreleven5', 'passrord': 'zY1nE46Zm'},
            ];
            let randomUser = users[Math.floor(Math.random() * users.length)];
            this.axios.post("/auth/login", {
                'username': randomUser.username,
                'password': randomUser.passrord,
            })
            .then((response) => {
                console.log(response);
                this.$store.commit("setUserId", response.data.id);
                this.$store.commit("setToken", response.data.token);
                this.$store.commit("setUserName", response.data.firstName);
                this.$router.push("/");
            })
        }
    }
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
