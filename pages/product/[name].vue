<template>
  <div class="w-[100%] h-auto">
    <div
      class="flex justify-center items-center bg-gray-100 text-center mt-25 p-1 text-lg font-bold text-black"
    >
      <p>50% off Lens Upgrades (Code: Lense50)</p>
    </div>
    <div
      v-if="product"
      class="flex flex-col md:flex-row gap-6 justify-center items-center md:items-start mt-10 md:pl-20"
    >
      <div class="left w-[80%] flex flex-col items-center md:w-[600px]">
        <div class="w-full flex flex-col items-center">
          <img
            :src="imageClicked ? selectedImage : product.image[0]"
            alt=""
            class="w-full object-contain sm:object-cover bg-gray-100 h-[300px] sm:h-[400px]"
          />

          <div class="w-full flex flex-wrap mb-6 justify-evenly">
            <div class="expandedImages w-full flex flex-wrap">
              <img
                v-for="(img, index) in visibleImages"
                :key="index"
                class="w-1/2 h-[150px] sm:h-[200px] bg-gray-100 object-contain sm:object-cover border border-white"
                :src="img"
                alt=""
              />
            </div>
            <div class="w-full text-center mt-4">
              <p
                class="underline font-medium text-sm sm:text-[16px] cursor-pointer"
                @click="expanded = !expanded"
              >
                {{ expanded ? "View Less" : "View More" }}
              </p>
            </div>
            <div>
              <div
                class="right w-[100%] md:px-7 pt-3 flex flex-col gap-4 md:hidden md:w-[50%]"
              >
                <h1 class="text-lg sm:text-4xl">{{ product.name }}</h1>
                <img
                  src="/images/products/reviews.png"
                  alt=""
                  class="w-[150px] object-contain"
                />
                <h1 class="text-sm sm:text-2xl mb-3">
                  {{ product.description }}
                </h1>
                <div>
                  <h1 class="text-2xl">Choose Frame Colors</h1>
                  <div class="flex flex-wrap gap-4 mt-3 mb-6">
                    <img
                      v-for="(img, index) in product.image"
                      :key="index"
                      :src="img"
                      alt=""
                      class="bg-gray-100 w-[80px] h-[80px] object-cover border-2 border-gray-100 cursor-pointer hover:border-black"
                      @click="changeImage(img)"
                    />
                  </div>
                  <div class="text-[16px] mb-6">
                    <p class="mb-4 text-[16px] w-[300px] sm:w-full font-light">
                      Pay over time with
                      <span class="font-bold"> Klarna, PayPal</span> or
                      <span class="font-bold">Affirm</span>
                    </p>
                    <p class="flex gap-2 items-center font-light">
                      <img
                        src="/public/images/products/tick.png"
                        class="w-3 h-3"
                        alt=""
                      />Prescription eligible
                    </p>
                    <p class="flex gap-2 items-center font-light">
                      <img
                        src="/public/images/products/tick.png "
                        class="w-3 h-3"
                        alt=""
                      />Free shipping and returns
                    </p>
                    <p class="flex gap-2 items-center font-light">
                      <img
                        src="/public/images/products/tick.png"
                        class="w-3 h-3"
                        alt=""
                      />100% money back guaranteed
                    </p>
                  </div>
                  <div class="flex gap-2 items-center mb-7">
                    <h2 class="opacity-80">Size:</h2>
                    <p class="font-light text-[15px] pt-[2px]">Extra Large</p>
                    <a
                      href="#"
                      class="pt-[2px] text-[15px] font-light underline pl-[20px] hover:font-bold"
                      >Find your Size</a
                    >
                  </div>
                  <baseCheckBox
                    class="w-[70%] sm:w-full"
                    label="By clicking this box, I confirm that the prescription values entered above are taken from a unexpired written prescription issued to me, signed by a licensed optometrist or ophthalmologist."
                  />
                  <div
                    class="buttons mt-6 flex flex-col gap-2 items-center justify-center pr-10"
                  >
                    <baseButton
                      type="secondary"
                      class="bg-black text-white font-medium w-[80%] sm:w-full"
                      @click="addToCart"
                      >Add to Cart
                    </baseButton>
                    <baseButton
                      type="primary"
                      class="border-black border-2 font-medium w-[80%] sm:w-full"
                      >Select Lenses
                    </baseButton>
                  </div>
                  <div class="mt-10 mb-6 text-[24px]">
                    <h1>Vision Information</h1>
                    <div class="flex flex-col sm:flex-row sm:gap-20">
                      <baseRadioButton label="Single vision" class="mt-4" />
                      <baseRadioButton
                        label="Progressive vision"
                        class="mt-4"
                      />
                    </div>
                  </div>
                  <div class="mb-6 flex flex-col gap-1">
                    <h1 class="text-[24px]">Enter your prescription</h1>
                    <p
                      class="w-[65%] sm:w-full sm:text-[16px] text-[#818A8F] font-light"
                    >
                      Add you prescription values, we’ll show you the perfect
                      lens for your vision needs.
                    </p>
                    <h1>How to read your prescription</h1>
                    <baseCheckBox
                      label="Same prescription for both eyes"
                    ></baseCheckBox>
                    <baseTable :headers="headers" :rows="rows">
                      <template #sphere="">
                        <baseDropDown :options="options" selectClass="md:w-[50px]"></baseDropDown>
                      </template>
                      <template #cylinder="">
                        <baseDropDown :options="options"  selectClass="md:w-[50px]"></baseDropDown>
                      </template>
                    </baseTable>
                    <h1 class="mb-[10px]">
                      How to measure your pupillary distance?
                    </h1>
                    <div
                      class="w-[50%] flex gap-2 items-center mb-6 border-2 border-gray-200 justify-center"
                    >
                      <div
                        class="border-r-2 border-gray-200 w-[50%] flex items-center p-1 sm:p-2"
                      >
                        <h1 class="w-full text-[10px] md:text-[16px]">
                          PD(Pupillary Distance)
                        </h1>
                      </div>
                      <baseDropDown :options="options"></baseDropDown>
                    </div>
                    <baseCheckBox label="I have 2 PD numbers"></baseCheckBox>
                  </div>
                  <div class="chooseVision mb-6">
                    <h1 class="sm:text-2xl mb-4">Choose your vision need</h1>
                    <div>
                      <!-- Single Vision -->
                      <div
                        class="max-[340px]:w-[270px] flex gap-6 border border-black/30 p-4 mb-6 hover:border-black"
                      >
                        <div
                          class="w-[30%] sm:w-[30%] flex items-center justify-center"
                        >
                          <img
                            src="/images/products/visions/singleVision.png"
                            alt=""
                            class="max-[340px]:w-[90%] w-[70%] h-full object-contain"
                          />
                        </div>
                        <div
                          class="w-[70%] flex flex-col justify-center items-start"
                        >
                          <h1 class="text-[14px] md:text-[20px]">
                            Single Vision
                          </h1>
                          <p class="text-[10px] md:text-[16px] font-light">
                            Corrects near, intermediate or far-sightedness.
                          </p>
                        </div>
                      </div>

                      <!-- Progressive Vision -->
                      <div
                        class="max-[340px]:w-[270px] w-full flex gap-6 border border-black/30 p-4 hover:border-black"
                      >
                        <div
                          class="w-[30%] sm:w-[30%] flex items-center justify-center"
                        >
                          <img
                            src="/images/products/visions/progressiveVision.png"
                            alt=""
                            class="max-[340px]:w-[90%] w-[70%] h-full object-contain"
                          />
                        </div>
                        <div
                          class="w-[70%] flex flex-col justify-center items-start"
                        >
                          <h1 class="text-[14px] md:text-[20px]">
                            Progressive Vision
                          </h1>
                          <p class="text-[10px] md:text-[16px] font-light">
                            Corrects near, intermediate and distant fields of
                            vision in one lens, so you don’t have to switch
                            glasses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 class="text-2xl mb-4">Choose your lens color</h1>
                    <div
                      class="lensColor flex flex-wrap flex-row gap-6 justify-center items-center"
                    >
                      <div
                        class="border border-black/20 hover:border-black h-[213px] w-[167px] flex flex-col text-center gap-3 justify-center items-center"
                      >
                        <div class="w-[75px] h-[80px]">
                          <img
                            src="/public/images/products/lensColors/lensColor1.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <h1 class="text-[20px]">Grey</h1>
                          <p class="text-[16px] text-black font-light">
                            Transitions
                          </p>
                        </div>
                      </div>
                      <div
                        class="border border-black/20 hover:border-black h-[213px] w-[167px] flex flex-col text-center gap-3 justify-center items-center"
                      >
                        <div class="w-[75px] h-[80px]">
                          <img
                            src="/public/images/products/lensColors/lensColor2.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <h1 class="text-[20px]">Brown</h1>
                          <p class="text-[16px] text-black font-light">
                            Transitions
                          </p>
                        </div>
                      </div>
                      <div
                        class="border border-black/20 hover:border-black h-[213px] w-[167px] flex flex-col text-center gap-3 justify-center items-center"
                      >
                        <div class="w-[75px] h-[80px]">
                          <img
                            src="/public/images/products/lensColors/lensColor3.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <h1 class="text-[20px]">Normal</h1>
                          <p class="text-[16px] text-black font-light">
                            Transitions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full flex flex-col mt-8 mb-6">
              <div
                class="frameMeasurementsHeadings flex flex-row justify-evenly items-center w-full"
              >
                <h1 class="md:text-2xl text-lg">Frame measurements</h1>
                <div class="flex flex-col sm:flex-row gap-2">
                  <a
                    href="#"
                    class="pt-[2px] text-[10px] sm:text-[15px] font-light pl-[20px] hover:underline"
                  >
                    Not sure what's your size?
                  </a>
                  <a
                    href="#"
                    class="pt-[2px] text-[10px] sm:text-[15px] font-light pl-[20px] hover:underline"
                  >
                    Find your Size
                  </a>
                </div>
              </div>

              <div class="mb-6 frameMeasurementsTable overflow-x-scroll">
                <baseTable
                  :headers="headers2"
                  :rows="rows2"
                  customClass="w-full flex flex-col gap-2 sm:justify-between items-center"
                >
                  <template #lensWidth="{ row, customClass }">
                    <div :class="customClass">
                      <img
                        src="/public/images/products/sizes/lensWidth.png"
                        alt=""
                        class="w-[70%] sm:w-[70%] max-h-full object-contain"
                      />
                      <span
                        class="text-black/70 font-medium text-[7px] sm:text-[14px]"
                        >{{ row.lensWidth }}</span
                      >
                    </div>
                  </template>

                  <template #lensHeight="{ row, customClass }">
                    <div :class="customClass">
                      <img
                        src="/public/images/products/sizes/lensHeight.png"
                        alt=""
                        class="w-[70%] sm:w-[70%] max-h-full object-contain"
                      />
                      <span
                        class="text-black/70 font-medium text-[7px] sm:text-[14px]"
                        >{{ row.lensHeight }}</span
                      >
                    </div>
                  </template>

                  <template #bridgeWidth="{ row, customClass }">
                    <div :class="customClass">
                      <img
                        src="/public/images/products/sizes/bridgeWidth.png"
                        alt=""
                        class="w-[70%] sm:w-[70%] max-h-full object-contain"
                      />
                      <span
                        class="text-black/70 font-medium text-[7px] sm:text-[14px]"
                        >{{ row.bridgeWidth }}</span
                      >
                    </div>
                  </template>

                  <template #templeLength="{ row, customClass }">
                    <div :class="customClass">
                      <img
                        src="/public/images/products/sizes/templeLength.png"
                        alt=""
                        class="w-[70%] sm:w-[70%] max-h-full object-contain"
                      />
                      <span
                        class="text-black/70 font-medium text-[7px] sm:text-[14px]"
                        >{{ row.templeLength }}</span
                      >
                    </div>
                  </template>
                </baseTable>
              </div>
              <div class="lensSizes mb-6">
                <h1 class="text-2xl">Frame specs</h1>
                <table class="w-full border-collapse table-auto mt-4">
                  <tbody>
                    <tr
                      v-for="(row, index) in frameSpecs"
                      :key="index"
                      class="border-b border-[#E8EBED]"
                    >
                      <td
                        class="w-[167px] p-1 sm:p-4 md:p-2 lg:p-4 font-normal border-2 border-[#E8EBED] bg-[#F1F3F4] break-words align-top text-[9px] sm:text-base md:text-xs lg:text-base"
                      >
                        {{ row.key1 }}
                      </td>
                      <td
                        class="p-1 sm:p-4 md:p-2 lg:p-4 font-normal border-2 border-[#E8EBED] break-words align-top text-[9px] sm:text-base md:text-xs lg:text-base"
                      >
                        {{ row.value1 }}
                      </td>
                      <td
                        class="p-1 sm:p-4 md:p-2 lg:p-4 font-normal border-2 border-[#E8EBED] bg-[#F1F3F4] break-words align-top text-[9px] sm:text-base md:text-xs lg:text-base"
                      >
                        {{ row.key2 }}
                      </td>
                      <td
                        class="p-1 sm:p-4 md:p-2 lg:p-4 font-normal border-2 border-[#E8EBED] break-words align-top text-[9px] sm:text-base md:text-xs lg:text-base"
                      >
                        {{ row.value2 }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="right w-[50%] px-7 pt-3 hidden md:flex md:flex-col gap-4">
        <h1 class="text-4xl">{{ product.name }}</h1>
        <img
          src="/images/products/reviews.png"
          alt=""
          class="w-[150px] object-contain"
        />
        <h1 class="text-2xl mb-3">{{ product.description }}</h1>
        <div>
          <h1 class="text-2xl">Choose Frame Colors</h1>
          <div class="flex flex-wrap gap-4 mt-3 mb-6">
            <img
              v-for="(img, index) in product.image"
              :key="index"
              :src="img"
              alt=""
              class="bg-gray-100 w-[80px] h-[80px] object-cover border-2 border-gray-100 cursor-pointer hover:border-black"
              @click="changeImage(img)"
            />
          </div>
          <div class="text-[16px] mb-6">
            <p class="mb-4 text-[16px] font-light">
              Pay over time with
              <span class="font-bold"> Klarna, PayPal</span> or
              <span class="font-bold">Affirm</span>
            </p>
            <p class="flex gap-2 items-center font-light">
              <img
                src="/public/images/products/tick.png"
                class="w-3 h-3"
                alt=""
              />Prescription eligible
            </p>
            <p class="flex gap-2 items-center font-light">
              <img
                src="/public/images/products/tick.png "
                class="w-3 h-3"
                alt=""
              />Free shipping and returns
            </p>
            <p class="flex gap-2 items-center font-light">
              <img
                src="/public/images/products/tick.png"
                class="w-3 h-3"
                alt=""
              />100% money back guaranteed
            </p>
          </div>
          <div class="flex gap-2 items-center mb-7">
            <h2 class="opacity-80">Size:</h2>
            <p class="font-light text-[15px] pt-[2px]">Extra Large</p>
            <a
              href="#"
              class="pt-[2px] text-[15px] font-light underline pl-[20px] hover:font-bold"
              >Find your Size</a
            >
          </div>
          <baseCheckBox
            label="By clicking this box, I confirm that the prescription values entered above are taken from a unexpired written prescription issued to me, signed by a licensed optometrist or ophthalmologist."
          />
          <div class="buttons mt-6 flex flex-col gap-2 mb-4">
            <baseButton type="secondary" class="bg-black text-white font-medium"
            @click="addToCart"
              >Add to Cart</baseButton
            >
            <baseButton type="primary" class="border-black border-2 font-medium"
              >Select Lenses</baseButton
            >
          </div>
          <div class="chooseVision mb-6">
            <h1 class="text-2xl mb-4">Choose your vision need</h1>
            <div>
              <!-- Single Vision -->
              <div
                class="flex gap-6 border border-black/30 p-4 mb-6 hover:border-black"
              >
                <div
                  class="w-[30%] sm:w-[30%] flex items-center justify-center"
                >
                  <img
                    src="/images/products/visions/singleVision.png"
                    alt=""
                    class="w-[70%] h-full object-contain"
                  />
                </div>
                <div class="w-[70%] flex flex-col justify-center items-start">
                  <h1 class="text-[14px] md:text-[20px]">Single Vision</h1>
                  <p class="text-[10px] md:text-[16px] font-light">
                    Corrects near, intermediate or far-sightedness.
                  </p>
                </div>
              </div>

              <!-- Progressive Vision -->
              <div
                class="flex gap-6 border border-black/30 p-4 hover:border-black"
              >
                <div
                  class="w-[30%] sm:w-[30%] flex items-center justify-center"
                >
                  <img
                    src="/images/products/visions/progressiveVision.png"
                    alt=""
                    class="w-[68%] h-full object-contain"
                  />
                </div>
                <div class="w-[70%] flex flex-col justify-center items-start">
                  <h1 class="text-[14px] md:text-[20px]">Progressive Vision</h1>
                  <p class="text-[10px] md:text-[16px] font-light">
                    Corrects near, intermediate and distant fields of vision in
                    one lens, so you don’t have to switch glasses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-6 flex flex-col gap-1">
            <h1 class="text-[20px]">Enter your prescription</h1>
            <p class="text-sm sm:text-[16px] text-[#818A8F] font-light">
              Add you prescription values, we’ll show you the perfect lens for
              your vision needs.
            </p>
            <h1>How to read your prescription</h1>
            <baseCheckBox
              label="Same prescription for both eyes"
            ></baseCheckBox>
            <div class="w-full overflow-x-auto">
              <baseTable :headers="headers" :rows="rows">
                <template #sphere="">
                  <baseDropDown :options="options"></baseDropDown>
                </template>
                <template #cylinder="">
                  <baseDropDown :options="options"></baseDropDown>
                </template>
              </baseTable>
            </div>

            <h1 class="mb-[10px]">How to measure your pupillary distance?</h1>
            <div
              class="w-full flex flex-col lg:flex-row gap-2 items-center mb-6 border-2 border-gray-200 justify-center"
            >
              <!-- Left: Label -->
              <div
                class="w-full lg:w-[50%] border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 flex items-center p-2 justify-center"
              >
                <h1 class="md:text-left text-sm sm:text-base">
                  PD (Pupillary Distance)
                </h1>
              </div>

              <!-- Right: Dropdown -->
              <div
                class="w-full lg:w-[50%] flex justify-center p-2"
              >
                <baseDropDown :options="options"></baseDropDown>
              </div>
            </div>

            <baseCheckBox label="I have 2 PD numbers"></baseCheckBox>
          </div>
          
          <div>
            <h1 class="text-2xl mb-4">Choose your lens color</h1>
            <div
              class="lensColor flex flex-wrap flex-row gap-6 justify-center items-center mb-4"
            >
              <div
                class="border border-black/20 hover:border-black h-[213px] w-[167px] flex flex-col text-center gap-3 justify-center items-center"
              >
                <div class="w-[75px] h-[80px]">
                  <img
                    src="/public/images/products/lensColors/lensColor1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h1 class="text-[20px]">Grey</h1>
                  <p class="text-[16px] text-black font-light">Transitions</p>
                </div>
              </div>
              <div
                class="border border-black/20 hover:border-black h-[213px] w-[167px] flex flex-col text-center gap-3 justify-center items-center"
              >
                <div class="w-[75px] h-[80px]">
                  <img
                    src="/public/images/products/lensColors/lensColor2.png"
                    alt=""
                  />
                </div>
                <div>
                  <h1 class="text-[20px]">Brown</h1>
                  <p class="text-[16px] text-black font-light">Transitions</p>
                </div>
              </div>
              <div
                class="border border-black/20 hover:border-black h-[213px] w-[167px] flex flex-col text-center gap-3 justify-center items-center"
              >
                <div class="w-[75px] h-[80px]">
                  <img
                    src="/public/images/products/lensColors/lensColor3.png"
                    alt=""
                  />
                </div>
                <div>
                  <h1 class="text-[20px]">Normal</h1>
                  <p class="text-[16px] text-black font-light">Transitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="p-10 text-red-600">Product not found.</div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useProducts } from "~/composables/useProduct";
