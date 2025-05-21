<template>
    <div class="flex items-center gap-2">

    
    <input type="radio"
    class="flex h-[22px] w-[22px] border border-black/30 rounded-full gap-4 appearance-none
     checked:border-black cursor-pointer checked:bg-black checked:ring-4 checked:ring-inset checked:ring-white"
    id="radio"
    name="radio"
    />
    <label id="radio" class="font-light text-[16px]">{{ label }}</label>
</div>
</template>
<script setup>
defineProps({
    label:{
        type: String,
        default:"label"
    }
})
</script>