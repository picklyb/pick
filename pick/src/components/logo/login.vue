<template>
    <div class="sign">
        <form action="index.html" autocomplete="off" class="sign-in-form">
            <div class="logo">
                <h4>PICK</h4>
            </div>
            <div class="heading">
                <h2>欢迎回来</h2>
            </div>
            <div  ref="table" class="actual-form">
                <div class="input-wrap">
                    <input id="name" type="text" minlength="4" autocomplete="off" required class="input-field"  name="Name">
                    <label for="name">Name</label>
                </div>
                <div class="input-wrap">
                    <input id="password" type="password" autocomplete="off" required class="input-field" name="Password">
                    <label for="password">Password</label>
                </div>
                <input type="submit" value="SIGN IN" class="sign-btn">
                <p class="text">忘记密码?
                    <a href="#">获取帮助</a>
                </p>
            </div>
        </form>
    </div>
</template>

<script lang="ts" scoped setup>
import { ref,onMounted,toRef } from 'vue'

const table = ref<HTMLElement | null>(null)
const tableRef = toRef(table, 'value')

onMounted(() => {
    tableRef.value?.querySelectorAll('div').forEach(item=>{
        const input = item.querySelector('input')
        const label = item.querySelector('input')
        input?.addEventListener('focus',()=>{
            label?.classList.add('active')
        })
        input?.addEventListener('blur',()=>{
            if(input?.value !='')return
            label?.classList.remove('active')
        })
    })
})

</script>

<style lang="scss" scoped>
 
</style>