<script setup lang="ts">
const { $use_gsap } = useNuxtApp()
onMounted(() => {
  const glanceAnimation = $use_gsap.gsap.timeline({
    defaults: {
      duration: 2,
      stagger: 0,
    },
    scrollTrigger: {
      trigger: '.glance',
      start: '20% center',
      pin: true,
      pinSpacing: false,
      toggleActions: 'restart play restart none',
    },
  })

  // glanceAnimation.defaults({
  //   duration: 2,
  //   scrollTrigger: {
  //     trigger: '.glance',
  //     toggleActions: 'restart play restart none',
  //   },
  // })

  glanceAnimation.fromTo(
    '.glance h3, .glance h2',
    {
      x: -100,
    },
    {
      x: 0,
      transformOrigin: 'left',
      stagger: 0.3,
    },
    0
  )

  glanceAnimation.fromTo('.glance a', { x: 100 }, { x: 0 }, 0)

  glanceAnimation.fromTo(
    '.glance p',
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 14%, 0% 14%)',
    },
    {
      // duration: 3,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    0
  )

  glanceAnimation.fromTo(
    '.glance img',
    {
      clipPath: `clip-path: polygon(
        29.29% 31.55%,
        51.68% 15.55%,
        75.65% 31.84%,
        69.01% 32.23%,
        69.43% 65.59%,
        36.52% 65.88%,
        36.21% 31.53%)`,
    },
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    0
  )
})
</script>

<template>
  <section class="glance bg-gray-200 flex max-lg:flex-col w-full relative">
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
