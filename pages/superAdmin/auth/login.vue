<template>
<div class="flex flex-col items-center justify-center h-screen bg-gray-50">
   <div class="w-[533px] h-[368px] text-center bg-white shadow-lg rounded-4xl p-8">
    <h1 class="text-[24px] mb-4">Sign in to your account</h1>
    <baseInputField placeholder="Email Address" v-model="login.email" type="email" />
    <baseInputField placeholder="Password" v-model="login.password" type="password" /> 
    <div class="flex items-center justify-between mb-6">
    <baseCheckBox label="Remember me" v-model="login.rememberMe" />
    <a href="#" class="pt-3 font-light">Forgot Password?</a>
    </div>
    <baseButton type="custom" @click="loginUser" class="bg-black text-white w-full px-4 py-2">Sign In</baseButton>
   </div>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
definePageMeta({
    layout: false,
    path: '/superAdmin/auth/login',
})
const login = ref({
    email: '',
    password: '',
    rememberMe: false,
});
function clearAllFields() {
    login.value.email = '';
    login.value.password = '';
    login.value.rememberMe = false;
}
    const router = useRouter();
function loginUser() {
    if (login.value.email === "awaisjavaid610@gmail.com" &&
    login.value.password === "123456") {
    router.push('/superAdmin/products');
    clearAllFields();
    } else {
        alert('Invalid email or password');
        clearAllFields();
    }
}
</script>