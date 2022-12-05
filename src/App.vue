<script setup lang="ts">

</script>

<template>
  <header>
    <div class="flex justify-center p-14">
      <div class="w-1/2 text-end">
        <h1 class="text-3xl font-light ">Logo</h1>
      </div>
      <div class="flex justify-end w-1/2">
        <div class="text-gold-100 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>


        </div>
      </div>

    </div>
  </header>
  <main>
    <div class="relative md:flex h-screen p-2">
      <div class="p-5 text-center  md:hidden">
        <h2 class="my-4 font-bodoni text-lg">FEATURED</h2>
        <h1 class="my-4 font-bodoni text-6xl">LISTINGS</h1>
        <button class="border border-gray-900 py-3 px-8 mt-5 text-md 
        hover:bg-gray-900 hover:text-white transition-colors duration-700 transform">
          ALL LISTINGS
        </button>
      </div>
      <div class="bg-[url('/images/bev-1.webp')]  md:w-2/3 hero bg-center bg-cover group h-72 md:h-4/5">
        <!--Hero image-->
        <a href="#" class="w-full h-full">
          <div
            class="p-2 bg-gradient-to-t from-sky-700/50 h-full pt-8 flex items-bottom transition-colors duration-1000 transform relative">
            <div class="mx-14 absolute bottom-8">
              <h2 class="font-bodoni text-white text-4xl">146 LAUREN AVENUE</h2>
              <h6 class="font-bodoni text-white text-2xl mt-3">$ 314,000</h6>
              <button
                class="border border-white py-3 px-8 text-white group-hover:bg-gray-900 group-hover:border-gray-900 text-sm mt-4">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </a>
      </div>
      <div class="">
        <div class="p-5 action hidden md:block">
          <h2 class="my-4 font-bodoni text-xl">FEATURED</h2>
          <h1 class="my-4 font-bodoni text-6xl">LISTINGS</h1>
          <button class="border border-gray-900 py-3 px-8 mt-8 text-xl 
        hover:bg-gray-900 hover:text-white transition-colors duration-700 transform">
            ALL LISTINGS
          </button>
        </div>
        <div class="bg-white md:p-3 md:absolute md:w-2/4 addition  mt-1">
          <div class="grid md:grid-cols-2 md:gap-4 gap-1">
            <div class="bg-[url('/images/bev-2.webp')] h-48 w-auto bg-center bg-cover group col-span-1">
              <a href="#" class="hidden group-hover:block w-full h-full">
                <div
                  class="p-2 bg-gradient-to-t from-gray-800/50 h-full pt-8 grid place-content-stretch transition-colors duration-1000 transform">
                  <div class="mt-5">
                    <h2 class="font-bodoni text-white text-2xl">146 LAUREN AVENUE</h2>
                    <h6 class="font-bodoni text-white text-xl mt-3">$ 314,000</h6>
                    <button class="border border-gray-900 py-3 px-8 text-white bg-gray-900 text-sm mt-4">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </a>

            </div>
            <div class="bg-[url('/images/bev-2.webp')] h-48 w-auto bg-center bg-cover group col-span-1">
              <a href="#" class="hidden group-hover:block w-full h-full">
                <div
                  class="p-2 bg-gradient-to-t from-gray-800/50 h-full pt-8 grid place-content-stretch transition-colors duration-1000 transform">
                  <div class="mt-5">
                    <h2 class="font-bodoni text-white text-2xl">146 LAUREN AVENUE</h2>
                    <h6 class="font-bodoni text-white text-xl mt-3">$ 314,000</h6>
                    <button class="border border-gray-900 py-3 px-8 text-white bg-gray-900 text-sm mt-4">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </a>

            </div>
            <div class="bg-[url('/images/bev-2.webp')] h-48 w-auto bg-center bg-cover group col-span-1">
              <a href="#" class="hidden group-hover:block w-full h-full">
                <div
                  class="p-2 bg-gradient-to-t from-gray-800/50 h-full pt-8 grid place-content-stretch transition-colors duration-1000 transform">
                  <div class="mt-5">
                    <h2 class="font-bodoni text-white text-2xl">146 LAUREN AVENUE</h2>
                    <h6 class="font-bodoni text-white text-xl mt-3">$ 314,000</h6>
                    <button class="border border-gray-900 py-3 px-8 text-white bg-gray-900 text-sm mt-4">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </a>

            </div>

            <div class="bg-[url('/images/bev-2.webp')] h-48 w-auto bg-center bg-cover group col-span-1">
              <a href="#" class="hidden group-hover:block w-full h-full">
                <div
                  class="p-2 bg-gradient-to-t from-gray-800/50 h-full pt-8 grid place-content-stretch transition-colors duration-1000 transform">
                  <div class="mt-5">
                    <h2 class="font-bodoni text-white text-2xl">146 LAUREN AVENUE</h2>
                    <h6 class="font-bodoni text-white text-xl mt-3">$ 314,000</h6>
                    <button class="border border-gray-900 py-3 px-8 text-white bg-gray-900 text-sm mt-4">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero {
  /*height:80vh;*/
  animation: home 1.5s;
}

.addition {
  left: 45%;
  animation: away 1.5s;
}

.action {
  animation: actionable 1s;
}

@keyframes home {
  0% {
    transform: translateX(-100%)
  }

  100% {
    transform: translateX(0)
  }
}

@keyframes away {
  0% {
    transform: translateX(180%)
  }

  100% {
    transform: translateX(0)
  }

}

@keyframes actionable {
  0% {
    transform: translateY(50%)
  }

  100% {
    transform: translateY(0)
  }
}
</style>
