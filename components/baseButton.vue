<template>
  <button
    :class="buttonType"
    :disabled="disabled"
    v-bind="$attrs"
      class="font-bold whitespace-nowrap"
  >
    <slot></slot>
  </button>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});
const buttonType = computed(() => ({
  primary: 'bg-white text-black rounded-[2px] px-6 h-[50px] text-[16px] cursor-pointer hover:bg-[#F2F2F2] transition duration-300 ease-in-out inline-flex items-center justify-center min-w-[160px]',
  secondary: 'bg-[#FFFFFF1A] text-black rounded-[2px] px-6 h-[50px] border border-white text-[16px] cursor-pointer hover:bg-gray-600 transition duration-300 ease-in-out inline-flex items-center justify-center min-w-[140px]',
  cancel: 'bg-red-600 text-white px-6 rounded-[2px] h-[50px] text-[16px] cursor-pointer hover:bg-red-400 transition duration-300 ease-in-out inline-flex items-center justify-center min-w-[120px]',
  custom: ' text-black rounded-[2px] h-[50px] text-[16px] cursor-pointer hover:bg-black/80 transition duration-300 ease-in-out inline-flex items-center justify-center min-w-[100px]',
}[props.type]))
</script>
