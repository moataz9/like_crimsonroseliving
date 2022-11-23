<script setup lang="ts">
const isMobile = ref(false)
const isMobileDropdownOpened = ref(false)
onMounted(() => {
  if (window.innerWidth < 1024) {
    isMobile.value = true
  }
})
if (process.client) {
  window.onresize = () => {
    if (window.innerWidth > 1024) isMobile.value = false
    else isMobile.value = true
  }
}
</script>

<template>
  <nav class="bg-primary text-white">
    <div class="lg:container mx-auto 2xl:px-48 md:px-4 flex items-center">
      <template v-if="!isMobile">
        <div class="logo w-44 max-lg:py-4">
          <NuxtLink to="/" class="h-full">
            <img src="~/assets/images/crimson-rose-logo.png" alt="crimsonLogo" class="w-full" />
          </NuxtLink>
        </div>
        <ul class="links list-none uppercase flex w-full justify-center text-gray-300">
          <li class="py-12 px-5"><NuxtLink to="/">home</NuxtLink></li>
          <li class="py-12 px-5 has-dropdown">
            <span>Projects</span>
            <Icon name="fa:chevron-down" class="-mt-1 pl-1 text-gray-300" />
            <ul class="dropdown">
              <li><NuxtLink to="/residentialProjects">residential Projects</NuxtLink></li>
              <li><NuxtLink to="/commercialProjects">commercial Projects</NuxtLink></li>
              <li><NuxtLink to="/conceptToReality">concept To Reality</NuxtLink></li>
            </ul>
          </li>
          <li class="py-12 px-5 has-dropdown">
            <span>company</span>
            <Icon name="fa:chevron-down" class="-mt-1 pl-1 text-gray-300" />
            <ul class="dropdown">
              <li><NuxtLink to="/about">about crimson rose</NuxtLink></li>
              <li><NuxtLink to="/corporateManagement">Corporate Management</NuxtLink></li>
              <li><NuxtLink to="/realtorInformation">Realtor Information</NuxtLink></li>
              <li><NuxtLink to="/blog">blog</NuxtLink></li>
            </ul>
          </li>
          <li class="py-12 px-5 has-dropdown">
            <span>get inspired</span>
            <Icon name="fa:chevron-down" class="-mt-1 pl-1 text-gray-300" />
            <ul class="dropdown">
              <li><NuxtLink to="/traditional">traditional</NuxtLink></li>
              <li><NuxtLink to="/transitional">transitional</NuxtLink></li>
              <li><NuxtLink to="/modernFarmhouse">modern Farmhouse</NuxtLink></li>
              <li><NuxtLink to="/midCenturyModern">mid Century Modern</NuxtLink></li>
              <li><NuxtLink to="/modern">modern</NuxtLink></li>
            </ul>
          </li>
          <li class="py-12 px-5">
            <NuxtLink to="/process">Process</NuxtLink>
          </li>
          <li class="py-12 px-5">
            <NuxtLink to="/contactUs">Contact us</NuxtLink>
          </li>
        </ul>
        <ul class="social-links list-none uppercase flex justify-between w-1/12 ml-auto">
          <li class="px-2">
            <a href="#"><Icon name="fa:twitter" size="18" /></a>
          </li>
          <li class="px-2">
            <a href="#"><Icon name="fa:instagram" size="18" /></a>
          </li>
          <li class="px-2">
            <a href="#"><Icon name="fa:facebook-official" size="18" /></a>
          </li>
        </ul>
      </template>
      <div v-if="isMobile" class="w-full px-4">
        <div class="logo py-4 flex justify-between items-center">
          <NuxtLink to="/" class="h-full w-44">
            <img src="~/assets/images/crimson-rose-logo.png" alt="crimsonLogo" class="w-full" />
          </NuxtLink>
          <button
            class="bg-transparent border-none outline-none"
            @click="isMobileDropdownOpened = !isMobileDropdownOpened"
          >
            <Icon v-if="isMobileDropdownOpened" name="fa:close" size="30" class="text-gray-300" />
            <Icon v-else name="fa:bars" size="30" class="text-gray-300" />
          </button>
        </div>
        <transition name="scale">
          <ul v-if="isMobileDropdownOpened" class="links list-none uppercase">
            <li class="py-4"><NuxtLink to="/">home</NuxtLink></li>
            <li class="py-4 has-dropdown">
              <div class="flex justify-between">
                <span>Projects</span>
                <Icon name="fa:chevron-down" class="-mt-1 pl-1 text-gray-300" />
              </div>
              <ul class="mobile-dropdown">
                <li><NuxtLink to="/residentialProjects">residential Projects</NuxtLink></li>
                <li><NuxtLink to="/commercialProjects">commercial Projects</NuxtLink></li>
                <li><NuxtLink to="/conceptToReality">concept To Reality</NuxtLink></li>
              </ul>
            </li>
            <li class="py-4 has-dropdown">
              <div class="flex justify-between">
                <span>company</span>
                <Icon name="fa:chevron-down" class="-mt-1 pl-1 text-gray-300" />
              </div>
              <ul class="mobile-dropdown">
                <li><NuxtLink to="/about">about crimson rose</NuxtLink></li>
                <li><NuxtLink to="/corporateManagement">Corporate Management</NuxtLink></li>
                <li><NuxtLink to="/realtorInformation">Realtor Information</NuxtLink></li>
                <li><NuxtLink to="/blog">blog</NuxtLink></li>
              </ul>
            </li>
            <li class="py-4 has-dropdown">
              <div class="flex justify-between">
                <span>get inspired</span>
                <Icon name="fa:chevron-down" class="-mt-1 pl-1 text-gray-300" />
              </div>
              <ul class="mobile-dropdown">
                <li><NuxtLink to="/traditional">traditional</NuxtLink></li>
                <li><NuxtLink to="/transitional">transitional</NuxtLink></li>
                <li><NuxtLink to="/modernFarmhouse">modern Farmhouse</NuxtLink></li>
                <li><NuxtLink to="/midCenturyModern">mid Century Modern</NuxtLink></li>
                <li><NuxtLink to="/modern">modern</NuxtLink></li>
              </ul>
            </li>
            <li class="py-4">
              <NuxtLink to="/process">Process</NuxtLink>
            </li>
            <li class="py-4">
              <NuxtLink to="/contactUs">Contact us</NuxtLink>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@media screen and (min-width: 1024px) {
  .has-dropdown {
    @apply cursor-pointer relative;
    .dropdown {
      @apply list-none border border-primary absolute bg-primary top-[101%] py-4 scale-0 transition-transform origin-top-left duration-500 min-w-[250px] z-10;
      li a {
        @apply hover:bg-slate-600 px-4 py-2 duration-300 block text-ellipsis;
      }
    }
    &:hover {
      .dropdown {
        @apply scale-100;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .has-dropdown {
    @apply cursor-pointer;
    .mobile-dropdown {
      @apply pt-3 pl-3;
      li {
        @apply my-2;
        a {
          @apply py-2;
        }
      }
    }
  }
}
</style>
