<!-- components/baseModal.vue -->
<template>
  <div class="absolute z-50 inset-0">
    <div
      class="absolute top-[47px] right-[78px] h-auto w-90 p-5 bg-white flex flex-col rounded-[5px]"
      style="box-shadow: 0px 10px 20px black;"
    >
      <div class="flex flex-row justify-between items-center mb-4">
        <slot name="header">
          <h1 class="text-[34px]">Modal Title</h1>
        </slot>
        <button @click="emit('click')" class="p-2 text-black/80 cursor-pointer">✖</button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['click']);
</script>
