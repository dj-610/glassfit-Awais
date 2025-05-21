<template>
  <div class="bg-[#FAFAFA] h-screen w-full relative">
    <nav class="flex items-center justify-between bg-white shadow-md p-3 px-8">
      <h1 class="text-18px">GLASS FIT</h1>
      <div class="flex items-center gap-6">
        <a @click="logoutUser" class="flex font-normal text-[14px] gap-3 cursor-pointer">
          <img src="/public/icons/logout.svg" alt="" /> Logout</a
        >
        <img
          src="/public/images/admin.png"
          alt=""
          class="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
    <div class="flex flex-col gap-3 mt-6 px-10">
      <div class="flex items-center justify-between">
        <h1 class="text-[32px]">Products</h1>
        <baseButton
          type="custom"
          class="bg-black text-white px-[16px] rounded-lg font-light"
          @click="toggleDrawer"
          >➕ Add Product</baseButton
        >
        <baseDrawer v-if="showDrawer" @click="showDrawer=false"/>
      </div>
      <div class="flex items-center justify-between gap-2">
        <input
          type="text"
          placeholder="Search"
          class="w-full font-light bg-white h-[40px] border border-[#E0E0E0] px-4"
        />
        <button
          class="h-[40px] font-light flex gap-2 items-center justify-between border px-5 cursor-pointer bg-white border-[#E0E0E0]"
        > <img src="/images/filters.png" class="h-3 w-7">
          Filter
        </button>
      </div>
    </div>
    <div class="px-10">
      <table
        class="w-full mt-6 bg-white rounded-lg font-normal border border-gray-200 border-x-0 border-t-0"
      >
        <thead class="bg-gray-50 ">
          <tr class="text-left border-b border-gray-200  text-[12px]">
            <th v-for="item in headers" :key="item" class="font-normal p-4 pt-0">
              {{ item.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in rows"
            :key="row.productName"
            class="border-b border-gray-100 hover:bg-gray-50 transition  text-[14px]"
          >
            <td class="p-4 flex items-center gap-2">
              <input type="checkbox" class="size-4 bg-gray-200 cursor-pointer" />
              <img src="" alt="product" class="w-5 h-5 object-contain" />
              {{ row.productName }}
            </td>
            <td class="p-4">{{ row.productPrice }}</td>
            <td class="p-4">
              <div class="flex gap-2">
                <span
                  v-for="color in row.color"
                  :key="color"
                  :style="{ backgroundColor: color }"
                  class="w-3 h-3 rounded-full"
                ></span>
              </div>
            </td>
            <td class="p-4">{{ row.size }}</td>
            <td class="p-4">{{ row.createdAt }}</td>
            <td class="p-4">{{ row.sales }}</td>
            <td class="p-4" v-html="row.actions"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
definePageMeta({
  layout: false,
  path: "/superAdmin/products",
});
const headers = [
  { label: "Product Name", key: "productName" },
  { label: "Product Price", key: "productPrice" },
  { label: "Color", key: "color" },
  { label: "Size", key: "size" },
  { label: "Created At", key: "createdAt" },
  { label: "No. of Sales", key: "sales" },
  { label: "Actions", key: "actions" },
];
const rows = [
  {
    productName: "Oakley 009417 Holbrook XL",
    productPrice: "$10.00",
   color: ["#2196F3", "#E0E0E0"],
    size: "Small, Medium, XL, XXL",
    createdAt: "22/04/2025, 10:5 AM ",
    sales: "1,354",
   actions: `
      <div class="flex gap-4">
        <button><img src="/images/pen.png" class="cursor-pointer size-4"></button>
        <button><img src="/images/trash.png" class="cursor-pointer size-4"></button>
      </div>
    `,
  },
  {
    productName: "Product 2",
    productPrice: "$20.00",
    color: ["#2196F3", "#E0E0E0"],
    size: "Small, XXL",
    createdAt: "2023-02-01",
    sales: "1,354",
    actions: `
      <div class="flex gap-4">
        <button><img src="/images/pen.png" class="cursor-pointer size-4"></button>
        <button><img src="/images/trash.png" class="cursor-pointer size-4"></button>
      </div>
    `,
  },
];
function logoutUser(){
    router.push('/superAdmin/auth/login')
}
const showDrawer = ref(false)
function toggleDrawer() {
  showDrawer.value = !showDrawer.value;
}
</script>
