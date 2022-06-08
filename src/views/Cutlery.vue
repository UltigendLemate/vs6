<template> 

<div class="bg-black">
    <div class="heading text-6xl py-5  px-5" id="heading">Cutlery</div>
    </div>

<section>
    <div class="lg:flex first lg:px-5 lg:pt-10 lg:pb-6">
    <div class=" lg:grid  lg:mr-5 lg:w-1/2">
    <img src="@/assets/cutlery/19980.webp" class="w-screen lg:rounded-lg" alt="VS6 19980">
    <span class="relative bottom-10 left-4 text-xs text-white">VS6 19980</span>
    </div>

    <div class="grid lg:w-1/2 pt-5   pb-3 grid-cols-2 md:gap-x-5 md:gap-y-2 md:mx-6 -mt-2 gap-x-4 gap-y-3 mx-3 justify-center items-center  lg:mx-auto">
    <div  v-for="pic in cutlery.slice(0,4)" class="flex flex-col -mb-2" :key="pic.id">
    <img :src="require(`@/assets/cutlery/${pic.img}.webp`)" class="rounded-lg shadow-md shadow-slate-900" :alt="pic.id">
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-lg bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.id}}</span>

    </div>
    
    </div>



    <div class="grid lg:hidden grid-cols-2 md:mt-3 gap-x-4 gap-y-2 pb-5    md:gap-x-5 md:gap-y-2 md:mx-6  mx-3 justify-center items-center  ">
    <div  v-for="pic in cutlery.slice(4,6)" class="flex flex-col -mb-2" :key="pic.id">
    <img :src="require(`@/assets/cutlery/${pic.img}.webp`)" class="rounded-lg shadow-md shadow-slate-900" :alt="pic.id">
    <span class="text-xs relative bottom-4  rounded-bl-lg bg rounded-tr-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.id}}</span>

    </div>
    
    </div>
    </div>





    

    <div class="lg:grid hidden grid-cols-4 md:gap-x-5 md:gap-y-2 lg:mx-6  gap-x-3 lg:pb-3 justify-center items-center ">
    <div  v-for="pic in cutlery.slice(4,6)" class="flex flex-col -mb-2" :key="pic.id">
    <img :src="require(`@/assets/cutlery/${pic.img}.webp`)" class="rounded-lg shadow-md shadow-slate-900" :alt="pic.id">
    <span class="text-xs relative bottom-4 rounded-bl-lg  rounded-tr-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.id}}</span>

    </div>
    <div  v-for="pic in cutlery.slice(11,13)" class="flex flex-col -mb-2" :key="pic.id">
    <img :src="require(`@/assets/cutlery/${pic.img}.webp`)" class="rounded-lg shadow-md shadow-slate-900" :alt="pic.id">
    <span class="text-xs relative bottom-4 rounded-bl-lg  rounded-tr-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.id}}</span>

    </div>
    
    </div>



    
    





    <div class="lg:flex second lg:mx-5 lg:flex-row-reverse lg:my-5">
    <div class=" lg:grid  lg:ml-5 lg:w-1/2">
    <img src="@/assets/cutlery/19987.webp" class="w-screen lg:rounded-lg" alt="VS6 19987">
    <span class="relative bottom-10 left-4 text-xs text-white">VS6 19987</span>
    </div>

    <div class="grid lg:w-1/2 grid-cols-2 md:gap-x-5 md:gap-y-2 md:mx-6 -mt-2 gap-x-4 gap-y-3 pt-5 pb-3   mx-3 justify-center items-center  lg:mx-auto">
    <div  v-for="pic in cutlery.slice(7,11)" class="flex flex-col -mb-2" :key="pic.id">
    <img :src="require(`@/assets/cutlery/${pic.img}.webp`)" class="rounded-lg shadow-md shadow-slate-900" :alt="pic.id">
    <span class="text-xs relative bottom-4 rounded-bl-lg  rounded-tr-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.id}}</span>

    </div>
    
    </div>



    <div class="grid lg:hidden grid-cols-2 md:mt-3 gap-x-4 gap-y-3 md:gap-x-5 md:gap-y-2 pb-5    md:mx-6  mx-3 justify-center items-center  ">
    <div  v-for="pic in cutlery.slice(11,13)" class="flex flex-col -mb-2" :key="pic.id">
    <img :src="require(`@/assets/cutlery/${pic.img}.webp`)" class="rounded-lg shadow-md shadow-slate-900" :alt="pic.id">
    <span class="text-xs relative bottom-4 rounded-bl-lg  rounded-tr-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.id}}</span>

    </div>
    
    </div>
    </div>






    <div class="lg:flex third lg:mx-5 lg:flex-row-reverse lg:py-5">
    <div class=" lg:grid  lg:ml-5 lg:w-1/2">
    <img src="@/assets/cutlery/19994.webp" class="w-screen lg:rounded-lg" alt="VS6 19947">
    <span class="relative bottom-10 left-4 text-xs text-white">VS6 19994</span>
    </div>

    <div class="grid lg:w-1/2 grid-cols-2 md:gap-x-5 md:gap-y-2 md:mx-6 -mt-2 gap-x-4 gap-y-3 py-5    mx-3 justify-center items-center  lg:mx-auto">
    <div  v-for="pic in cutlery.slice(14,)" class="flex flex-col -mb-2" :key="pic.id">
    <img :src="require(`@/assets/cutlery/${pic.img}.webp`)" class="rounded-lg shadow-md shadow-slate-900" :alt="pic.id">
    <span class="text-xs relative bottom-4 rounded-bl-lg  rounded-tr-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.id}}</span>

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
                    id:'VS6 19981',
                    img: '19981',
                },
                {
                    id:'VS6 19982',
                    img: '19982',
                },
                {
                    id:'VS6 19983',
                    img: '19983',
                },
                {
                    id:'VS6 19984',
                    img: '19984',
                },
                {
                    id:'VS6 19985',
                    img: '19985',
                },
                {
                    id:'VS6 19986',
                    img: '19986',
                },
                {
                    id:'VS6 19987',
                    img: '19987',
                },
                {
                    id:'VS6 19988',
                    img: '19988',
                },
                {
                    id:'VS6 19989',
                    img: '19989',
                },
                {
                    id:'VS6 19990',
                    img: '19990',
                },
                {
                    id:'VS6 19991',
                    img: '19991',
                },
                {
                    id:'VS6 19992',
                    img: '19992',
                },
                {
                    id:'VS6 19993',
                    img: '19993',
                },
                {
                    id:'VS6 19994',
                    img: '19994',
                },
                {
                    id:'VS6 19995',
                    img: '19995',
                },
                {
                    id:'VS6 19996',
                    img: '19996',
                },
                {
                    id:'VS6 19997',
                    img: '19997',
                },
                {
                    id:'VS6 19998',
                    img: '19998',
                }


            ]
        }
    }
}
</script>

<style scoped>

@font-face {font-family: "Peignot";
    src: url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.eot"); /* IE9*/
    src: url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.woff2") format("woff2"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.woff") format("woff"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://db.onlinewebfonts.com/t/8e48c4feac89f8aba0fa4150b22e108d.svg#Peignot") format("svg"); /* iOS 4.1- */
}

section{
    @apply bg-zinc-900;
    }


</style>