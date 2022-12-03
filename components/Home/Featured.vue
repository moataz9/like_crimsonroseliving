<script setup lang="ts">
const { $use_gsap } = useNuxtApp()
onMounted(() => {
  const featuedAnimation = $use_gsap.gsap

  featuedAnimation.defaults({
    duration: 2,
    scrollTrigger: {
      trigger: '.featured',
      toggleActions: 'restart pause restart none',
    },
  })

  featuedAnimation.fromTo(
    '.featured h2',
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
    }
  )

  featuedAnimation.fromTo(
    '.featured .featured-desc',
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 14%, 0% 14%)',
    },
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      stagger: 0.5,
    }
  )

  featuedAnimation.fromTo(
    '.featured .featured-card',
    {
      scale: 0.3,
    },
    {
      scale: 1,
      rotate: 360,
      stagger: 0.1,
    }
  )
})
</script>

<template>
  <section class="featured py-36 bg-white relative">
    <div class="2xl:container mx-auto">
      <h2 class="text-3xl capitalize text-center">
        featued projects <br />
        <span class="bg-red-900 h-1 rounded-sm w-[60px] block mx-auto mt-3"></span>
      </h2>
      <div class="capitalize text-gray-500 xl:px-96 px-14 text-justify">
        <p class="featured-desc mt-6">
          For our clients, we do our utmost to create a strong sense of belonging to each space. The
          minute you step into the space, you feel this sense and are surrounded by an environment of
          convenience and luxury. It is that feeling that drives our designs and creations. Our design
          philosophy is centred around three key pillars: Communication, Function and Aesthetics. Through
          open communication, the custom home design process can be seamless and extremely enjoyable.
        </p>
        <p class="featured-desc mt-6">
          We understand the difficulties that come with building in some communities of Canada and it is
          part of our mission to guarantee that the construction experience for our clients is
          satisfactory and stress-free.
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
</style>
