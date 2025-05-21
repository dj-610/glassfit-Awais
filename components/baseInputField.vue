<template>
  <div class="mb-4 w-full">
    <label :for="name" class="block text-sm font-medium text-black mb-1">
      {{ label }}
    </label>
    <div
      class="w-full flex items-center font-light border border-gray-300 rounded-md px-3 py-3 focus-within:ring-2 focus-within:ring-blue-500"
    >
      <slot name="prefix" />
      <input
        :type="type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full outline-none border-none text-sm bg-transparent"
        :customClass="customClass"
      />
    </div>
    <slot name="suffix" />
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  name: { type: String, required: true },
  placeholder: { type: String, default: "" },
  required: { type: Boolean, default: false },
  modelValue: [String, Number],
  customClass: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);
</script>
