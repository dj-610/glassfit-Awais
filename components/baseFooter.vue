<template>
    <div class="overflow-x-hidden h-auto">
    <div class="bg-[#F2F2F2] text-white p-[95px]">
       <div class="header flex justify-evenly flex-row mb-4 max-[750px]:flex-col max-[750px]:mb-10">
              <div>
                <h1 class="text-[20px] font-bold mb-4 w-full text-black xl:text-[40px]">
                    Enjoy the ones community and get a special welcome reward
                </h1>
              </div>
              <div class="flex flex-row gap-4 max-[750px]:flex-col">
                <input type="text" placeholder="Enter your email address" class="w-[200px] h-[50px] rounded-[3px] p-4 text-black bg-white xl:w-[430px] max-[750px]:w-full" />
                 <baseButton type="primary" @click="signup">Sign Up</baseButton>
              </div>
       </div>
       <div class="content">
        <ul class="flex flex-wrap justify-evenly text-[16px] font-[400] items-center max">
            <li class="text-[16px] font-[600] text-black flex flex-col items-center mb-[20px]"> <img src="/icons/footer/secure.png" class="mb-[20px] " alt="Logo" /> Secure Checkout</li>
            <li class="text-[16px] font-[600] text-black flex flex-col items-center mb-[20px]"> <img src="/icons/footer/store.png" class="mb-[20px] " alt="Logo" /> Responsile Shiping</li>
            <li class="text-[16px] font-[600] text-black flex flex-col items-center mb-[20px]"> <img src="/icons/footer/shipping.png" class="mb-[20px] " alt="Logo" /> Pick up in Store</li>
            <li class="text-[16px] font-[600] text-black flex flex-col items-center mb-[20px]"> <img src="/icons/footer/appointments.png" class="mb-[20px] " alt="Logo" /> Store Appointments</li>
        </ul>
       </div>
    </div>
       <div class="footer h-[42px] bg-[#E2E2E5] flex justify-center items-center">
        <img src="/icons/cards.png"  alt="Logo" />
       </div>
        </div>
</template>
<script setup>
function signup() {
    alert("Sign up button clicked!");
  }
</script>