import { useProductSelection } from "~/composables/useProductSelection";

const route = useRoute();
const router = useRouter();
const products = useProducts();
const selectedImage = ref("");
const imageClicked = ref(false);

function changeImage(img) {
  selectedImage.value = img;
  imageClicked.value = true;
}

function addToCart() {
  router.push('/product/review')
}


const product = computed(() =>
  products.find((p) => p.name === decodeURIComponent(route.params.name))
);

const headers = ref([
  { key: "eye", label: "" },
  { key: "sphere", label: "Sphere (SPH)" },
  { key: "cylinder", label: "Cylinder (CYL)" },
  { key: "axis", label: "Axis" },
]);
const rows = ref([
  { eye: "OD (Right eye)", sphere: "0.00", cylinder: "0.00", axis: "None" },
  { eye: "OS (Left eye)", sphere: "0.00", cylinder: "0.00", axis: "None" },
]);
const options = ref([
  { value: "0.00", label: "0.00" },
  { value: "1.00", label: "1.00" },
  { value: "2.00", label: "2.00" },
  { value: "3.00", label: "3.00" },
  { value: "4.00", label: "4.00" },
]);

const expanded = ref(false);
const visibleImages = computed(() => {
  return expanded.value ? product.value.image : product.value.image.slice(0, 2);
});

const headers2 = ref([
  { key: "lensWidth", label: "Lens Width" },
  { key: "lensHeight", label: "Lens Height" },
  { key: "bridgeWidth", label: "Bridge Width" },
  { key: "templeLength", label: "Temple Length" },
]);

const rows2 = ref([
  {
    lensWidth: '59 mm/2.32"',
    lensHeight: '45 mm/1.77"',
    bridgeWidth: '18 mm/0.71"',
    templeLength: '137 mm/5.39"',
  },
]);
const frameSpecs = [
  { key1: "Size", value1: "Extra Large", key2: "Color", value2: "Matte Black" },
  { key1: "Material", value1: "Plastic", key2: "Gender", value2: "Men" },
  { key1: "Shape", value1: "Square", key2: "Type", value2: "Full-Rim" },
  {
    key1: "Spring Hinges",
    value1: "Yes",
    key2: "Lens Feature",
    value2: "Polarized",
  },
  {
    key1: "Progressive/Bifocal eligible",
    value1: "Yes",
    key2: "Gender",
    value2: "Men",
  },
];
</script>
