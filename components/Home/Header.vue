<script setup lang="ts">
const videoWidth = ref<number>(1000) // random number
const videoAspectRidio = 1920 / 1080

const { $use_gsap } = useNuxtApp()

onMounted(() => {
  videoWidth.value = window?.innerHeight * videoAspectRidio

  const headerTimeLine = $use_gsap.gsap.timeline({
    defaults: {
      duration: 1.3,
      delay: 0.2,
    },
    scrollTrigger: {
      trigger: '.home-header',
      // start: 'top 90%',
      pin: true,
      pinSpacing: false,
      toggleActions: 'restart none restart none',
    },
  })

  headerTimeLine
    .fromTo(
      '.home-header p', //
      {
        x: -1000,
        opacity: 0,
        scale: 20,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
      }
    )
    .fromTo(
      '.home-header h1', //
      { x: 1000, opacity: 0, scale: 20 },
      { x: 0, opacity: 1, scale: 1 },
      '-=100%'
    )
})
</script>

<template>
  <header class="home-header min-w-[98vw] overflow-hidden bg-[#757575] h-[100vh] relative">
    <ClientOnly>
      <video
        autoplay
        class="home-video"
        :style="`min-width: ${videoWidth}px`"
        src="~/assets/videos/home-crismon-video.mp4"
        loop
        muted
        disablePictureInPicture
      ></video>
    </ClientOnly>
    <section
      class="flex text-white min-w-full h-full items-center justify-center text-center container mx-auto absolute z-20 top-0 right-0 left-0 bg-[rgba(0,0,0,0.6)]"
    >
      <div class="max-md:px-6 text-gray-100">
        <p class="text-2xl pb-4">Fall into Luxury</p>
        <h1 class="md:text-8xl text-6xl">
          Custom Home Builder <br />
          <span class="bg-red-900 h-1 rounded-sm w-[60px] block mx-auto mt-5"> </span>
        </h1>
        <p class="text-xl mt-5">
          Crimson Rose is a Canadian-based project management and construction services <br />
          company and is a prominent building contractor in the luxury custom-home sector
        </p>
      </div>
    </section>
  </header>
</template>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .home-video {
    transform: translateX(-50%);
  }
}
</style>
