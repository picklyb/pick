<template>
    <div class="sign">
        <form action="index.html" autocomplete="off" class="sign-up-form">
            <div class="logo">
                <h4>PICK</h4>
            </div>
            <div class="heading">
                <h2>注册</h2>
            </div>
            <div ref="table" class="actual-form">
                <div class="input-wrap">
                    <input  id="sign-name" type="text" minlength="4" autocomplete="off" required class="input-field"  name="Name">
                    <label for="sign-name">Name</label>
                </div>
                <div class="input-wrap">
                    <input  id="sign-password" type="password" autocomplete="off" required class="input-field"  name="Password">
                    <label for="sign-password">Password</label>
                </div>
                <div class="input-wrap">
                    <input  id="sign-email" type="email" autocomplete="off" required class="input-field"  name="Email">
                    <label for="sign-email">Email</label>
                </div>
                <input  type="submit" value="SIGN UP" class="sign-btn">
                <p class="text">
                    <input type="checkbox" name="" id="">&nbsp;注册前我已阅读并同意
                    <a href="#">服务条款</a>和
                    <a href="#">隐私协议</a>
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