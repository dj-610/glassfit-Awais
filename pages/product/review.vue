
<template>
  <div class="flex flex-col justify-center items-center">
    <!-- Review your selections -->
    <div class="w-[750px] mt-30 mb-7 flex flex-col justify-center items-start">
      <h1 class="text-[40px] font-bold mb-2">Review your selections</h1>
      <p class="text-[16px] font-light">
        Etched with the logo and perfectly cut to fit your frame. Enhanced UV
        protection on both sides. A scratch-resistant, anti-reflective coating
        included.
      </p>
    </div>
    <!-- Frame -->
    <div class="w-[750px] mb-8 flex flex-col items-start">
      <div class="w-full mb-2 flex justify-between items-center">
        <h1 class="text-[24px]">Frame</h1>
        <p class="text-[16px] font-regular">$154.00</p>
      </div>
      <p class="text-[16px] font-light mb-7">Oakley Holbrook™ XL</p>
      <p class="w-full border-b border-black/20"></p>
    </div>
    <!-- Lenses -->
    <div class="w-[750px] mb-7 flex flex-col items-start">
      <div class="w-full mb-3 flex justify-between items-center">
        <h1 class="text-[24px]">Lenses</h1>
        <p class="text-[16px] font-regular">$270.00</p>
      </div>
      <div class="flex flex-row gap-20 justify-center items-start text-[16px]">
        <div class="font-medium flex flex-col gap-2">
          <p>Vision need</p>
          <p>Prescription</p>
          <p>Color</p>
          <p>Lens brand</p>
          <p>Design</p>
          <p>Thickness</p>
          <p>Finishings</p>
          <p>Protection plan</p>
        </div>
      <div class="font-light flex flex-col gap-2 mb-7">
        <p>Single Vision</p>
        <p>We’ll ask for it after the checkout</p>
        <p class="w-10 bg-blue-500 text-blue-500">.</p>
        <p>Oakley Holbrook™</p>
        <p>Oakley Holbrook™ </p>
        <p>Premium - Thin</p>
        <p>
          Anti-reflective and anti-smudge treatments, Scratch-resistant
          treatment
        </p>
        <p>No, I don’t want to purchase the protection plan</p>
      </div>
      </div>
            <p class="w-full border-b border-black/20"></p>
    </div>
    <!-- Total -->
     <div class="w-[750px] mb-10 flex flex-col items-start">
      <div class="w-full mb-3 flex justify-between items-center">
        <h1 class="text-[24px]">Total</h1>
        <p class="text-[24px] font-regular">$424.00</p>
        </div>
        <p class="text-[16px] font-light mb-7">
         Pay over time in interest-free instalments with PayPal, Klarna or Affirm. <a href="#" class="font-bold underline">Learn More </a></p>
         <div class="w-full flex gap-4 items-start">
          <baseButton type="secondary" class="bg-black/100 text-white font-medium text-[16px]" 
          @click="addShippingAddress"
          >Continue</baseButton>
          <baseButton type="custom" class="border border-black/50 font-light text-[16px] px-4">Edit Information</baseButton>
         </div>
          </div>
  </div>
</template>


<script setup>
import { useRouter } from "vue-router";
definePageMeta({
  path: "/product/review",
});
  const router = useRouter();
function addShippingAddress() {
  router.push("/product/shippingAddress");
}
</script>
