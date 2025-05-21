<template>
  <div class="relative overflow-hidden">
    <div
      :class="[
        'left-[20px] right-[20px] w-[97%] z-50 transition-all duration-300',
        isSticky ? 'fixed top-0' : 'absolute top-[20px]'
      ]"
      ref="navbar"
    >
      <baseNavbar />
    </div>

    <slot />

    <baseFooter />
  </div>
</template>

<script setup>

const isSticky = ref(false)

const handleScroll = () => {
  isSticky.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>
