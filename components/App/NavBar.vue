<script setup lang="ts">
const isMobile = ref(false)
const isMobileDropdownOpened = ref(false)

const { $use_gsap } = useNuxtApp()
const navbar = ref<HTMLElement>()

const showProjectsList = ref(false)
const showCompanyList = ref(false)
const showInspiredList = ref(false)

onMounted(() => {
  if (window.innerWidth < 1024) {
    isMobile.value = true
  }

  window.onresize = () => {
    if (window.innerWidth > 1024) isMobile.value = false
    else isMobile.value = true
  }

  $use_gsap.gsap.to(navbar.value!, { y: 0, ease: 'bounce.out' })

  $use_gsap.scrollTrigger.create({
    start: `top ${isMobile.value ? '-150' : '-350'}`,
    end: document.body.scrollHeight + 300,
    toggleClass: { className: 'bg-primary', targets: navbar.value! },
    onToggle: () => (isMobileDropdownOpened.value = false),
  })
})

const toggleMobileDropDown = () => {
  isMobileDropdownOpened.value = !isMobileDropdownOpened.value
  if (!navbar.value?.classList.contains('bg-primary')) {
    navbar.value?.classList.add('bg-primary')
  }
}

const onMobDropdownEnter = (el: HTMLElement) => {
  console.log('enter')
  $use_gsap.gsap.fromTo(
    el, //
    { scaleY: 0 },
    { scaleY: 1, duration: 0.5, transformOrigin: 'top' }
  )
}

const onMobDropdownLeave = (el: HTMLElement) => {
  console.log('leave')
  $use_gsap.gsap.to(el, { scaleY: 0, height: 0, duration: 0.5, transformOrigin: 'top' })
}

const toggleNestedDropdowm = (target: string) => {
  switch (target) {
    case 'projects':
      showProjectsList.value = !showProjectsList.value
      showCompanyList.value = false
      showInspiredList.value = false
      break
    case 'compnay':
      showCompanyList.value = !showCompanyList.value
      showProjectsList.value = false
      showInspiredList.value = false
      break
    case 'inspired':
      showInspiredList.value = !showInspiredList.value
      showProjectsList.value = false
      showCompanyList.value = false
      break
  }
}
</script>

<template>
  <nav ref="navbar" class="text-gray-300 fixed z-30 w-full -translate-y-full duration-300">
    <div class="2xl:container mx-auto 2xl:px-48 md:px-14 flex items-center">
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
        <ul class="social-links list-none uppercase flex justify-between ml-auto">
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
      <div v-if="isMobile" class="w-full max-w-screen-lg px-6">
        <div class="logo py-4 flex justify-between items-center">
          <NuxtLink to="/" class="h-full w-44">
            <img src="~/assets/images/crimson-rose-logo.png" alt="crimsonLogo" class="w-full" />
          </NuxtLink>
          <button @click="toggleMobileDropDown" class="bg-transparent border-none outline-none">
            <Icon v-if="isMobileDropdownOpened" name="fa:close" size="30" class="text-gray-300" />
            <Icon v-else name="fa:bars" size="30" class="text-gray-300" />
          </button>
        </div>
        <transition
          leaveActiveClass="duration-500"
          @enter="onMobDropdownEnter"
          @beforeLeave="onMobDropdownLeave"
        >
          <ul v-if="isMobileDropdownOpened" class="links list-none uppercase">
            <li class="py-4"><NuxtLink to="/">home</NuxtLink></li>
            <li class="has-dropdown">
              <div class="py-4 flex justify-between" @click="toggleNestedDropdowm('projects')">
                <span>Projects</span>
                <Icon
                  v-show="showProjectsList"
                  name="fa:chevron-down"
                  class="-mt-1 pl-1 text-gray-300"
                />
                <Icon v-show="!showProjectsList" name="fa:chevron-up" class="-mt-1 pl-1 text-gray-300" />
              </div>
              <transition
                leaveActiveClass="duration-400"
                @enter="onMobDropdownEnter"
                @beforeLeave="onMobDropdownLeave"
              >
                <ul class="mobile-dropdown" v-if="showProjectsList">
                  <li><NuxtLink to="/residentialProjects">residential Projects</NuxtLink></li>
                  <li><NuxtLink to="/commercialProjects">commercial Projects</NuxtLink></li>
                  <li><NuxtLink to="/conceptToReality">concept To Reality</NuxtLink></li>
                </ul>
              </transition>
            </li>
            <li class="has-dropdown">
              <div class="py-4 flex justify-between" @click="toggleNestedDropdowm('compnay')">
                <span>company</span>
                <Icon v-show="showCompanyList" name="fa:chevron-down" class="-mt-1 pl-1 text-gray-300" />
                <Icon v-show="!showCompanyList" name="fa:chevron-up" class="-mt-1 pl-1 text-gray-300" />
              </div>
              <transition
                leaveActiveClass="duration-400"
                @enter="onMobDropdownEnter"
                @beforeLeave="onMobDropdownLeave"
              >
                <ul class="mobile-dropdown" v-if="showCompanyList">
                  <li><NuxtLink to="/about">about crimson rose</NuxtLink></li>
                  <li><NuxtLink to="/corporateManagement">Corporate Management</NuxtLink></li>
                  <li><NuxtLink to="/realtorInformation">Realtor Information</NuxtLink></li>
                  <li><NuxtLink to="/blog">blog</NuxtLink></li>
                </ul>
              </transition>
            </li>
            <li class="has-dropdown">
              <div class="py-4 flex justify-between" @click="toggleNestedDropdowm('inspired')">
                <span>get inspired</span>
                <Icon
                  v-show="showInspiredList"
                  name="fa:chevron-down"
                  class="-mt-1 pl-1 text-gray-300"
                />
                <Icon v-show="!showInspiredList" name="fa:chevron-up" class="-mt-1 pl-1 text-gray-300" />
              </div>
              <transition
                leaveActiveClass="duration-400"
                @enter="onMobDropdownEnter"
                @beforeLeave="onMobDropdownLeave"
              >
                <ul class="mobile-dropdown" v-if="showInspiredList">
                  <li><NuxtLink to="/traditional">traditional</NuxtLink></li>
                  <li><NuxtLink to="/transitional">transitional</NuxtLink></li>
                  <li><NuxtLink to="/modernFarmhouse">modern Farmhouse</NuxtLink></li>
                  <li><NuxtLink to="/midCenturyModern">mid Century Modern</NuxtLink></li>
                  <li><NuxtLink to="/modern">modern</NuxtLink></li>
                </ul>
              </transition>
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
      @apply pl-3;
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
