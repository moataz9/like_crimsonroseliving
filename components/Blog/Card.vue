<script setup lang="ts"></script>

<template>
  <div class="flex flex-col shadow-lg m-4 max-w-sm relative z-10 -top-32 bg-white">
    <div class="h-80 overflow-hidden has-hover">
      <img src="~/assets/images/glance.jpg" alt="" class="w-full h-full" />
      <span class="hover-me"></span>
    </div>
    <div class="p-6">
      <h6 class="uppercase text-sm">Jan 12, 2021</h6>
      <h4 class="mt-4">How Do I Build a Custom Home checkList</h4>
      <p class="text-sm text-gray-600 mt-4">
        When thinking about your dream home, chances are you are envisioning a custom-built house, that…
      </p>
      <p class="flex items-center py-4">
        <img src="~/assets/images/featured-1.jpg" alt="" class="w-8 h-8 mr-2 rounded-full" />
        <span>By person</span>
      </p>
      <p class="border-t-2 pt-4">
        <NuxtLink :to="{ name: 'blog-id', params: { id: 'blog-1' } }" class="uppercase">
          Read more
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.has-hover {
  @apply relative;
  .hover-me {
    @apply scale-0 w-full h-full duration-500 absolute top-0 capitalize flex justify-center items-center text-white text-lg;
  }
  &:hover {
    .hover-me {
      background: rgba(0, 0, 0, 0.6);
      @apply scale-100;
    }
    img {
      transform: scale(1.2);
      transition: transform 0.5s ease;
    }
  }
}
</style>
