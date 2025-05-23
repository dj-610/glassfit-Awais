<template>
  <div class="h-auto">
    <div
      class="w-full bg-[#E7F2ED] p-2 flex items-center justify-center mt-23 text-[#08833D]"
    >
      <p>39% - You saved $285.00</p>
    </div>
    <div class="mb-10 px-15 py-6 flex flex-row">
      <div class="left w-[70%]">
        <div class="flex flex-row gap-3 w-full">
          <div class="flex flex-col gap-">
            <h1 class="text-[40px]">Bag</h1>
            <img
              src="../../public/images/products/product1.png"
              alt=""
              class="size-[106px] bg-gray-100"
            />
          </div>
          <div class="pb-10 pt-16 flex flex-col gap-2 w-[80%]">
            <div class="flex flex-row gap-3">
              <div
                class="flex items-center border border-black/70 rounded px-2 w-fit text-sm h-[50px]"
              >
                <img
                  src="../../public/icons/del.png"
                  alt="delete"
                  class="w-4 h-4 mr-1"
                />
                <baseDropDown
                  :options="['1', '2', '3']"
                  :selectClass="'border-none focus:ring-0 outline-none w-auto pl-2 bg-transparent'"
                  :wrapperClass="'m-0 p-0'"
                />
              </div>
              <div
                class="border border-black rounded-full size-[50px] flex items-center justify-center"
              >
                <img src="../../public/icons/heart.png" alt="" class="size-4" />
              </div>
            </div>
            <p class="bg-[#F6F6F6] text-[14px] p-1 text-center w-[135px]">
              PRESCRIPTION
            </p>
            <!-- Details Section -->
            <div class="border-b border-black/20 pb-5">
              <div class="flex items-center justify-between mb-4">
                <h1 class="text-[36px]">Holbrook™ XL</h1>
                <h1 class="text-[36px]">$439.00</h1>
              </div>
              <!-- Frame Description -->
              <div class="flex flex-col gap-2">
                <h1 class="text-[24px] mb-2">Frame Description</h1>
                <div class="flex flex-row gap-20">
                  <div>
                    <p class="mb-4">Frame shape</p>
                    <p class="mb-4">Frame color</p>
                    <p class="mb-4">Frame material</p>
                    <p class="mb-4">Temple color</p>
                  </div>
                  <div class="font-light">
                    <p class="mb-4">Pilot</p>
                    <p class="mb-4 w-[40px] h-[20px] bg-[#2198D3]"></p>
                    <p class="mb-4">Metal</p>
                    <p class="mb-4">Gold</p>
                  </div>
                </div>
              </div>
              <!-- Product Dimensions -->
              <div class="flex flex-col gap-2">
                <h1 class="text-[24px] mb-2">Product Dimensions</h1>
                <div class="flex flex-row gap-20">
                  <div>
                    <p class="mb-4">Size</p>
                    <p class="mb-4">Lens height</p>
                    <p class="mb-4">Temple length</p>
                  </div>
                  <div class="font-light">
                    <p class="mb-4">58 14 mm</p>
                    <p class="mb-4">50.1 mm</p>
                    <p class="mb-4">135 mm</p>
                  </div>
                </div>
              </div>
              <!-- Lens Description -->
              <div class="flex flex-col gap-2">
                <h1 class="text-[24px] mb-2">Product Dimensions</h1>
                <div class="flex flex-row gap-20">
                  <div>
                    <p class="mb-4">Material options</p>
                    <p class="mb-4">Color options</p>
                    <p class="mb-4">Vision options</p>
                  </div>
                  <div class="font-light">
                    <p class="mb-4">Premium</p>
                    <p class="mb-4">Polarized green classic</p>
                    <p class="mb-4">Single vision</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer flex items-start justify-between pt-5">
              <div class="font-light w-[400px]">
                <p>
                  Add Unlimited Number Of Repairs/Replacement Plan (Future Claim
                  Requires Copay When Applicable)
                  <span>
                    <a href="#" class="underline font-semibold"
                      >Learn more</a
                    ></span
                  >
                </p>
              </div>
              <div class="flex flex-row items-center gap-5">
                <h1>$40.00</h1>
                <label class="relative inline-block w-[38px] h-[22px]">
                  <input type="checkbox" class="sr-only peer" checked />

                  <div
                    class="absolute inset-0 bg-gray-300 rounded-[34px] peer-checked:bg-blue-500 transition duration-400 before:content-[''] before:absolute before:bottom-[2px] before:left-[1px] before:h-[18px] before:w-[18px] before:bg-white before:rounded-full before:transition before:duration-400 peer-checked:before:translate-x-[17px] cursor-pointer"
                  ></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="right h-full bg-gray-200 flex flex-col p-6 mt-4 w-full max-w-[400px] gap-4"
      >
        <div
          class="bg-white p-3 px-5 flex flex-col gap-4 justify-between h-auto"
        >
          <div class="flex flex-row items-center justify-between">
            <p class="font-light">ADD YOUR PROMO CODE</p>
            <img
              src="../../public/icons/downArrow.png"
              alt=""
              class="w-[16px] cursor-pointer"
              @click="togglePromoCode"
            />
          </div>

          <!-- Promo Code input: appears inside flow -->
          <div
            v-show="isPromoVisible"
            class="bg-white p-4 flex flex-col gap-4 w-full transition-all duration-300"
          >
            <input
              type="text"
              class="border border-black/20 rounded-lg font-light w-full h-[40px] px-3"
              placeholder="Enter your code"
            />
            <button class="bg-black text-white p-2 rounded-sm cursor-pointer">
              Submit
            </button>
          </div>
        </div>

        <div class="bg-white p-3 flex flex-row items-center justify-between">
          <p class="font-light">USE INSURANCE</p>
          <label class="relative inline-block w-[38px] h-[22px]">
            <input type="checkbox" class="sr-only peer" checked />
            <div
              class="absolute inset-0 bg-gray-300 rounded-[34px] peer-checked:bg-blue-500 transition duration-400 before:content-[''] before:absolute before:bottom-[2px] before:left-[1px] before:h-[18px] before:w-[18px] before:bg-white before:rounded-full before:transition before:duration-400 peer-checked:before:translate-x-[17px] cursor-pointer"
            ></div>
          </label>
        </div>

        <div class="bg-white flex-row p-3">
          <div class="flex flex-row items-center justify-between">
            <div class="font-light">
              <p class="mb-2">Subtotal</p>
              <p class="mb-2">Promotion</p>
              <p class="mb-2">Shipping Cost</p>
              <p class="mb-2">Estimated Tax</p>
              <p class="font-bold">Total <span>(excl. tax)</span></p>
            </div>
            <div class="font-light text-right">
              <p class="mb-2">$724.00</p>
              <p class="mb-2">- $285.00</p>
              <p class="mb-2">-</p>
              <p class="mb-2">-</p>
              <p class="font-bold">$439.00</p>
            </div>
          </div>
          <div class="text-center my-6 text-[16px] font-normal flex items-center justify-center flex-col">
            <p class=" text-[#08833D]  mb-4">
              You saved $285.00 in total
            </p>
            <p class="w-[89%]">
              Or, pay over time in interest-free instalments with: Apple Pay,
              Affirm, Klarna or PayPal.
            </p>
          </div>
          <div class="flex flex-col gap-3 text-center font-normal">
            <baseButton type="cancel" class="w-full !font-normal">COMPLETE ORDER</baseButton>
            <p class="text-[14px]">Or use instant check out with:</p>
            <baseButton type="custom" class="w-full !font-normal bg-[#F7BF42] text-blue-900">
              <img
                src="../../public/icons/payPal.png"
                alt=""
                class="w-[20px] h-[20px] mr-2"
              />
              PayPal
            </baseButton>
            <baseButton type="custom" class="w-full !font-normal bg-[#08833D] text-white">
                <div class="border-r border-white/50 mr-5 h-[70%] flex items-center justify-center">
              <img
                src="../../public/icons/tick.png"
                alt=""
                class="w-[20px] h-[20px] mr-5 "
              /></div>
              Verify with
               <div class="ml-8">
              <img
                src="../../public/icons/ID.png"
                alt=""
                class="w-[20px] h-[18px] "
              /></div>
              <span class="text-white/50">me</span>
            </baseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  path: "/product/bag",
});
const isPromoVisible = ref(false);

function togglePromoCode() {
  isPromoVisible.value = !isPromoVisible.value;
}
</script>
