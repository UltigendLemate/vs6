<template>
<div class="bg-black">
 <div class="heading  py-5  px-5" id="heading">Belly Serving Sets</div></div>
<main class="bg-stone-900">


<!-- section 1 -->
  <section class="lg:flex lg:w-full first lg:pt-7 lg:px-5 lg:pb-5">
    <div class=" grid justify-center items-center my-auto text-white  lg:mr-5 lg:w-1/2">
    <img src="@/assets/belly/20107.webp" class="w-screen lg:shadow-md lg:shadow-slate-900 lg:rounded-lg" alt="hexagonal">
    <!-- <span class="relative md:bottom-24 bottom-16 text-xs md:left-10 left-6 font-light ">Purple Belly Bowl with Stand</span>
    <span class="relative md:bottom-24 bottom-16 text-xs md:left-10 left-6 font-light ">VS6 20107/08</span>
    <span class="relative md:bottom-28 bottom-[73px] sm:-right-96 md:-right-0 text-xs -right-60 font-light ">Red Belly Bowl with Stand</span>
    <span class="relative md:bottom-28 bottom-[73px] sm:-right-96 md:-right-0 text-xs -right-60 font-light ">VS6 20109/10</span> -->
    </div>

    <div class="grid lg:w-1/2 grid-cols-2 md:gap-x-5  md:mx-6 lg:mr-5  gap-x-4 mx-3 my-5 lg:py-0 items-center justify-center  lg:mx-auto">
    <div  v-for="pic in belly.slice(0,4)" class="flex flex-col my-3 relative lg:-mb-5 -mb-3 lg:my-auto h-fit" :key="pic.img">
    <img :src="require(`@/assets/belly/${pic.img}.webp`)" class="rounded-lg shadow-sm p-5  shadow-slate-900" >
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 {{pic.img}}</span>
    <div class="flex items-end justify-end absolute lg:static top-0 right-0">
    <span class="text-xs relative lg:bottom-8  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.text}}</span>
</div>
    </div>
    
    </div>
    </section>




<!-- section 2 on phone -->
    <section class="lg:hidden  mt-2 first lg:pt-7 lg:px-5 lg:pb-5">
    <div class=" grid justify-center items-center my-auto   ">
    <img src="@/assets/belly/20116.webp" class="w-screen lg:shadow-md lg:shadow-slate-900 lg:rounded-lg" alt="hexagonal">
    
    </div>

    <div class="grid lg:w-1/2 grid-cols-2 md:gap-x-5  md:mx-6 lg:mr-5  gap-x-4 mx-3 mt-5 lg:py-0 items-center justify-center  lg:mx-auto">
    <div class="relative">
    <img src="@/assets/belly/20111.webp" alt="20111" class="rounded-lg shadow-sm p-5  shadow-slate-900">

    <span class="text-xs relative bottom-6   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 20111</span>
    <div class="flex items-end justify-end absolute lg:static top-0 right-0">
    <span class="text-xs relative lg:bottom-11  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >White Bowl with Stand</span>
    
</div>
    
    </div>




    <div class="relative">
    <img src="@/assets/belly/20113.webp" alt="20113" class="rounded-lg shadow-sm p-5  shadow-slate-900">

    <span class="text-xs relative bottom-6   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 20113</span>
    <div class="flex items-end justify-end absolute lg:static top-0 right-0">
    <span class="text-xs relative lg:bottom-11  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >Grey Bowl with Stand</span>
    
</div>
    
    </div>
    
    </div>
    </section>

<!-- section 2 on pc  -->
    <section class="lg:grid grid-cols-4  gap-x-5 px-5 hidden ">

    <div class="col-span-1 h-fit -mb-9">
    <img src="@/assets/belly/20111.webp" alt="20111" class="rounded-lg shadow-sm p-5  shadow-slate-900">

    <span class="text-xs relative bottom-6   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 20111</span>
    <div class="flex items-end justify-end">
    <span class="text-xs relative bottom-11  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >White Bowl with Stand</span>
    
</div>
    
    </div>



    <div class=" grid col-span-2 justify-center items-center h-fit my-auto  ">
    <img src="@/assets/belly/20116.webp" class="w-screen lg:shadow-md lg:shadow-slate-900 lg:rounded-lg" alt="hexagonal">
    
    </div>


    <div class="col-span-1 h-fit -mb-9">
    <img src="@/assets/belly/20111.webp" alt="20111" class="rounded-lg shadow-sm p-5  shadow-slate-900">

    <span class="text-xs relative bottom-6   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 20113</span>
    <div class="flex items-end justify-end">
    <span class="text-xs relative bottom-11  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >Grey Bowl with Stand</span>
    
</div>
    
    </div>
    
    </section>


    <!-- section 3 -->

<section class="lg:flex lg:flex-row-reverse lg:w-full first lg:pt-4 lg:px-5 lg:pb-5">
    <div class=" grid justify-center items-center my-auto text-white  lg:mr-5 lg:w-1/2">
    <img src="@/assets/belly/20112.webp" class="w-screen lg:shadow-md lg:shadow-slate-900 lg:rounded-lg" alt="hexagonal">
    
    </div>

    <div class="grid lg:w-1/2 grid-cols-2 md:gap-x-5  md:mx-6 lg:mr-5  gap-x-4 mx-3 mt-5 lg:py-0 items-center justify-center  lg:mx-auto">
    <div  v-for="pic in belly.slice(4,)" class="flex flex-col relative lg:-mb-5 my-1 h-fit" :key="pic.img">
    <img :src="require(`@/assets/belly/${pic.img}.webp`)" class="rounded-lg shadow-sm p-5  shadow-slate-900" >
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 {{pic.img}}</span>
    <div class="flex items-end justify-end absolute lg:static top-0 right-0">
    <span class="text-xs relative lg:bottom-8  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.text}}</span>
</div>
    </div>
    
    </div>
    </section>




    </main>
</template>

<script>

export default {
    data(){
        return{
            belly: [
                {
                    img:'20115',
                    text: 'Red Belly Bowl'
                },
                 {
                    img:'20117',
                    text: 'White Belly Bowl'
                },
                 {
                    img:'20123',
                    text: 'Red Bowl & Black Stand'
                },
                 {
                    img:'20125',
                    text: 'White Bowl & Black Stand'
                },
                 {
                    img:'20119',
                    text: 'Grey Belly Bowl'
                },
                 {
                    img:'20121',
                    text: 'Purple Belly Bowl'
                },
                 {
                    img:'20127',
                    text: 'Grey Bowl & Black Stand'
                },
                 {
                    img:'20129',
                    text: 'Purple Bowl & Black Stand'
                },

            ],
            
        };
        
    },

    mounted(){
        this.open = false
    },
    methods: {
    MenuOpen() {
      this.open = !this.open;
    },
    Catalog() {
      this.cata = !this.cata;
    },
  },
}
</script>

<style>
main{
    @apply bg-zinc-900;
}
img{
    background: white;;
}
</style>