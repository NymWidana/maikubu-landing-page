<script setup>
import { RouterLink } from "vue-router";
const produk = [
  {
    nama: "produk1",
    url: new URL("/src/assets/produk1.png", import.meta.url).href,
    deskripsiSingkat:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam",
  },
  {
    nama: "produk2",
    url: new URL("/src/assets/produk2.png", import.meta.url).href,
    deskripsiSingkat:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam",
  },
  {
    nama: "produk3",
    url: new URL("/src/assets/produk3.png", import.meta.url).href,
    deskripsiSingkat:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam",
  },
  {
    nama: "produk4",
    url: new URL("/src/assets/produk4.png", import.meta.url).href,
    deskripsiSingkat:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam",
  },
  {
    nama: "produk5",
    url: new URL("/src/assets/produk5.png", import.meta.url).href,
    deskripsiSingkat:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam",
  },
  {
    nama: "produk6",
    url: new URL("/src/assets/produk6.png", import.meta.url).href,
    deskripsiSingkat:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam",
  },
  {
    nama: "produk7",
    url: new URL("/src/assets/produk7.jpeg", import.meta.url).href,
    deskripsiSingkat:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam",
  },
  {
    nama: "produk8",
    url: new URL("/src/assets/produk8.jpeg", import.meta.url).href,
    deskripsiSingkat:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam",
  },
];
</script>
<template>
  <!-- banner -->
  <div class="relative banner -z-10 w-full">
    <div
      class="absolute top-0 left-0 h-full flex items-center w-full textbanner mdpl-12 pl-8 "
    >
      <div class="md:w-1/3 w-1/2">
        <h1 class="md:text-5xl text-4xl font-black my-4">MaiKubu Tigawasa</h1>
        <p class="md:text-3xl text-2xl font-bold">Love nature with bamboo</p>
      </div>
    </div>
    <!-- <img
      class="absolute top-0 left-0 -z-10 gambarbanner h-full w-full"
      src="../assets/banner.jpeg"
      alt=""
    /> -->
  </div>

  <!-- konten -->
  <div class="bg-white">
    <!-- penjelasan singkat -->
    <div class=" lg:text-lg text-base text-center sum py-8 px-8">
      <p>
        Kami lahir sebagai upaya pelestarian adat dan budaya Desa Tigawasa yang
        sangat erat kaitannya dengan nilai konservasi. Kami ingin menciptakan
        ekonomi yang berdaya dan berkeadilan dari kegiatan masyarakat dalam
        keseharian, salah satunya melalui budaya menganyam bambu.
      </p>
    </div>

    <!-- tentang -->
    <div class="layoutcenter px-4" id="tentang">
      <!-- tentang kami -->
      <div class="mb-8">
        <h2 class="text-center sm:text-3xl text-2xl font-black py-8">Tentang Kami</h2>
        <div class="grid sm:grid-cols-2 grid-cols-1">
          <h3
            class="flex items-center sm:text-3xl text-2xl font-black px-4 py-8 underline sm:bg-white bg-gray-100"
          >
            MaiKubu Tigawasa
          </h3>
          <div
            class="lg:text-base text-sm bg-color1 text-white px-4 py-4 pb-8 sm:h-96 h-auto flex items-center"
          >
            <p>
              <b class="font-black">MaiKubu</b> terdiri dari dua kata "Mai" dan "Kubu". Dua kata
              ini kami ambil dari kalimat yang sering kami utarakan ketika ingin
              mengajak teman untuk pulang. Melalui nama ini kami ingin berpesan
              untuk selalu ingat kepada tanah kelahiran.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div
            class="lg:text-base text-sm sm:w-1/2 w-full bg-color3 text-white px-4 py-4 pb-8 sm:h-96 h-auto flex items-center"
          >
            Tigawasa kami ambil dari nama desa tempat kami lahir, yakni Desa
            Tigawasa. Sebuah desa tua di Bali Utara yang kaya akan nilai hidup
            selaras alam dari adat dan budaya yang dijalankan.
          </div>
          <h3
            class="sm:order-1 -order-1 sm:w-1/2 w-full flex items-center sm:text-3xl text-2xl font-black px-4 py-8 underline sm:bg-white bg-gray-100"
          >
            MaiKubu-Ayo ke Rumah / Ayo Pulang
          </h3>
        </div>
      </div>

      <!-- workshop maikubu -->
      <div class="my-8" id="workshop">
        <h2 class="text-center sm:text-3xl text-2xl font-black py-8">Workshop Kami</h2>
        <div class="grid md:grid-cols-2 grid-cols-1 mb-12">
          <img class="rounded-lg m-auto" src="../assets/kegiatan1.png" alt="" />
          <div class="p-4">
            <h3 class="sm:text-3xl text-2xl font-black underline">Kegiatan 1</h3>
            <p class="my-4 lg:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              fuga, ut voluptatem placeat excepturi ipsam fugit. Officiis quo
              quasi consequuntur optio, corrupti iste odio beatae recusandae
              soluta assumenda eveniet animi, molestias asperiores itaque quis
              magni fugiat saepe illo aliquam in. Reprehenderit, deleniti
              maxime. Ut, iste hic porro id adipisci dolor obcaecati? Veniam
              amet, explicabo corporis sit atque voluptatem magni in!
            </p>
          </div>
        </div>
        <div class="">
          <img class="rounded-lg" src="../assets/kegiatan2.png" alt="" />
          <div class="p-4">
            <h3 class="sm:text-3xl text-2xl font-black underline">Kegiatan 2</h3>
            <p class="my-4 lg:text-base text-sm">
              Kami lahir sebagai upaya pelestarian adat dan budaya Desa Tigawasa
              yang sangat erat kaitannya dengan nilai konservasi. Kami ingin
              menciptakan ekonomi yang berdaya dan berkeadilan dari kegiatan
              masyarakat dalam keseharian, salah satunya melalui budaya
              menganyam bambu.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- pembatas topik -->
    <div class="bg-color1 text-white text-center mb-8 px-4">
      <p class="pembatastopik py-12 lg:text-base text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eligendi
        nihil! Dignissimos nihil repudiandae temporibus sunt asperiores
        blanditiis ducimus architecto accusantium eius beatae! Ut similique
        officia quo numquam alias esse maiores quos illum adipisci, minima
        distinctio doloribus rem. Animi, reprehenderit.
      </p>
    </div>

    <div class="layoutcenter bg-white">
      <!-- katalog produk -->
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:m-8 sm:m-4 m-2 md:mb-8 sm:mb-4 mb-2">
        <div class="md:m-8 sm:m-4 m-2 relative" v-for="p in produk">
          <div>
            <img
              class="w-full rounded-md hover:shadow-xl"
              :src="p.url"
              alt=""
            />
            <div
              class="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:opacity-100 transition duration-300 rounded-md"
              style="background: rgba(0, 0, 0, 0.6)"
            >
              <div class="absolute bottom-0 m-8">
                <h4 class="">{{ p.nama }}</h4>
                <div class="text-xs text-slate-200">
                  {{ p.deskripsiSingkat }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- kalimat penutup -->
    <div class="penutup pb-16 text-center px-8 bg-white">
      <p class="text-center mb-12 lg:text-base text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et
        ullam labore velit itaque laudantium odio voluptatem repudiandae error
        ipsam beatae maiores reprehenderit impedit vel consectetur quaerat
        quibusdam expedita mollitia ea veniam, alias, perferendis neque
        obcaecati! Fugiat ad, assumenda incidunt laboriosam ab animi
      </p>

      <!-- tombol hubungi kami -->
      <a
        id="contact"
        href="#"
        class="w-full p-3 border-black rounded-lg border-2 hover:bg-black hover:text-white duration-300"
        >Hubungi Kami</a
      >
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
