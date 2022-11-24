<script setup lang="ts">
const send = () => {}
</script>

<template>
  <section class="bg-gray-200 -mt-48">
    <div class="2xl:container mx-auto py-36 2xl:px-40 max-2xl:px-14">
      <div class="flex flex-wrap justify-between">
        <div class="w-full lg:max-w-[50%] lg:pr-8">
          <h2 class="text-3xl capitalize">Get In touch</h2>
          <p class="mt-6 text-justify text-gray-500">
            We want to hear from you! As part of a dedicated and reliable team, we are always available
            to answer any of your questions. Kindly leave a message using the contact form to reach out
            to us for more information and consultation. You may also contact us via our telephone number
            at 1-905-208-1000 or send an email.
          </p>
          <form @submit.prevent="send" class="mt-14">
            <div class="my-4">
              <input
                type="text"
                placeholder="Full Name"
                class="bg-white p-2 w-full outline-none duration-300 focus:outline-red-500"
              />
            </div>
            <div class="my-4 flex justify-between">
              <input
                type="text"
                placeholder="Name"
                class="bg-white p-2 w-[48%] outline-none duration-300 focus:outline-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                class="bg-white p-2 w-[48%] outline-none duration-300 focus:outline-red-500"
              />
            </div>
            <div class="my-4">
              <textarea
                name=""
                rows="5"
                placeholder="Your Message"
                class="max-w-full min-w-full min-h-full p-2 outline-none duration-300 focus:outline-red-500"
              ></textarea>
            </div>
            <button
              href="#"
              class="mt-6 border-2 uppercase tracking-widest px-6 py-2 border-red-600 bg-red-600 duration-500 text-white hover:text-red-600 hover:bg-transparent"
            >
              submit
            </button>
          </form>
        </div>
        <div class="w-full lg:max-w-[50%] max-lg:mt-14">
          <div class="flex flex-col shadow-lg">
            <iframe
              class="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11587.652184001267!2d-79.690864!3d43.441532!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1669320001144!5m2!1sen!2sus"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="bg-white p-8">
              <h5 class="text-center text-2xl text-gray-500">217 Speers Road, Unit 4O <br />akville, Ontario L6K 0J3</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
