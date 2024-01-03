<template>
    <div class="app">
        <div class="main_left">
            <RouterView class="view" />
            <div class="footder">
                <p  class="log" v-show="shows">
                    <span>Already have an account?</span>
                    <router-link @click="hide" style="margin-left: 10px;" to="/login" >Sign in</router-link>
                </p>
                <p  class="log" v-show="!shows">
                    <span>Not registered yet?</span>
                    <router-link style="margin-left: 10px;" @click="hide" to="/enroll">Sign up</router-link>
                </p>
            </div>
        </div>
        <div class="main_right">
            不知道放什么
        </div>
    </div>
</template>
<script lang="ts" scoped setup>
import { useRouter } from 'vue-router'
import { ref,onMounted } from 'vue';
import "../assets/login.css"

let shows = ref(false)

const route =  ref(useRouter())

const hide = ()=>{
    shows.value = !shows.value
}
onMounted(()=>{
    // 获取网页地址后缀
    const path = route.value.currentRoute.path
    shows.value = path === '/login'? false: true
    document.body.className = 'setbodybj'
})


</script>

<style lang="scss" scoped>

.app{
   max-width: 840px;
   min-height: 40vh;
   min-height: 430px;
   box-sizing: border-box;
   display: flex;
   border-radius: 5%;
   box-sizing: border-box;
   box-shadow: .15rem .15rem 1rem #fff;
   padding: 20px 20px;
//    backdrop-filter: blur(3px);
   .main_left{
    position: relative;
         .view{
            // width: 200px;
            height: 100%;
         }
         .log{
            font-size: 12px;
            letter-spacing: 0.05rem;
         }
         .footder{
            position: absolute;
            bottom: 0px;

            
         }
    }
    .main_right{
        min-width: 300px;
        text-align: center;
        box-shadow: 0 0 5px #fff;
        border-radius: 5%;
        padding: 20px;
        // margin-top: 40px;
    }

}
@media (max-width:850px) {
    .app{
       flex-direction: column;
       height: 100%;
   }
   .main_right{
        margin-top: 40px;
        max-height: 300px;
        min-height: 50px;
    }
    .footder{
        bottom: -25px !important; 
     }
   
}
@media (max-width:530px) {

    .footder{
        bottom: -24px !important; 
     }
}
</style>