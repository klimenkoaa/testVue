(function(){"use strict";var e={8223:function(e,r,t){var s=t(9242),o=t(3396);function a(e,r,t,s,a,n){const i=(0,o.up)("AppHeader"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i),(0,o.Wm)(c)])}var n=t.p+"img/logo.45b46d23.svg";const i=e=>((0,o.dD)("data-v-0f9b071b"),e=e(),(0,o.Cn)(),e),c={class:"navbar navbar-expand-lg navbar-light mt-4 mb-4"},l={class:"container"},u=i((()=>(0,o._)("a",{class:"logo",href:"/"},[(0,o._)("img",{src:n,alt:"AI generated logo"})],-1))),d=i((()=>(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1))),m={class:"collapse navbar-collapse",id:"navbarNav"},p={class:"navbar-nav ms-auto"},h={class:"nav-item"},f={class:"nav-item"},g={class:"nav-item"},v={class:"nav-item"};function w(e,r,t,a,n,i){const w=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("nav",c,[(0,o._)("div",l,[u,d,(0,o._)("div",m,[(0,o._)("ul",p,[(0,o._)("li",h,[(0,o.Wm)(w,{class:"nav-link","aria-current":"page",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})]),(0,o._)("li",f,[i.user?((0,o.wg)(),(0,o.j4)(w,{key:0,class:"nav-link",to:"/cart"},{default:(0,o.w5)((()=>[(0,o.Uk)("Cart")])),_:1})):(0,o.kq)("",!0)]),(0,o._)("li",g,[i.user?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(w,{key:0,class:"nav-link",to:"/login"},{default:(0,o.w5)((()=>[(0,o.Uk)("Log in")])),_:1}))]),(0,o._)("li",v,[i.user?((0,o.wg)(),(0,o.iD)("a",{key:0,class:"nav-link",href:"#",onClick:r[0]||(r[0]=(0,s.iM)((e=>i.logout()),["prevent"]))},"Log out")):(0,o.kq)("",!0)])])])])])])}t(7658);var _={name:"AppHeader",props:{},data(){return{}},computed:{user(){return this.$store.state.userId}},watch:{user(){return console.log("user changed"),this.$store.state.userId}},mounted(){},methods:{logout(){console.log("logout"),confirm("Are you sure you want to log out?")&&(console.log(!0),this.$store.commit("setUserId",null),this.$store.commit("setToken",null),this.$store.commit("setUserName",null),this.$router.push("/"))}}},k=t(89);const b=(0,k.Z)(_,[["render",w],["__scopeId","data-v-0f9b071b"]]);var y=b,P={name:"App",components:{AppHeader:y}};const U=(0,k.Z)(P,[["render",a]]);var x=U,D=t(2483),q=t(65),C=t(2415);const $=(0,q.MT)({state(){return{userId:null,token:null,userName:null}},mutations:{setUserId(e,r){e.userId=r},setToken(e,r){e.token=r},setUserName(e,r){e.userName=r}},plugins:[(0,C.Z)()]});var I=$,T=t(7139);const j=e=>((0,o.dD)("data-v-a0dac68c"),e=e(),(0,o.Cn)(),e),O={class:"main-block main-block__60"},z={key:0},M=j((()=>(0,o._)("h2",{class:"mt-3"},"Do you want to continiue your shopping?",-1)));function N(e,r,t,s,a,n){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",O,[(0,o._)("h1",null,[(0,o.Uk)("Hi "),n.user?((0,o.wg)(),(0,o.iD)("span",z,", "+(0,T.zw)(n.user)+"! ",1)):(0,o.kq)("",!0)]),M,(0,o.Wm)(i,{to:"/cart",class:"btn btn-accent mt-3 mr-3 disable"},{default:(0,o.w5)((()=>[(0,o.Uk)("Continiue shopping")])),_:1}),(0,o.Wm)(i,{to:"/cart",class:"btn btn-accent mt-3"},{default:(0,o.w5)((()=>[(0,o.Uk)("Go to cart")])),_:1})])])}var Z={name:"HomePage",data(){return{}},computed:{user(){return this.$store.state.userName}},watch:{user(){return console.log("user changed"),this.$store.state.userName}}};const S=(0,k.Z)(Z,[["render",N],["__scopeId","data-v-a0dac68c"]]);var A=S;const E=e=>((0,o.dD)("data-v-477ed5d4"),e=e(),(0,o.Cn)(),e),F={class:"main-block"},L=E((()=>(0,o._)("h1",null,"Welcome",-1))),H={class:"input-group"},V={key:0,class:"error"},W={class:"input-group"},Y={key:0,class:"error"},R=E((()=>(0,o._)("button",{type:"submit",class:"btn"},"Login",-1))),G={key:0,class:"error"},K={class:"mt-4"};function Q(e,r,t,a,n,i){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",F,[L,(0,o._)("form",{onSubmit:r[4]||(r[4]=(0,s.iM)((e=>i.submit()),["prevent"]))},[(0,o._)("div",H,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>n.form.username=e),onInput:r[1]||(r[1]=e=>(n.errors.message="",n.errors.username="")),placeholder:"Username"},null,544),[[s.nr,n.form.username]]),n.errors.username?((0,o.wg)(),(0,o.iD)("div",V,(0,T.zw)(n.errors.username),1)):(0,o.kq)("",!0)]),(0,o._)("div",W,[(0,o.wy)((0,o._)("input",{type:"password","onUpdate:modelValue":r[2]||(r[2]=e=>n.form.password=e),onInput:r[3]||(r[3]=e=>(n.errors.message="",n.errors.password="")),placeholder:"Password"},null,544),[[s.nr,n.form.password]]),n.errors.password?((0,o.wg)(),(0,o.iD)("div",Y,(0,T.zw)(n.errors.password),1)):(0,o.kq)("",!0)]),R,n.errors.message?((0,o.wg)(),(0,o.iD)("div",G,(0,T.zw)(n.errors.message),1)):(0,o.kq)("",!0)],32),(0,o._)("div",null,[(0,o._)("a",{href:"#",class:"badge",onClick:r[5]||(r[5]=e=>i.setLoginData("kminchelle","0lelplR"))},"Go as Jeanne"),(0,o._)("a",{href:"#",class:"badge",onClick:r[6]||(r[6]=e=>i.setLoginData("atuny0","9uQFF1Lh"))},"Go as Terry"),(0,o._)("a",{href:"#",class:"badge",onClick:r[7]||(r[7]=e=>i.setLoginData("dpettegre6","YVmhktgYVS"))},"Go as Sheldon")]),(0,o._)("div",K,[(0,o.Uk)("I haven't account. "),(0,o.Wm)(c,{to:"/register",class:"link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Register")])),_:1})])])}var B={name:"LoginPage",mounted(){console.log(this.$route.query)},data(){return{form:{username:"",password:""},errors:{},nextUrl:this.$route.query.nextUrl}},methods:{submit(){this.errors={};let e=this.prevalidation();e||this.axios.post("/auth/login",this.form).then((e=>{console.log(e),this.$store.commit("setUserId",e.data.id),this.$store.commit("setToken",e.data.token),this.$store.commit("setUserName",e.data.firstName),this.nextUrl?this.$router.push(this.nextUrl):this.$router.push("/")})).catch((e=>{console.log(e),this.errors=e.response.data}))},prevalidation(){let e=0;return this.errors={},this.form.username||(this.errors.username="Username is required",e++),this.form.password||(this.errors.password="Password is required",e++),e},setLoginData(e,r){this.form.username=e,this.form.password=r}}};const J=(0,k.Z)(B,[["render",Q],["__scopeId","data-v-477ed5d4"]]);var X=J;const ee=e=>((0,o.dD)("data-v-8fe040ee"),e=e(),(0,o.Cn)(),e),re={class:"main-block main-block__60"},te=ee((()=>(0,o._)("h1",null,"Your cart",-1))),se={key:0,class:"carts mt-4"},oe={key:0,class:"products"},ae=(0,o.uE)('<div class="product__header d-flex" data-v-8fe040ee><h3 class="procuct__item procuct__item-40 fw-bold" data-v-8fe040ee>Product</h3><h3 class="procuct__item fw-bold" data-v-8fe040ee>Price, $</h3><h3 class="procuct__item fw-bold" data-v-8fe040ee>Amount</h3><h3 class="procuct__item fw-bold" data-v-8fe040ee>Total, $</h3><h3 class="procuct__item fw-bold" data-v-8fe040ee></h3></div>',1),ne={class:"product__info d-flex align-items-end"},ie={class:"procuct__item procuct__item-40"},ce={class:"procuct__item"},le={class:"procuct__item d-flex justify-content-center align-items-center"},ue=["onClick"],de=["onClick"],me={class:"procuct__item"},pe={class:"procuct__item"},he=["onClick"],fe={class:"total mt-4"},ge={class:"fw-bold"},ve={class:"fw-bold"},we={class:"text-center"},_e={key:1},ke=ee((()=>(0,o._)("h3",null,"Your cart is empty 😔 ",-1))),be=ee((()=>(0,o._)("a",{href:"/cart",class:"btn btn-accent mt-3 mr-3 disable"},"Continiue shopping",-1))),ye=[ke,be];function Pe(e,r,t,a,n,i){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",re,[te,Object.keys(n.carts.carts).length>0?((0,o.wg)(),(0,o.iD)("div",se,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.carts.carts,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"cart",key:e.id},[e.products?((0,o.wg)(),(0,o.iD)("div",oe,[ae,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.products,((e,r)=>((0,o.wg)(),(0,o.iD)("div",{class:"product",key:e.id},[(0,o._)("div",ne,[(0,o._)("div",ie,(0,T.zw)(e.title),1),(0,o._)("div",ce,(0,T.zw)(e.discountPrice),1),(0,o._)("div",le,[(0,o._)("span",{class:"action",onClick:r=>{i.minusAmount(e)}},"-",8,ue),(0,o._)("span",null,(0,T.zw)(e.quantity),1),(0,o._)("span",{class:"action",onClick:r=>i.plusAmount(e)},"+",8,de)]),(0,o._)("div",me,(0,T.zw)(e.finalTotal),1),(0,o._)("div",pe,[(0,o._)("a",{href:"#",class:"delete",onClick:(0,s.iM)((t=>i.deleteProduct(e,r)),["prevent"])},"x",8,he)])])])))),128))])):(0,o.kq)("",!0)])))),128)),(0,o._)("div",fe,[(0,o._)("div",null,[(0,o.Uk)("You saved : "),(0,o._)("span",ge,(0,T.zw)(n.discount),1)]),(0,o._)("div",null,[(0,o.Uk)("Total : "),(0,o._)("span",ve,(0,T.zw)(n.total),1)])]),(0,o._)("div",we,[(0,o._)("a",{href:"#",class:"btn btn-accent mt-3 mr-3",onClick:r[0]||(r[0]=(0,s.iM)((e=>i.makeOrder()),["prevent"]))},"Buy")])])):((0,o.wg)(),(0,o.iD)("div",_e,ye))])])}var Ue={name:"CartPage",data(){return{user:this.$store.state.userId,carts:{carts:[]},total:0,discount:0,finalTotal:0}},mounted(){this.getUserCard()},methods:{getUserCard(){this.axios.get(`carts/user/${this.user}`).then((e=>{console.log(e),this.carts=e.data,this.recalc()})).catch((e=>{console.log(e)}))},minusAmount(e){e.quantity>=1&&(e.quantity--,this.changeProductTotal(e),this.recalc())},plusAmount(e){e.quantity++,this.changeProductTotal(e),this.recalc()},changeProductTotal(e){e.total=(e.price*e.quantity).toFixed(2),e.finalTotal=e.price*e.quantity*(1-e.discountPercentage/100).toFixed(2),e.discountPrice=e.price*(1-e.discountPercentage/100).toFixed(2)},recalc(){let e=0,r=0;this.carts.carts&&this.carts.carts.forEach((t=>{t.products&&t.products.forEach((t=>{t.finalTotal=t.price*t.quantity*(1-t.discountPercentage/100).toFixed(2),t.discountPrice=t.price*(1-t.discountPercentage/100).toFixed(2),e+=t.finalTotal,r+=t.price*t.quantity*t.discountPercentage/100}))})),this.total=e.toFixed(2),this.discount=r.toFixed(2)},makeOrder(){alert("Slippy Panda thanks for your order!")},deleteProduct(e,r){confirm(`Are you sure you want to delete ${e.title}?`)&&this.carts.carts[0].products.splice(r,1)}}};const xe=(0,k.Z)(Ue,[["render",Pe],["__scopeId","data-v-8fe040ee"]]);var De=xe;const qe=e=>((0,o.dD)("data-v-680cf47f"),e=e(),(0,o.Cn)(),e),Ce={class:"main-block"},$e=qe((()=>(0,o._)("h1",null,"Create your account",-1))),Ie={class:"input-group"},Te={key:0,class:"error"},je={class:"input-group"},Oe={key:0,class:"error"},ze={class:"input-group"},Me={key:0,class:"error"},Ne={class:"input-group"},Ze={key:0,class:"error"},Se={class:"mt-4"};function Ae(e,r,t,a,n,i){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Ce,[$e,(0,o._)("form",{onSubmit:r[9]||(r[9]=e=>i.submit())},[(0,o._)("div",Ie,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>n.form.username=e),onInput:r[1]||(r[1]=e=>(n.errors.message="",n.errors.username="")),placeholder:"Username"},null,544),[[s.nr,n.form.username]]),n.errors.username?((0,o.wg)(),(0,o.iD)("div",Te,(0,T.zw)(n.errors.username),1)):(0,o.kq)("",!0)]),(0,o._)("div",je,[(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":r[2]||(r[2]=e=>n.form.email=e),onInput:r[3]||(r[3]=e=>(n.errors.message="",n.errors.email="")),placeholder:"Email"},null,544),[[s.nr,n.form.email]]),n.errors.email?((0,o.wg)(),(0,o.iD)("div",Oe,(0,T.zw)(n.errors.email),1)):(0,o.kq)("",!0)]),(0,o._)("div",ze,[(0,o.wy)((0,o._)("input",{type:"password","onUpdate:modelValue":r[4]||(r[4]=e=>n.form.password=e),onInput:r[5]||(r[5]=e=>(n.errors.message="",n.errors.password="")),placeholder:"Password"},null,544),[[s.nr,n.form.password]]),n.errors.password?((0,o.wg)(),(0,o.iD)("div",Me,(0,T.zw)(n.errors.password),1)):(0,o.kq)("",!0)]),(0,o._)("div",Ne,[(0,o.wy)((0,o._)("input",{type:"password","onUpdate:modelValue":r[6]||(r[6]=e=>n.form.confirmPassword=e),onInput:r[7]||(r[7]=e=>(n.errors.message="",n.errors.confirmPassword="")),placeholder:"Confirm password"},null,544),[[s.nr,n.form.confirmPassword]]),n.errors.confirmPassword?((0,o.wg)(),(0,o.iD)("div",Ze,(0,T.zw)(n.errors.confirmPassword),1)):(0,o.kq)("",!0)]),(0,o._)("button",{type:"submit",class:"btn",onClick:r[8]||(r[8]=(0,s.iM)(((...e)=>i.submit&&i.submit(...e)),["prevent"]))},"Register")],32),(0,o._)("div",Se,[(0,o.Uk)("I have already account. "),(0,o.Wm)(c,{class:"link",to:"/login"},{default:(0,o.w5)((()=>[(0,o.Uk)("Login")])),_:1})])])}var Ee={name:"RegisterPage",data(){return{form:{username:"",password:"",email:"",confirmPassword:""},errors:{}}},methods:{submit(){this.errors={};let e=this.prevalidation();e||this.axios.post("users/add",this.form).then((e=>{console.log(e),this.getUserToUse()})).catch((e=>{console.log(e),this.errors=e.response.data}))},prevalidation(){let e=0;return this.errors={},this.form.username||(this.errors.username="Username is required",e++),this.form.email?/^[^@]+@\w+(\.\w+)+\w$/.test(this.form.email)||(this.errors.email="Email is not valid",e++):(this.errors.email="Email is required",e++),this.form.password||(this.errors.password="Password is required",e++),this.form.confirmPassword||(this.errors.confirmPassword="Confirm password is required",e++),this.form.password!==this.form.confirmPassword&&(this.errors.confirmPassword="Password and confirm password must be same",e++),e},getUserToUse(){let e=[{id:4,username:"yraigatt3",passrord:"sRQxjPfdS"},{id:5,username:"kmeus4",passrord:"aUTdmmmbH"},{id:6,username:"jtreleven5",passrord:"zY1nE46Zm"}],r=e[Math.floor(Math.random()*e.length)];this.axios.post("/auth/login",{username:r.username,password:r.passrord}).then((e=>{console.log(e),this.$store.commit("setUserId",e.data.id),this.$store.commit("setToken",e.data.token),this.$store.commit("setUserName",e.data.firstName),this.$router.push("/")}))}}};const Fe=(0,k.Z)(Ee,[["render",Ae],["__scopeId","data-v-680cf47f"]]);var Le=Fe;const He=(0,o._)("h1",{class:"text-center"},"We are so sorrrryyyyyy. Page not found",-1),Ve=[He];function We(e,r,t,s,a,n){return(0,o.wg)(),(0,o.iD)("div",null,Ve)}var Ye={name:"PageNotFound"};const Re=(0,k.Z)(Ye,[["render",We]]);var Ge=Re;const Ke=[{path:"/",name:"home",component:A},{path:"/login",name:"login",component:X},{path:"/register",name:"register",component:Le},{path:"/cart",name:"cart",component:De,beforeEnter:e=>{if(!I.state.userId)return{name:"login",query:{nextUrl:e.fullPath}}}},{path:"/:pathMatch(.*)*",name:"notFound",component:Ge}],Qe=(0,D.p7)({history:(0,D.PO)(),routes:Ke});var Be=Qe,Je=t(4161),Xe=t(6423);t(5654);Je.Z.defaults.baseURL="https://dummyjson.com/",Je.Z.defaults.headers.common["accept"]="application/json",Je.Z.defaults.headers.common["content-type"]="application/json",(0,s.ri)(x).use(Xe.Z,Je.Z).use(Be).use(I).mount("#app")}},r={};function t(s){var o=r[s];if(void 0!==o)return o.exports;var a=r[s]={id:s,loaded:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(r,s,o,a){if(!s){var n=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,c=0;c<s.length;c++)(!1&a||n>=a)&&Object.keys(t.O).every((function(e){return t.O[e](s[c])}))?s.splice(c--,1):(i=!1,a<n&&(n=a));if(i){e.splice(u--,1);var l=o();void 0!==l&&(r=l)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[s,o,a]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/testVue/"}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,s){var o,a,n=s[0],i=s[1],c=s[2],l=0;if(n.some((function(r){return 0!==e[r]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(c)var u=c(t)}for(r&&r(s);l<n.length;l++)a=n[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},s=self["webpackChunktest_proj"]=self["webpackChunktest_proj"]||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(8223)}));s=t.O(s)})();
//# sourceMappingURL=app.5de207bc.js.map