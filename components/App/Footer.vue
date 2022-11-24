<script setup lang="ts"></script>

<template>
  <footer class="bg-primary">
    <div class="2xl:container mx-auto pt-32 2xl:px-40 px-14">
      <div class="flex flex-wrap justify-between">
        <div class="md:w-1/4 xl:max-w-md max-2xl:pr-8">
          <img
            src="~/assets/images/crimson-rose-logo.png"
            alt="crimson log"
            class="w-36 mx-auto block"
          />
          <p class="text-sm text-gray-300 text-justify mt-8">
            Crimson Rose Living is a Custom Home Builder in Oakville. Our project diversity produces a
            cooperative interaction of expertise, providing solutions and functioning design while
            offering excellent service to our clients.
          </p>
        </div>
        <div class="md:w-1/4 xl:max-w-md lg:px-8 max-2xl:pr-8">
          <h2 class="text-gray-300 text-2xl mt-8">
            Explore<br />
            <span class="bg-red-900 h-1 rounded-sm w-[60px] block mt-5"></span>
          </h2>
          <ul class="text-gray-400 mt-3 text-sm">
            <li class="my-2 duration-300 hover:text-red-600">
              <NuxtLink to="/about">about crimson rose</NuxtLink>
            </li>
            <li class="my-2 duration-300 hover:text-red-600">
              <NuxtLink to="/corporateManagement">Corporate Management</NuxtLink>
            </li>
            <li class="my-2 duration-300 hover:text-red-600">
              <NuxtLink to="/realtorInformation">Realtor Information</NuxtLink>
            </li>
            <li class="my-2 duration-300 hover:text-red-600">
              <NuxtLink to="/contactUs">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="md:w-1/4 xl:max-w-md lg:px-8 max-2xl:pr-8">
          <h2 class="text-gray-300 text-2xl mt-8">
            Projects<br />
            <span class="bg-red-900 h-1 rounded-sm w-[60px] block mt-5"></span>
          </h2>
          <ul class="text-gray-400 mt-3 text-sm">
            <li class="my-2 duration-300 hover:text-red-600">
              <NuxtLink to="/residentialProjects">residential Projects</NuxtLink>
            </li>
            <li class="my-2 duration-300 hover:text-red-600">
              <NuxtLink to="/commercialProjects">commercial Projects</NuxtLink>
            </li>
            <li class="my-2 duration-300 hover:text-red-600">
              <NuxtLink to="/process">Process in details</NuxtLink>
            </li>
            <li class="my-2 duration-300 hover:text-red-600">
              <NuxtLink to="/conceptToReality">concept To Reality</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="md:w-1/4 xl:max-w-md lg:px-8 max-2xl:pr-8">
          <h2 class="text-gray-300 text-2xl mt-8">
            Explore<br />
            <span class="bg-red-900 h-1 rounded-sm w-[60px] block mt-5"></span>
          </h2>
          <ul class="text-gray-400 mt-3 text-sm">
            <li class="my-2 duration-300 hover:text-red-600">
              <a href="tel:+2000000000">Tel: +2000000000</a>
            </li>
            <li class="my-2 duration-300 hover:text-red-600">
              <a href="tel:+2111111111">TF: +2111111111</a>
            </li>
            <li class="my-4 duration-300 hover:text-red-600">
              <a
                href="https://www.google.com/maps/place/Crimson+Rose+Homes/@43.4450499,-79.6912374,15z/data=!4m5!3m4!1s0x0:0x3cb0cd3d1cb04b71!8m2!3d43.4450499!4d-79.6912374"
                target="_blank"
                rel="noopener noreferrer"
              >
                217 Speers Road, Unit 4 <br />
                Oakville, ON L6K 0J3
              </a>
            </li>
            <li class="my-2 duration-300 hover:text-red-600">
              <a href="mailto:info@crlpm.com">info@crlpm.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap text-gray-300 pb-6 pt-4 border-t-gray-600 border-t max-sm:text-center">
        <p>&copy; {{ new Date().getFullYear() }} Crimson Rose Living. All rights reserved</p>
        <ul class="social-links list-none uppercase flex justify-between ml-auto">
          <li class="px-2 duration-300 hover:text-red-600">
            <a href="#"><Icon name="fa:twitter" size="18" /></a>
          </li>
          <li class="px-2 duration-300 hover:text-red-600">
            <a href="#"><Icon name="fa:instagram" size="18" /></a>
          </li>
          <li class="px-2 duration-300 hover:text-red-600">
            <a href="#"><Icon name="fa:facebook-official" size="18" /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
