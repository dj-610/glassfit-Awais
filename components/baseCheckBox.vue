<template>
    <div class="flex gap-4 items-center">
    <input
    type="checkbox"
    class="flex items-center cursor-pointer p-[10px] mt-[8px] border border-black/30 appearance-none checked:bg-black "
    @click="$emit('update:modelValue', !modelValue)"
    >
    <span class="text-[12px] sm:text-[16px] font-light pt-2">{{ label }}</span>
    </input>
</div>
</template>
<script setup>
defineProps({
    label: {
        type: String,
        default: "Checkbox",
    },
});
const emit = defineEmits(["update:modelValue"]);
</script>