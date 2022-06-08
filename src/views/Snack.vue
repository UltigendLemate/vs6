 <template>
 
 <div class="bg-black">
   <div class="heading py-5  px-5" id="heading">Snack Serving Sets</div>
   </div>

 <section class="lg:flex lg:w-full bg-zinc-900 first lg:pt-7 lg:px-5 lg:pb-5">
    <div class=" grid justify-center items-center my-auto  lg:mr-5 lg:w-1/2">
    <img src="@/assets/snack/20097.webp" class="w-screen lg:shadow-md lg:shadow-slate-900 lg:rounded-lg" alt="hexagonal">
    <span class="text-sm relative bottom-7   rounded-tr-md rounded-bl-md  font-semibold   w-fit px-2" >VS 20097</span>

    </div>

    <div class="grid lg:w-1/2 grid-cols-2 md:gap-x-5  md:mx-6 lg:mr-5  gap-x-4 mx-3 mt-5 lg:py-0 items-center justify-center  lg:mx-auto">
    <div  v-for="pic in snack.slice(0,4)" class="flex flex-col lg:-mb-5 -mb-3 my-auto h-fit" :key="pic.id">
    <img :src="require(`@/assets/snack/${pic.img}.webp`)" class="rounded-lg shadow-sm p-5  shadow-slate-900" :alt="pic.id">
    <span class="text-xs relative bottom-4   rounded-tr-md rounded-bl-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >VS6 {{pic.img}}</span>
    <div class="flex opacity-0 items-end justify-end">
    <span class="text-xs relative bottom-8  inline-block rounded-tl-md rounded-br-md bg-opacity-30 font-semibold  bg-white w-fit px-2" >{{pic.text}}</span>
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
            snack: [
                {
                    img:'20098',
                    text: 'Snacks Serving Set'
                },
                 {
                    img:'20099',
                    text: 'Snacks Serving Set'
                },
                 {
                    img:'20100',
                    text: 'Electric Soup Station'
                },
                 {
                    img:'20101',
                    text: 'Soup Ladle'
                },

            ]
        }
    }
}
</script>