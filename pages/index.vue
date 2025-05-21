<template>
  <div class="overflow-x-hidden">
    <div class="relative overflow-x-hidden">
      <div class="w-full h-[500px] md:h-full relative">
        <img
          src="/images/heroImage2.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
          <div
            class="w-[300px] flex-col absolute top-[40%] left-[8%] text-center text-white md:w-[669px] md:left-[5%] md:translate-x-0 md:translate-y-0 md:top-[40%]"
          >
            <h1
              class="text-2xl md:text-5xl lg:text-6xl text-black font-700 mb-4 text-left md:text-left w-auto"
            >
              Changing the game with Meta AI
            </h1>
            <div class="text-sm flex flex-col w-[300px] justify-start items-left gap-4 md:flex-row md:gap-4">
              <NuxtLink to="/sunGlasses">
                <baseButton type="primary" class="w-[300px] md:w-auto"
                  >Shop the Collection</baseButton
                >
              </NuxtLink>
              <baseButton class="bg-white sm:bg-transparent" type="secondary" @click="discoverMore"
                >Discover More</baseButton
              >
            </div>
          </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row">
      <baseHeroCard
        title="Men"
        imgSrc="/images/HeroCards/heroCard1.png"
        position="object-[75%_center]"
      />
      <baseHeroCard title="Women" imgSrc="/images/HeroCards/heroCard2.png" />
      <baseHeroCard
        title="Kids"
        imgSrc="/images/HeroCards/heroCard3.png"
        position="object-[30%_center]"
      />
    </div>
    <div class="relative">
      <img
        src="/images/heroImage3.png"
        alt=""
        class="w-full h-[700px] object-cover object-[80%_center]"
      />
      <div
        class="absolute top-[20%] left-[8%] md:left-[5%] md:translate-x-0 w-full px-4 md:w-auto"
      >
        <div class="min-[400px]:flex flex-row gap-5 sm:w-[100%] hidden">
          <div
            class="bg-[#D9D9D9] rounded-full w-[100px] h-[100px] gap-4"
          ></div>
          <div
            class="bg-[#D9D9D9] rounded-full w-[100px] h-[100px] gap-4"
          ></div>
          <div
            class="bg-[#D9D9D9] rounded-full w-[100px] h-[100px] gap-4"
          ></div>
        </div>
        <div class="absolute top-[116px] text-center text-white w-[300px] md:w-[669px] sm:w-[500px]">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-700 text-left mb-2"
          >
            Prescription Clear
          </h1>
          <p class="text-[20px] text-left mb-5 md:max-w-[669px]">
            Classic clear lenses are perfect for those looking for uncompromised
            style and first-class clarity.
          </p>
          <div class="flex flex-row gap-4">
            <baseButton type="primary">Shop Now </baseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
function shopTheCollection() {
  alert("Shop the Collection button clicked!");
}
function discoverMore() {
  alert("Discover More button clicked!");
}
</script>
