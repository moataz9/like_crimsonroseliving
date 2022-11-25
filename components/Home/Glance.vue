<script setup lang="ts">
const { $use_gsap } = useNuxtApp()
onMounted(() => {
  $use_gsap.gsap.to('.glance h3, .glance h2', {
    x: 0,
    duration: 2,
    transformOrigin: 'left',
    scrollTrigger: {
      trigger: '.glance',
      toggleActions: 'restart pause restart none',
    },
  })
  $use_gsap.gsap.to('.glance p, .glance a', {
    x: 0,
    duration: 2,
    transformOrigin: 'right',
    scrollTrigger: {
      trigger: '.glance',
      toggleActions: 'restart pause restart none',
    },
  })
  $use_gsap.gsap.to('img', {
    scale: 1,
    duration: 2,
    ease: 'power1.in',
    scrollTrigger: {
      trigger: '.glance',
      toggleActions: 'restart pause restart none',
    },
  })
})
</script>

<template>
  <section class="glance bg-gray-200 flex max-lg:flex-col w-full">
    <div class="lg:w-1/2 xl:p-40 p-14">
      <h3 class="text-sm text-red-600 uppercase">Crimson Rose at a Glance</h3>
      <h2 class="text-3xl my-6">Custom Home Builder Oakville</h2>
      <p class="capitalize text-gray-500">
        Crimson Rose Living is located in the Halton Region of Ontario, Canada. Our project diversity
        produces a cooperative interaction of expertise, providing solutions and functioning design while
        offering excellent service to our clients. As a professional building contractor, construction
        supervisors and design-builders, we fully engage in any project given to us and deliver within a
        specified period of time. We are a company endowed with both skilled labourers and dedicated
        project managers. Moreover, the ideal contractor has a consistent background of coming through
        for both first-time and repeat clients, no matter the size of the project or its challenges. If
        you’re searching for a building contractor with an excellent reputation and one that is ready to
        solve your problems, consider hiring us today.
      </p>
      <a
        href="#"
        class="inline-block border-2 uppercase tracking-widest px-6 py-2 mt-12 text-red-600 border-red-600 hover:text-white hover:bg-red-600 duration-500"
      >
        book A time With jacob
      </a>
    </div>
    <div class="lg:w-1/2 self-stretch overflow-hidden">
      <img src="~/assets/images/glance.jpg" alt="glance" class="h-full" />
    </div>
  </section>
</template>

<style lang="scss">
.glance {
  h3,
  h2 {
    @apply -translate-x-full;
  }
  p,
  a {
    @apply translate-x-full;
  }
  img {
    transform: scale(20);
  }
}
</style>
