<script setup lang="ts">
const { $use_gsap } = useNuxtApp()
onMounted(() => {
  $use_gsap.gsap.to('.blog-card', {
    y: 0,
    duration: 2,
    stagger: 0.3,
    transformOrigin: 'left',
    scrollTrigger: {
      trigger: '.blog',
      toggleActions: 'restart pause restart none',
    },
  })
})
</script>

<template>
  <div class="blog bg-gray-200 mt-48">
    <section class="2xl:container mx-auto my-36 xl:px-32 px-3">
      <div class="flex flex-wrap justify-between max-xl:justify-center">
        <BlogCard class="blog-card" v-for="item in 3" :key="item"></BlogCard>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.blog-card {
  @apply translate-y-96
}
</style>
