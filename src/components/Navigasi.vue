<template>
  <!-- header -->
  <div id="header" class="h-14 shadow-md sm:px-16 px-4 py-2 bg-white flex items-center">
    <router-link class="h-full" to="/" id="logo"
      ><img class="invert h-full" src="../assets/logomaikubu.png" alt=""
    /></router-link>
    <div class="ml-auto gap-4 flex text-base">
      <span
        ><router-link
          to="/about"
          class="relative font-black before:absolute before:border-b-2 before:border-solid before:-bottom-1 before:w-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:border-black"
          >About</router-link
        ></span
      >
      <span
        ><router-link
          to="/workshop"
          class="relative font-black before:absolute before:border-b-2 before:border-solid before:-bottom-1 before:w-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:border-black"
          >Workshop</router-link
        ></span
      >
      <span
        ><router-link
          to="/contact"
          class="relative font-black before:absolute before:border-b-2 before:border-solid before:-bottom-1 before:w-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:border-black"
          >Contact Us</router-link
        ></span
      >
    </div>
  </div>
</template>
