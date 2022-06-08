<template>
  <swiper
  class="w-52"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :loop="true"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: false,
    }"
  

    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide> <div   class="flex flex-col scale-90 -mb-3" >
    <img src="@/assets/tableware/20014.webp" class="rounded-lg h-1/2 p-3 xl:p-5   shadow-sm shadow-neutral-500" >
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 20014/15</span>
    <div class="flex items-end justify-end">
    <span class="text-xs relative bottom-8  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >Hexa Serving Bowl</span>
</div></div></swiper-slide>
    <swiper-slide> <div   class="flex flex-col scale-90 -mb-3" >
    <img src="@/assets/tableware/20014.webp" class="rounded-lg h-1/2 p-3 xl:p-5   shadow-sm shadow-neutral-500" >
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 20014/15</span>
    <div class="flex items-end justify-end">
    <span class="text-xs relative bottom-8  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >Hexa Serving Bowl</span>
</div></div></swiper-slide>
    <swiper-slide> <div   class="flex flex-col scale-90 -mb-3" >
    <img src="@/assets/tableware/20014.webp" class="rounded-lg h-1/2 p-3 xl:p-5   shadow-sm shadow-neutral-500" >
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 20014/15</span>
    <div class="flex items-end justify-end">
    <span class="text-xs relative bottom-8  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >Hexa Serving Bowl</span>
</div></div></swiper-slide>


  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      };
    },
  };
</script>


<style >

.swiper-button-prev,.swiper-button-next{
  @apply text-black font-extrabold hover:text-red-500 scale-50;
}

</style>