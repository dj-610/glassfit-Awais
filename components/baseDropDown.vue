<template>
  <div :class="['flex flex-col', wrapperClass]">
    <label v-if="label" :for="selectId" class="block text-sm font-medium text-black mb-[6px]">
      {{ label }}
    </label>
    <select :id="selectId" :class="[
      // 👇 base styles here
      'w-[50px] sm:w-[100px] max-[1020px]:w-[100px] max-[1020px]:text-lg md:text-sm h-[30px] text-[10px] sm:text-[16px] font-light',

      // 👇 user-defined styles applied last so they take precedence
      selectClass
    ]" v-model="selectedOption">
      <option v-for="item in options" :key="item.value ?? item" :value="item.value ?? item">
        {{ item.label ?? item }}
      </option>
    </select>
  </div>
</template>
<script setup>
const selectId = useId();
const selectedOption = ref(null);
defineProps({
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => ["option 1", "option 2", "option 3", "option 4", "option 5"],
  },
  selectClass: {
    type: String,
    default: "",
  },
  wrapperClass: {
    type: String,
    default: "",
  },
});
</script>
