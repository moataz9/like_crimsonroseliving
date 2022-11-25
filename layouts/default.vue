<script setup lang="ts">
const isLoaded = ref(false)
onMounted(() => {
  isLoaded.value = true
})
</script>

<template>
  <div>
    <div v-show="!isLoaded" style="position: fixed; inset: 0; background: #757575; z-index: 200"></div>
    <AppNavBar />
    <slot />
    <AppContact />
    <AppFooter />
  </div>
</template>
