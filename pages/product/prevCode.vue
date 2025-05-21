<template>
     <div class="left w-[600px] flex flex-col justify-items-start items-center">
      <div class="w-[100%] flex flex-col justify-center items-center">
        <img
          :src="product.image[0]"
          alt=""
          :class="[
            'w-[100%] object-cover bg-gray-100',
            expanded ? 'h-[400px]' : 'h-[400px]',
          ]"
        />
        <div>
          <div class="pl-2 w-[99%] flex flex-wrap mb-6 justify-evenly">
            <div class="w-[100%] flex flex-wrap">
            <img
              v-for="(img, index) in visibleImages"
              :key="index"
              class="w-[50%] h-[200px] bg-gray-100 object-cover border border-white"
              :src="img"
              alt=""
            />
          </div>
            <div>
              <div v-if="!expanded && product.image.length > 2">
                <p
                  class="underline font-medium text-[16px] mt-4 cursor-pointer"
                  @click="expanded = true"
                >
                  View More
                </p>
              </div>
              <div v-else>
                <p
                  class="underline font-medium text-[16px] mt-4 cursor-pointer"
                  @click="expanded = false"
                >
                  View Less
                </p>
              </div>
            </div>
            <div class="w-[100%] flex flex-col mt-8 mb-6">
              <div class="flex flex-row justify-evenly items-center w-[100%]">
                <h1 class="text-2xl">Frame measurements</h1>
                <a
                  href="#"
                  class="pt-[2px] text-[15px] font-light pl-[20px] hover:underline"
                  >Not sure what's your size?</a
                >
                <a
                  href="#"
                  class="pt-[2px] text-[15px] font-light pl-[20px] hover:underline"
                  >Find your Size</a
                >
              </div>
              <div class=" mb-6">
                <baseTable
                  :headers="headers2"
                  :rows="rows2"
                  customClass="w-[100px] h-[70px] flex flex-col gap-3 m-[10px] items-center justify-center "
                >
                   class="text-black/70 font-medium"<template
                    #lensWidth="{ row, rowIndex, cellValue, customClass }"
                  >
                    <div :class="customClass">
                      <img
                        src="/public/images/products/sizes/lensWidth.png"
                        alt=""
                        class="w-[70%] max-h-full object-contain"
                      />
                      <span class="text-black/70 font-medium">{{ row.lensWidth }}</span>
                    </div>
                  </template>

```
              <template
                #lensHeight="{ row, rowIndex, cellValue, customClass }"
              >
                <div :class="customClass">
                  <img
                    src="/public/images/products/sizes/lensHeight.png"
                    alt=""
                    class="w-[70%] max-h-full object-contain"
                  />
                  <span class="text-black/70 font-medium">{{ row.lensHeight }}</span>
                </div>
              </template>

              <template
                #bridgeWidth="{ row, rowIndex, cellValue, customClass }"
              >
                <div :class="customClass">
                  <img
                    src="/public/images/products/sizes/bridgeWidth.png"
                    alt=""
                    class="w-[70%] max-h-full object-contain"
                  />
                  <span class="text-black/70 font-medium">{{ row.bridgeWidth }}</span>
                </div>
              </template>

              <template
                #templeLength="{ row, rowIndex, cellValue, customClass }"
              >
                <div :class="customClass">
                  <img
                    src="/public/images/products/sizes/templeLength.png"
                    alt=""
                    class="w-[70%] max-h-full object-contain"
                  />
                  <span class="text-black/70 font-medium">{{ row.templeLength }}</span>
                </div>
              </template>
            </baseTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>