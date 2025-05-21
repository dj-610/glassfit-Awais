<template>
  <div class="h-[520px] w-[400px]">
    <div class="h-[400px] w-[400px] bg-[#F5F5F5] flex flex-col relative">
      <div class="absolute top-4 right-4"  @click="alert('Added to favorites')" >
        <img
          src="/public/images/products/heart.png"
          alt=""
          class="w-[20px] h-auto flex"
         
         
        />
      </div>
      <div>
        <img
          :src="productImage[activeImageIndex]"
          alt=""
          class="w-full h-auto cursor-pointer"
          @click="$emit('click')"
           
        />
      </div>
      <div class="absolute top-78 right-78 transform -rotate-90">
        <h2 class="uppercase w-[120px] truncate">{{ title }}</h2>
      </div>
      <div
        class="flex flex-col items-center justify-center text-center mt-4 mb-2"
      >
        <div
          class="flex flex-wrap justify-center gap-2 mb-3 max-w-[200px] mx-auto"
        >
          <button
            v-for="(image, index) in productImage"
            :key="index"
            
            @click="activeImageIndex = index"
            :class="[
              'h-[12px] w-[12px] rounded-full cursor-pointer',
              activeImageIndex === index ? 'bg-blue-400' : 'bg-gray-300'
            ]"
          ></button>
        </div >
        <h1 class="text-[16px] font-bold cursor-pointer" @click="$emit('click')">{{ productName }}</h1>
        <p class="text-[14px] text-gray-600">{{ productDescription }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  productName: {
    type: String,
    default: "Product name",
  },
  productDescription: {
    type: String,
    default: "Product Description",
  },
  productImage: {
    type: Array,
    default: () => ["/images/products/product1.png"],
  },
  title: {
    type: String,
    default: "COSTA",
  },
});

const activeImageIndex = ref(0);

const emit = defineEmits(['click']);
</script>
