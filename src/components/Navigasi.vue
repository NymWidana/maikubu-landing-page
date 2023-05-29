<template>
        <!-- header -->
    <div class="h-14 shadow-md px-16 py-2 bg-white flex items-center">
      <a class="h-full" href="#" id="logo"
        ><img class="invert h-full" src="../assets/logomaikubu.png" alt=""
      /></a>
      <div class="ml-auto gap-4 flex">
        <span
          ><router-link
            to="/about"
            class="relative font-black before:absolute before:border-b-2 before:border-solid before:-bottom-1 before:w-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:border-black"
            >About</router-link
          ></span
        >
        <span
          ><router-link
            to="/"
            class="relative font-black before:absolute before:border-b-2 before:border-solid before:-bottom-1 before:w-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:border-black"
            >Workshop</router-link
          ></span
        >
        <span
          ><router-link
            to="/"
            class="relative font-black before:absolute before:border-b-2 before:border-solid before:-bottom-1 before:w-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:border-black"
            >Contact Us</router-link
          ></span
        >
      </div>
    </div>

</template>