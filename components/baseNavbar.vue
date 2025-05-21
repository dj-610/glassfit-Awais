<template>
  <nav class="bg-white p-4 text-black flex justify-between items-center h-[70px] w-[calc(100% - 40px)]">
    <h1 class="text-[32px] font-[700] max-[420px]:text-[25px]">Glass Fit</h1>
    <ul class="hidden lg:flex gap-[50px] text-[16px] font-[400]">
      <li class="hover:text-black/50">
        <NuxtLink to="/">ASAP Rocky</NuxtLink>
      </li>
      <li class="hover:text-black/50">
        <NuxtLink to="/sunGlasses">Sunglasses</NuxtLink>
      </li>
      <li class="hover:text-black/50">
        <NuxtLink to="/contact">Eyeglasses</NuxtLink>
      </li>
      <li class="hover:text-black/50">
        <NuxtLink to="/services">AI Glasses</NuxtLink>
      </li>
      <li class="hover:text-black/50">
        <NuxtLink to="/services">Promo</NuxtLink>
      </li>
    </ul>
    <div class="flex gap-6 relative cursor-pointer items-center">
      <img src="/icons/search.png" alt="Logo" class="max-[420px]:h-[20px] p-[10px] hover:bg-black/10" />
      <img src="/icons/accounts.png" alt="Logo" class="max-[420px]:h-[20px] p-[10px] hover:bg-black/10"
        @click="toggleModal" />
      <img src="/icons/store.png" alt="Logo" class="max-[420px]:h-[20px] p-[10px] hover:bg-black/10" />
      <svg xmlns="http://www.w3.org/2000/svg" class="size-7 lg:hidden" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <!-- Login Modal -->
      <baseModal v-if="showLogin" @click="closeAllModals">
        <template #header>
          <h1 class="text-[24px] font-semibold">Login</h1>
        </template>

        <baseInputField placeholder="Email Address" v-model="login.email" type="text" />
        <baseInputField placeholder="Password" v-model="login.password" type="password" />

        <div class="flex justify-between items-center mt-4 mb-6">
          <baseButton type="custom" @click="openUserModal" class="bg-black text-white px-4 py-2">Login</baseButton>
          <a @click="openForgotPassword" class="text-sm font-light">Forgot Password?</a>
        </div>

        <p class="text-sm font-light">
          Don't have an account?
          <a href="#" @click="openSignup" class="underline">Sign up</a>
        </p>
      </baseModal>
      <!-- Sign Up Modal -->
      <baseModal v-if="showSignup" @click="closeAllModals">
        <template #header>
          <h1 class="text-[34px]">Signup</h1>
        </template>

        <baseInputField placeholder="Name" v-model="signup.name" type="text" />
        <baseInputField placeholder="Email Address" v-model="signup.email" type="email" />
        <baseInputField placeholder="Password" v-model="signup.password" type="password" />
        <baseInputField placeholder="Confirm Password" v-model="signup.confirmPassword" type="password" />

        <baseButton type="custom" @click.stop="registerUser" class="bg-black text-white w-[10px] px-4 py-2">Signup</baseButton>

        <p class="mt-4 text-sm font-light">
          Already have an account?
          <span class="underline cursor-pointer" @click="openLogin">Login here</span>
        </p>
      </baseModal>
      <!-- ForgotPassword -->
      <baseModal v-if="showForgotPassword" @click="closeAllModals">
        <template #header>
          <h1 class="text-[34px]">Forgot Password</h1>
        </template>
        <baseInputField placeholder="Email Address" type="email" />
        <div>


          <baseButton type="custom" @click="openNewPasswordModal" class="bg-black text-white px-4 py-2">Submit</baseButton>
        </div>
      </baseModal>
       <!-- set New Password -->
     <baseModal v-if="showNewPassword" @click="closeAllModals">
        <template #header>
          <h1 class="text-[29px]">Set New Password</h1>
        </template>
        <baseInputField placeholder="New Password" type="password" />
        <baseInputField placeholder="Confirm New Password" type="password" />
        <div>
          <baseButton type="custom" class="bg-black text-white px-4 py-2">Set New Password</baseButton>
        </div>
      </baseModal>
      <!-- user Modal -->
       <baseModal v-if="showUserModal" @click="closeAllModals">
        <template #header>
          <div class="flex flex-col items-center mb-2">
          <h1 class="text-[34px]">{{ login.name }}</h1>
        <p class="font-light">{{ login.email }}</p>
        </div>
        </template>
        <div class="flex items-center justify-between">
        <baseButton type="custom"  @click="openLogin" class="bg-black text-white px-4 py-2">Logout</baseButton>
        <a class="font-light " @click="showNewPassword">Change Password</a>
        </div>
        </baseModal>
    </div>
   
  </nav>
</template>
<script setup>
const showLogin = ref(false);
const showSignup = ref(false);
const showForgotPassword = ref(false);
const showNewPassword = ref(false);
const showUserModal = ref(false);

const login = reactive({
  email: '',
  password: '',
  name:'Awais Javaid'
});
const signup = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});
function clearAllFields() {
  login.email = '';
  login.password = '';
  signup.name = '';
  signup.email = '';
  signup.password = '';
  signup.confirmPassword = '';
}
function registerUser() {
 alert('Signup done');
  closeAllModals();
  showLogin.value = true;
  showSignup.value = false;
  showForgotPassword.value = false;
  showNewPassword.value = false;
  showUserModal.value = false;
  login.email = signup.email;
  login.password = signup.password;
  login.name = signup.name;
  console.log('User registered:', signup);
  clearAllFields();
}
const toggleModal = () => {
  showLogin.value = !showLogin.value;
  if (showLogin.value) showSignup.value = false;
};

const openSignup = () => {
  showSignup.value = true;
  showLogin.value = false;
};

const openLogin = () => {
  closeAllModals() ;
  showLogin.value = true;
  showSignup.value = false;
};

const closeAllModals = () => {
  showLogin.value = false;
  showSignup.value = false;
  showForgotPassword.value = false;
  showNewPassword.value = false;
  showUserModal.value = false;
};
const openForgotPassword = () => {
  showLogin.value = false;
  showSignup.value = false;
  showForgotPassword.value = true;
};
const openNewPasswordModal = () => {
  showForgotPassword.value = false;
  showNewPassword.value = true;
};
const openUserModal = () => {
  showLogin.value = false;
  showSignup.value = false;
  showUserModal.value = true;
};
</script>
