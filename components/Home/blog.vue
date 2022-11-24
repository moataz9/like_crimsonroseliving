<script setup lang="ts"></script>

<template>
  <div class="bg-gray-200 mt-48">
    <section class="2xl:container mx-auto my-36 xl:px-32 px-3">
      <div class="flex flex-wrap justify-between max-xl:justify-center">
        <BlogCard v-for="item in 3" :key="item"></BlogCard>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
