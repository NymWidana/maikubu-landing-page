<script>
export default {
  data() {
    return {
      produk: [
        {
          nama: "produk1",
          url: "./src/assets/produk1.png",
        },
        {
          nama: "produk2",
          url: "./src/assets/produk2.png",
        },
        {
          nama: "produk3",
          url: "./src/assets/produk3.png",
        },
        {
          nama: "produk4",
          url: "./src/assets/produk4.png",
        },
        {
          nama: "produk5",
          url: "./src/assets/produk5.png",
        },
        {
          nama: "produk6",
          url: "./src/assets/produk6.png",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="body2">
    <!-- header -->
    <div class="h-14 shadow-md px-16 py-2 bg-white">
      <a href="#" id="logo"
        ><img class="invert h-full" src="./assets/logomaikubu.png" alt=""
      /></a>
    </div>

    <!-- banner -->
    <div class="relative banner -z-10 w-screen">
      <div class="absolute top-0 left-0 h-full flex items-center w-full textbanner pl-8">
        <div class="w-1/3">
          <h1 class="text-5xl font-black my-4">MaiKubu Tigawasa</h1>
          <p class="text-3xl font-bold">Love nature with bamboo</p>
        </div>
      </div>
      <img
        class="absolute top-0 left-0 -z-10 gambarbanner h-full w-full"
        src="./assets/banner.jpeg"
        alt=""
      />
    </div>

    <!-- konten -->
    <div class="bg-white">
      <!-- penjelasan singkat -->
      <div class="text-lg text-center sum py-8 px-4">
        <p>
          Kami lahir sebagai upaya pelestarian adat dan budaya Desa Tigawasa
          yang sangat erat kaitannya dengan nilai konservasi.
          Kami ingin menciptakan ekonomi yang berdaya dan berkeadilan dari
          kegiatan masyarakat dalam keseharian, salah satunya melalui budaya
          menganyam bambu.
        </p>
      </div>
      <div class="tentangkami px-4">
        <h2 class="text-center text-3xl font-black my-8">Tentang Kami</h2>

        <!-- makna maikubu -->
        <div class="my-16">
          <div class="grid grid-cols-2">
            <h3
              class="flex items-center text-3xl font-black px-4 py-8 underline"
            >
              MaiKubu Tigawasa
            </h3>
            <div class="bg-color1 text-white px-4 h-96 flex items-center">
              MaiKubu terdiri dari dua kata "Mai" dan "Kubu". Dua kata ini kami
              ambil dari kalimat yang sering kami utarakan ketika ingin mengajak
              teman untuk pulang. Melalui nama ini kami ingin berpesan untuk
              selalu ingat kepada tanah kelahiran.
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="bg-color3 text-white px-4 h-96 flex items-center">
              Tigawasa kami ambil dari nama desa tempat kami lahir, yakni Desa
              Tigawasa. Sebuah desa tua di Bali Utara yang kaya akan nilai hidup
              selaras alam dari adat dan budaya yang dijalankan.
            </div>
            <h3
              class="flex items-center text-3xl font-black px-4 py-8 underline"
            >
              MaiKubu-Ayo ke Rumah / Ayo Pulang
            </h3>
          </div>
        </div>

        <!-- kegiatan maikubu -->
        <div>
          <div class="grid md:grid-cols-2 grid-cols-1 my-16">
            <img class="rounded-lg" src="./assets/kegiatan1.png" alt="" />
            <div class="p-4">
              <h3 class="text-3xl font-black underline">Kegiatan 1</h3>
              <p class="my-4">
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
          <div class="my-16">
            <img class="rounded-lg" src="./assets/kegiatan2.png" alt="" />
            <div class="p-4">
              <h3 class="text-3xl font-black underline">Kegiatan 2</h3>
              <p class="my-4">
                Kami lahir sebagai upaya pelestarian adat dan budaya Desa
                Tigawasa yang sangat erat kaitannya dengan nilai konservasi.
                Kami ingin menciptakan ekonomi yang berdaya dan berkeadilan dari
                kegiatan masyarakat dalam keseharian, salah satunya melalui
                budaya menganyam bambu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- pembatas topik -->
      <div class="bg-color1 text-white text-center">
        <p class="pembatastopik py-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          eligendi nihil! Dignissimos nihil repudiandae temporibus sunt
          asperiores blanditiis ducimus architecto accusantium eius beatae! Ut
          similique officia quo numquam alias esse maiores quos illum adipisci,
          minima distinctio doloribus rem. Animi, reprehenderit.
        </p>
      </div>

      <div class="topik2 bg-white">
        <!-- katalog produk -->
        <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-12">
          <div class="m-8 relative" v-for="p in produk">
            <a href="#"
              ><img
                class="w-full rounded-md hover:shadow-xl"
                v-bind:src="p.url"
                alt=""
              />
              <div
                class="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:opacity-100 transition duration-300 rounded-md"
                style="background: rgba(0, 0, 0, 0.5)"
              >
                <span
                  class="absolute bottom-0 text-center justify-center m-8"
                  >{{ p.nama }}</span
                >
              </div></a
            >
          </div>
        </div>
      </div>

      <!-- kalimat penutup -->
      <div class="penutup my-12 text-center px-8 bg-white">
        <p class="text-center mb-12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et
          ullam labore velit itaque laudantium odio voluptatem repudiandae error
          ipsam beatae maiores reprehenderit impedit vel consectetur quaerat
          quibusdam expedita mollitia ea veniam, alias, perferendis neque
          obcaecati! Fugiat ad, assumenda incidunt laboriosam ab animi aperiam,
          officiis illum quos quo saepe! Exercitationem nobis ad dicta, beatae
          minus blanditiis porro reprehenderit quo iusto facilis, soluta minima
          quia earum et eveniet tempore. Nesciunt ex quia cupiditate est
          provident harum recusandae perferendis quas? Unde, necessitatibus?
        </p>

        <!-- tombol hubungi kami -->
        <a
          href="#"
          class="w-full p-3 border-black rounded-lg border-2 hover:bg-black hover:text-white duration-300"
          >Hubungi Kami</a
        >
      </div>
    </div>
    <!-- footer -->
    <div class="grid grid-cols-2 bg-color4 text-white p-8">
      <div class="text-center w-28 ml-auto mr-36">
        <a class="block" href="#" id="logo"
          ><img
            class="w-3/4 mx-auto mb-4"
            src="./assets/logomaikubu.png"
            alt=""
        /></a>
        <p class="my-2 text-sm">Connect with Us</p>
        <div class="flex justify-around gap-4">
          <a href="#"
            ><img class="w-4 invert" src="./assets/instagram.png" alt=""
          /></a>
          <a href="#"
            ><img class="w-4 invert" src="./assets/facebook.png" alt=""
          /></a>
          <a href="#"
            ><img class="w-4 invert" src="./assets/whatsapp.png" alt=""
          /></a>
        </div>
      </div>
      <div class="flex gap-4 text-sm">
        <span
          ><a
            href="#"
            class="relative before:absolute before:border-b-2 before:border-solid before:-bottom-1 before:w-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:border-white"
            >About</a
          ></span
        >
        <span
          ><a
            href="#"
            class="relative before:absolute before:border-b-2 before:border-solid before:-bottom-1 before:w-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:border-white"
            >Workshop</a
          ></span
        >
        <span
          ><a
            href="#"
            class="relative before:absolute before:border-b-2 before:border-solid before:-bottom-1 before:w-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:border-white"
            >Contact Us</a
          ></span
        >
      </div>
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
