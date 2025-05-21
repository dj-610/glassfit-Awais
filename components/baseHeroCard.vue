<template>
    <div class="w-full">
        <div class="h-[600px] w-full relative pt-[100px] ">
            <img 
            :src="imgSrc" 
            :class="position"
            alt="Hero Card"
            class="absolute inset-0 h-full w-full object-cover border border-white hover:border " />
        <div class="w-[200px] xl:w-[400px] absolute bottom-4 left-1/2 cursor-pointer transform -translate-x-1/2 bg-white py-2 text-center">
      <p class="font-semibold text-gray-800">{{ title }}</p>
    </div>
    </div>
</div>
</template>
<script setup>
const props = defineProps({
    imgSrc: String ,
    title: {
        type: String,
        default: "Hero Card",
    },
    position: String
})
</script>