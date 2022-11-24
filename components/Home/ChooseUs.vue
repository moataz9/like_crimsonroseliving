<script setup lang="ts"></script>

<template>
  <section class="2xl:container mx-auto my-36">
    <h2 class="text-3xl capitalize text-center">
      Why Choose Us <br />
      <span class="bg-red-900 h-1 rounded-sm w-[60px] block mx-auto mt-3"></span>
    </h2>
    <div class="capitalize text-gray-500 xl:px-96 px-14 text-justify">
      <p class="mt-6">
        With a team of highly skilled employees and management whose focus is laser-sharp on their work,
        we provide clients with convenience and confidence throughout the life of the project and for
        many years to follow.
      </p>
    </div>
    <div class="flex flex-wrap justify-between max-md:justify-center my-12 xl:px-32 px-8">
      <div class="max-w-[50%] lg:max-w-xs flex flex-col items-center px-8 mt-8">
        <span class="inline-block p-8 border-2 border-red-600 rounded-full icon-hover">
          <Icon name="fa:handshake-o" size="80" class="text-red-600" />
        </span>
        <h4 class="text-2xl text-center my-5">Cooperation</h4>
        <p class="text-justify text-gray-500">
          We afford the opportunity and uplifting support to assist our people in reaching their set
          goals. We seek advice from our clients as a team. Mutual trust secures the groundwork for our
          achievements.
        </p>
      </div>
      <div class="max-w-[50%] lg:max-w-xs flex flex-col items-center px-8 mt-8">
        <span class="inline-block p-8 border-2 border-red-600 rounded-full icon-hover">
          <Icon name="fa:check-square-o" size="80" class="text-red-600" />
        </span>
        <h4 class="text-2xl text-center my-5">Strength</h4>
        <p class="text-justify text-gray-500">
          We continually exercise high standards of service, top quality and personalized interest in
          clients, and maintain reliability. As a result of this credibility, we have had the opportunity
          to work on several exclusive projects.
        </p>
      </div>
      <div class="max-w-[50%] lg:max-w-xs flex flex-col items-center px-8 mt-8">
        <span class="inline-block p-8 border-2 border-red-600 rounded-full icon-hover">
          <Icon name="fa:cogs" size="80" class="text-red-600" />
        </span>
        <h4 class="text-2xl text-center my-5">Perseverance</h4>
        <p class="text-justify text-gray-500">
          We help our clients realize their goals. We take into account that enduring relationships are
          the backbone of our business and as a result, we pay close attention to our customers’ needs to
          deliver the best service possible.
        </p>
      </div>
      <div class="max-w-[50%] lg:max-w-xs flex flex-col items-center px-8 mt-8">
        <span class="inline-block p-8 border-2 border-red-600 rounded-full icon-hover">
          <Icon name="fa:home" size="80" class="text-red-600" />
        </span>
        <h4 class="text-2xl text-center my-5">What We Do</h4>
        <p class="text-justify text-gray-500">
          Our people bring their uniquely specialized expertise, creativity, and knowledge to the
          execution of our projects. Crimson Rose Living focuses on completing valuable projects for a
          variety of clients.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.icon-hover {
  @apply duration-500;
  &:hover {
    @apply bg-red-600;
    .icon {
      @apply text-white;
    }
  }
}
</style>
