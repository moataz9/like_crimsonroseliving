<script setup lang="ts">
const { $use_gsap } = useNuxtApp()
onMounted(() => {
  $use_gsap.gsap.to('.featured h2', {
    y: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      start: 'top -150',
      toggleActions: 'restart pause restart none',
    },
  })
  $use_gsap.gsap.to('.featured .desc, .featured-card', {
    duration: 2,
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    stagger: 0.5,
    scrollTrigger: {
      start: 'top -150',
      toggleActions: 'restart pause restart none',
    },
  })
})
</script>

<template>
  <section class="featured 2xl:container mx-auto my-36">
    <h2 class="text-3xl capitalize text-center">
      featued projects <br />
      <span class="bg-red-900 h-1 rounded-sm w-[60px] block mx-auto mt-3"></span>
    </h2>
    <div class="desc capitalize text-gray-500 xl:px-96 px-14 text-justify">
      <p class="mt-6">
        For our clients, we do our utmost to create a strong sense of belonging to each space. The minute
        you step into the space, you feel this sense and are surrounded by an environment of convenience
        and luxury. It is that feeling that drives our designs and creations. Our design philosophy is
        centred around three key pillars: Communication, Function and Aesthetics. Through open
        communication, the custom home design process can be seamless and extremely enjoyable.
      </p>
      <p class="mt-6">
        We understand the difficulties that come with building in some communities of Canada and it is
        part of our mission to guarantee that the construction experience for our clients is satisfactory
        and stress-free.
      </p>
    </div>

    <div class="mt-36 md:flex xl:px-64 px-3">
      <div class="featured-card m-2 md:w-1/3 has-hover">
        <img
          src="~/assets/images/featured-1.jpg"
          alt="featured-1"
          class="w-full h-full shadow-lg shadow-gray-500"
        />
        <span class="hover-me">
          <NuxtLink :to="{ name: 'portfolio-id', params: { id: 'featured-1' } }">Featured 1</NuxtLink>
        </span>
      </div>
      <div class="featured-card m-2 md:w-1/3 has-hover">
        <img
          src="~/assets/images/featured-2.jpg"
          alt="featured-2"
          class="w-full h-full shadow-lg shadow-gray-500"
        />
        <span class="hover-me">
          <NuxtLink :to="{ name: 'portfolio-id', params: { id: 'featured-2' } }">Featured 2</NuxtLink>
        </span>
      </div>
      <div class="featured-card m-2 md:w-1/3 has-hover">
        <img
          src="~/assets/images/featured-3.jpg"
          alt="featured-3"
          class="w-full h-full shadow-lg shadow-gray-500"
        />
        <span class="hover-me">
          <NuxtLink :to="{ name: 'portfolio-id', params: { id: 'featured-3' } }">Featured 3</NuxtLink>
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.has-hover {
  @apply relative;
  .hover-me {
    @apply scale-0 duration-500 w-full h-full absolute top-0 capitalize flex justify-center items-center text-white text-lg;
  }
  &:hover {
    .hover-me {
      background: rgba(0, 0, 0, 0.6);
      @apply scale-100;
    }
  }
}
.featured {
  h2 {
    transform: translateY(-100px);
    opacity: 0;
  }
  .desc,
  &-card {
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  }
}
</style>
