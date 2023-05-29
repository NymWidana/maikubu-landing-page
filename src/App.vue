<script setup>
import Navigasi from "./components/Navigasi.vue";
import FooterMai from "./components/Footer.vue";
</script>
<template>
  <!-- <div class="body2"> -->
    <div>
      <Navigasi />
    </div>

    <div>
      <router-view></router-view>
    </div>

    <div>
      <FooterMai />
    </div>
  <!-- </div> -->
</template>
