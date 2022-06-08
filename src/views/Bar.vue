<template> 

 <div class="bg-black">
   <div class="heading  py-5  px-5" id="heading">Bar Accessories</div>
   </div>
   

<section class="">
    <div class="lg:flex first lg:pt-7 lg:px-5 lg:pb-5">
    <div class=" lg:grid justify-center items-center my-auto w-full  lg:mr-5 lg:w-1/2">
    <img src="@/assets/bar/20000.webp" class="w-full lg:shadow-md lg:shadow-slate-900 lg:rounded-lg" alt="VS6 20000">
    <span class="relative bottom-10 left-4 text-xs text-white">VS6 20000</span>
    </div>

    <div class="grid lg:w-1/2 grid-cols-2 gap-y-3 mb-6 md:md-0 md:gap-x-5 md:gap-y-2 md:mx-6 -mt-2 gap-x-4 mx-3 pt-5 lg:pt-0 justify-center items-center  lg:mx-auto">
    <div  v-for="pic in cutlery.slice(0,4)" class="flex relative  flex-col -mb-3" :key="pic.id">
    <img :src="require(`@/assets/bar/${pic.img}.webp`)" class="rounded-lg shadow-sm p-5 shadow-neutral-500" :alt="pic.id">
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.id}}</span>
    <div class="flex items-end justify-end absolute lg:static right-0 top-0">
    <span class="text-xs relative lg:bottom-8  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.text}}</span>
</div>
    </div>
    
    </div>



    
    </div>


    <div class="lg:flex  lg:flex-row-reverse first lg:px-5 lg:py-5">
    <div class=" lg:grid justify-center items-center my-auto lg:pt-0 lg:ml-5 lg:w-1/2">
    <img src="@/assets/bar/20009.webp" class="  w-full lg:shadow-md lg:shadow-slate-900 lg:rounded-lg" alt="VS6 20009">
    <span class="relative bottom-10 left-4 text-xs text-white">VS6 20009</span>
    </div>

     <div class="grid lg:w-1/2 grid-cols-2 gap-y-3 pb-6 md:md-0 md:gap-x-5 md:gap-y-2 md:mx-6 -mt-2 gap-x-4 mx-3 pt-5 lg:pt-0 justify-center items-center  lg:mx-auto">
    <div  v-for="pic in cutlery.slice(4,)" class="flex relative  flex-col -mb-3" :key="pic.id">
    <img :src="require(`@/assets/bar/${pic.img}.webp`)" class="rounded-lg shadow-sm p-5 shadow-neutral-500" :alt="pic.id">
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.id}}</span>
    <div class="flex items-end justify-end absolute lg:static right-0 top-0">
    <span class="text-xs relative lg:bottom-8  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.text}}</span>
</div>
    </div>
    
    </div>



    
    </div>





    
    





   






</section>


 
    <!-- <div v-for="spoon in cutlery" :key="spoon.id">


    <img :src="require(`@/assets/${spoon.img}`)">


    <span>{{spoon.id}}</span>
    </div> -->
</template>


<script>

export default {
    data(){
        return{
            cutlery: [
                {
                    id:'VS6 19999',
                    img: '19999',
                    text: 'Cocktail Shaker'
                },
                {
                    id:'VS6 20001',
                    img: '20001',
                    text: 'Wine Bucket'


                },
                {
                    id:'VS6 20002',
                    img: '20002',
                    text: 'Ice Bucket'


                },
                {
                    id:'VS6 20003/04',
                    img: '20003',
                    text: 'Ice Bucket (S/L)'


                },
                {
                    id:'VS6 20005',
                    img: '20005',
                    text: 'Ice Tong'

                },
                {
                    id:'VS6 20006',
                    img: '20006',
                    text: 'Bar Tray'

                },
                {
                    id:'VS6 20007',
                    img: '20007',
                    text: 'Bottle Holder'

                },
                {
                    id:'VS6 20008',
                    img: '20008',
                    text: 'Ash Tray'

                }


            ]
        }
    }
}
</script>

<style scoped >

@font-face {font-family: "Peignot";
    src: url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.eot"); /* IE9*/
    src: url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.woff2") format("woff2"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.woff") format("woff"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.svg#Peignot") format("svg"); /* iOS 4.1- */
}
.heading{
    font-family: Peignot,sans-serif;

}

section{
    @apply bg-zinc-900 ;
    width: 100% !important;
    }


</style>