<script setup lang="ts">
const { $use_gsap } = useNuxtApp()
onMounted(() => {
  $use_gsap.gsap.to('.banner h3,.banner p, .banner a', {
    x: 0,
    scale: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'restart none restart none',
    },
  })
})
</script>

<template>
  <section
    class="banner bg-fixed bg-cover relative overflow-hidden"
    style="background-image: url(/images/glance.jpg)"
  >
    <span class="bg-[rgba(0,0,0,0.6)] absolute w-full h-full top-0 z-0"></span>
    <div class="2xl:container mx-auto py-20 relative z-1 text-center text-white">
      <h3 class="text-5xl capitalize">
        Interested in building your dream custom home <br />
        <span class="bg-red-900 h-1 rounded-sm w-[60px] block mx-auto mt-5"> </span>
      </h3>
      <p class="capitalize my-12">Find out step-by-step what is required to build a custom home</p>
      <a
        href="#"
        class="inline-block border-2 uppercase tracking-widest px-6 py-2 border-red-600 bg-red-600 duration-500 text-white hover:text-red-600 hover:bg-transparent"
      >
        book A time With jacob
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.banner {
  h3,
  p,
  a {
    transform: scale(20) translateX(-100px);
  }
}
</style>
