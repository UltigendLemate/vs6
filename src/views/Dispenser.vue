 <template>
 <div class="bg-black">
   <div class="heading  py-5  px-5" id="heading">Juice Dispensers</div>
   </div>

 <section class="lg:flex lg:w-full bg-zinc-900 first lg:pt-5 lg:px-5 lg:pb-5">
    <div class=" grid justify-center items-center my-auto -mb-5 lg:-mb-2 lg:mr-5 lg:w-1/2">
    <img src="@/assets/juice/20102.webp" class="w-screen lg:shadow-md lg:shadow-slate-900 lg:rounded-lg" alt="hexagonal">
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 20102</span>
    <div class="flex items-end justify-end ">
    <span class="text-xs relative bottom-8  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 20103</span>
</div>

    </div>

    <div class="grid lg:w-1/2 grid-cols-2 md:gap-x-5  md:mx-6 lg:mr-5  gap-x-4 mx-3 mt-5 lg:py-0 items-center justify-center  lg:mx-auto">
    <div  v-for="pic in juice.slice(0,4)" class="flex flex-col relative lg:-mb-5 my-1 h-fit" :key="pic.id">
    <img :src="require(`@/assets/juice/${pic.img}.webp`)" class="rounded-lg shadow-sm p-5  shadow-slate-900" :alt="pic.id">
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 {{pic.img}}</span>
    <div class="flex items-end justify-end absolute lg:static top-0 right-0">
    <span class="text-xs relative lg:bottom-8  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.text}}</span>
</div>
    </div>
    
    </div>



    
    </section>
 </template>
 

 
 <style scoped>

 </style>   



<script>

export default {
    data(){
        return{
            juice: [
                {
                    img:'20105',
                    text: 'Cereal Dispenser single'
                },
                 {
                    img:'20104',
                    text: 'Cereal Dispenser double'
                },
                 {
                    img:'20106',
                    text: 'Electric Soup Station'
                },
                 {
                    img:'20135',
                    text: 'Soup Ladle'
                },

            ]
        }
    }
}
</script>