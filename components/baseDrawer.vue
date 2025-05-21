<template>
  <div
    class="wrapper w-full h-full pb-10 bg-black/30 absolute top-0 left-0 z-50"
  >
    <div
      class="h-full w-[500px] absolute top-0 right-0 bg-white z-50"
    >
      <div class=" header flex bg-white w-[500px] h-[15%] items-center justify-between py-4 px-5">
        <h1 class="text-[32px]">Add New Product</h1>
        <button
          @click="emit('click')"
          class="cursor-pointer bg-gray-400 text-white text-[12px] font-light rounded-full size-6 flex items-center justify-center"
        >
          ✖
        </button>
      </div>
      <div class="flex flex-col px-5 h-[70%] overflow-auto">
        <baseInputField
          type="text"
          label="Product Name"
          placeholder="Enter Product Name"
        ></baseInputField>
        <baseInputField
          type="number"
          label="Product Price"
          placeholder="Enter Price"
        ></baseInputField>
        <div class="mb-4">
          <p class="mb-2 font-semibold">Frame Colors</p>

          <div class="flex flex-row flex-wrap gap-3">
            <!-- Images with color pickers -->
            <div
              v-for="(item, index) in frameColors"
              :key="index"
              class="flex flex-col items-center space-y-2"
            >
              <div class="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                <img
                  :src="item.image"
                  alt="frame"
                  class="w-full h-full object-cover"
                />
              </div>
              <label
                class="relative w-6 h-6 rounded-full cursor-pointer overflow-hidden"
              >
                <span
                  class="absolute inset-0 rounded-full"
                  :style="{
                    background: item.color
                      ? item.color
                      : 'url(/images/rainbow.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }"
                ></span>
                <input
                  type="color"
                  v-model="item.color"
                  class="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
            </div>
            <label
              class="w-20 h-20 border rounded flex items-center justify-center cursor-pointer"
            >
              <span class="text-xl">+</span>
              <input
                type="file"
                accept="image/*"
                class="hidden"
                @change="uploadFrameColors"
              />
            </label>
          </div>
        </div>
        <!-- Product Size -->
        <div class="mb-4">
          <p class="mb-2 font-semibold">Product Size</p>
          <div class="flex gap-2">
            <button
              v-for="(size, index) in sizes"
              :key="index"
              @click="toggleSize(size)"
              :class="[
                'px-4 py-2 text-[12px] rounded-full transition',
                selectedSizes.includes(size)
                  ? 'bg-gray-300 text-black'
                  : 'bg-gray-100 text-black/50 hover:bg-gray-200',
              ]"
            >
              {{ size }}
            </button>
          </div>
        </div>
        <!-- Upload Photo -->
        <div class="mb-4">
          <p class="mb-2 font-semibold">Upload Photo</p>
          <div class="flex flex-wrap gap-2">
            <div v-for="(item, index) in photos" :key="index">
              <label
                :class="[
                  'w-20 h-20 rounded flex items-center justify-center cursor-pointer overflow-hidden',
                  item ? 'bg-gray-100' : 'border ',
                ]"
              >
                <template v-if="item">
                  <img :src="item" class="w-full h-full object-cover" />
                </template>
                <template v-else>
                  <span class="text-xl">+</span>
                </template>
                <input
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="(e) => uploadPhoto(e, index)"
                />
              </label>
            </div>
          </div>
        </div>
        <!-- Description -->
        <div class="mb-4">
          <p class="mb-2 font-semibold">Description</p>
          <textarea
            class="w-full h-32 border border-black/10 font-light p-4"
            placeholder="Enter Description"
          ></textarea>
        </div>
        <!-- Frame Measurements -->
        <div class="mb-4">
          <p class="mb-2 text-[24px] font-semibold">Frame Measurements</p>
          <div class="flex flex-col gap-4">
            <div class="flex flex-row gap-4 items-center justify-between">
              <baseInputField
                type="text"
                label="Lens Width"
                placeholder='59 mm/2.32"'
              >
            
              ></baseInputField>
              <baseInputField
                type="text"
                label="Lens Height"
                placeholder='45 mm/1.77"'
              ></baseInputField>
            </div>
            <div class="flex flex-row gap-4 items-center justify-between">
              <baseInputField
                type="text"
                label="Bridge Width"
                placeholder='18 mm/0.71"'
              ></baseInputField>
              <baseInputField
                type="text"
                label="Temple Height"
                placeholder='18 mm/0.71"'
              ></baseInputField>
            </div>
          </div>
        </div>
        <!-- Frame Specs -->
        <div class="mb-4">
          <p class="mb-2 text-[24px] font-semibold">Frame Specs</p>
          <div class="flex flex-col">
            <div class="flex flex-row gap-4 items-center justify-between">
              <baseInputField
                type="text"
                label="Size"
                placeholder="Extra Large"
              ></baseInputField>
              <baseInputField
                type="text"
                label="Material"
                placeholder="Plastic"
              ></baseInputField>
            </div>
            <div class="flex flex-col">
              <div
                class="flex flex-row gap-4 items-center justify-between mb-4"
              >
                <baseDropDown
                  label="Shape"
                  :options="shapes"
                  selectClass="!w-[210px] !h-[43px]  flex items-center font-light border border-gray-300 px-3 py-3"
                />
                <baseDropDown
                  label="Spring Hinges"
                  :options="yesNo"
                  selectClass="!w-[210px] !h-[43px] flex items-center text-black font-light border border-gray-300 px-3 py-3"
                />
              </div>
              <div class="flex flex-row gap-4 items-start">
                <baseDropDown
                  label="Progressive/Bifocal Eligible"
                  :options="yesNo"
                  selectClass="!w-[210px] !h-[43px] pt-2 flex items-center font-light border border-gray-300 px-3 py-3"
                />
                <baseInputField
                  type="text"
                  label="Color"
                  placeholder="Mate Black"
                  class="rounded-none"
                />
              </div>
              <div class="flex flex-row gap-4 items-start">
                <baseDropDown
                  label="Gender"
                  :options="yesNo"
                  selectClass="!w-[210px] !h-[43px] pt-2 flex items-center font-light border border-gray-300 px-3 py-3"
                />
                <baseInputField
                  type="text"
                  label="Type"
                  placeholder="Full-Rim"
                  class="rounded-none"
                />
              </div>
              <div
                class="flex flex-row gap-4 items-center justify-between mb-4"
              >
                <baseDropDown
                  label="Lens Featured"
                  :options="shapes"
                  selectClass="!w-[210px] !h-[43px]  flex items-center font-light border border-gray-300 px-3 py-3"
                />
                <baseDropDown
                  label="Polarized"
                  :options="yesNo"
                  selectClass="!w-[210px] !h-[50px] flex items-center text-black font-light border border-gray-300 px-3 py-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer bg-white bottom-0 w-full h-[15%] flex flex-row items-center gap-4 px-5 py-4">
        <baseButton type="custom" class="bg-black text-white px-4 font-normal ">
          Add Product  
        </baseButton>
         <baseButton type="custom" class="bg-white text-black border border-black" @click="emit('click')">
          Cancel  
        </baseButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const emit = defineEmits(["click"]);
const frameColors = ref([]);
const sizes = ["Small", "Medium", "Large", "XL", "XXL"];
const selectedSizes = ref([]);
const photos = ref([null, null, null, null, null]);
const yesNo = ["Yes", "No"];
const shapes = ["Square", "Round", "Ova"];

function toggleSize(size) {
  if (selectedSizes.value.includes(size)) {
    selectedSizes.value = selectedSizes.value.filter((s) => s !== size);
  } else {
    selectedSizes.value.push(size);
  }
}

function uploadFrameColors(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      frameColors.value.push({
        image: reader.result,
        color: null,
      });
    };
    reader.readAsDataURL(file);
  }
}
function uploadPhoto(event, index) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      photos.value[index] = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
</script>
