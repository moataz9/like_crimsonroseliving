<script setup lang="ts">
const videoWidth = ref<number>(1000) // random number
const videoAspectRidio = 1920 / 1080
onMounted(() => {
  videoWidth.value = window?.innerHeight * videoAspectRidio
})
</script>

<template>
  <header class="min-w-[98vw] overflow-x-hidden bg-[#757575] h-[100vh]">
    <ClientOnly>
      <!-- autoplay -->
      <!-- <video
        class="home-video"
        :style="`min-width: ${videoWidth}px`"
        src="~/assets/videos/home-crismon-video.mp4"
        loop
        muted
        disablePictureInPicture
      ></video> -->
    </ClientOnly>
    <section
      class="flex text-white w-full h-full items-center justify-center text-center container mx-auto"
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
