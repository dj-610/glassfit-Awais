<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-[750px] mt-30 mb-7 flex flex-col justify-center items-start">
      <h1 class="text-[40px] font-bold mb-2">Shipping information</h1>
      <div>
        <div class="w-[750px] mt-10 mb-8 space-y-4">
          <baseInputField
            label="Your Full Name"
            name="fullName"
            v-model="form.fullName"
          />
          <label for="phoneNo" class="block text-sm font-medium text-black mb-1"
            >Phone Number</label
          >
          <VueTelInput
            v-model="form.phone"
            mode="international"
            :valid-characters-only="true"
            :placeholder="'(123) 456-7890'"
            :default-country="'US'"
            class="w-full outline-none border-none text-sm bg-transparent font-light p-2"
            id="phoneNo"
          />

          <baseInputField
            label="Email"
            name="email"
            type="email"
            v-model="form.email"
            placeholder="you@example.com"
          />
          <baseInputField
            label="Address Line 1"
            name="addressLine1"
            v-model="form.addressLine1"
          />
          <baseInputField
            label="Address Line 2"
            name="addressLine2"
            v-model="form.addressLine2"
          />
          <baseInputField
            label="Zip Code"
            name="zipCode"
            v-model="form.zipCode"
          />
          <label for="" class="block text-sm font-medium text-black mb-1"
            >Country</label
          >
          <select
            name=""
            id=""
            v-model="form.country"
            class="w-full h-[50px] text-[16px] pr-10 font-light border border-gray-300 rounded-md px-3 py-3 focus-within:ring-2 focus-within:ring-blue-500"
          >
            <option value="">United States</option>
          </select>
        </div>
        <baseButton type="custom" class="bg-black text-white" @click="continueToShip">
          Continue</baseButton
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import {useRouter } from "vue-router";

const router = useRouter();
function continueToShip() {
  router.push('/product/bag');
}

definePageMeta({
  path: "/product/shippingAddress",
});

const form = reactive({
  fullName: "",
  phone: "",
  email: "",
  addressLine1: "",
  addressLine2: "",
  zipCode: "",
  country: "United States",
});
</script>
