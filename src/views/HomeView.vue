<template>






  <div class="containe  md:h-[85vh] h-[80vh]  flex flex-col justify-center items-center">
  <h1 class=" heading show xl:text-8xl  text-[40px] text-center sm:text-5xl md:text-7xl">Affordable Designer Hotelware</h1>
  <h1 class=" heading  hide xl:text-8xl  text-[40px] text-center sm:text-5xl md:text-7xl">Affordable</h1>
  <h1 class=" heading  hide xl:text-8xl  text-[40px] text-center sm:text-5xl md:text-7xl">Designer Hotelware</h1>
  
  </div>



   <section id="Catalogue" class="bg-gradient-to-t from-[#18191a] px-5 lg:px-10 to-[#0E0E0E]">
        <h1 class="pt-10 text-5xl lg:text-7xl text-center  heading" style="font-family: 'Peignot';">Catalogue</h1>
        <div class="grid grid-cols-2 gap-x-7 gap-y-4 md:gap-10 md:grid-cols-3 lg:grid-cols-4 items-center h-auto pt-12 pb-20">
            <!-- CUTLERY -->
            <router-link to="/cutlery" class="">
                <img src="../assets/cutlery/19995.webp" alt="" class="   rounded-lg shadow-md shadow-black">
                <p class="text-white text-center text-lg sm:text-xl font-semibold mt-4 lg:text-2xl">Cutlery</p>
            </router-link>

            <!-- BAR ACCESSORIES -->
            <router-link to="/bar-accessories" class="">
                <img src="../assets/bar/20000.webp" alt="" class="    rounded-lg shadow-md shadow-black">
                <p class="text-white text-center text-lg sm:text-xl font-semibold mt-4 lg:text-2xl">Bar Accessories</p>
            </router-link>

            <!-- TABLEWARE -->
            <router-link to="/tableware" class="">
                <img src="../assets/tableware/20022.webp" alt="" class="  rounded-lg shadow-md shadow-black">
                <p class="text-white text-center text-lg sm:text-xl font-semibold mt-4 lg:text-2xl">Tableware</p>
            </router-link>

            <!-- SERVING SETS  -->
            <router-link to="/belly-serving-sets" class="">
                <img src="../assets/belly/20116.webp" alt="" class=" rounded-lg shadow-md shadow-black">
                <p class="text-white text-center text-lg sm:text-xl font-semibold mt-4 lg:text-2xl">Serving Sets</p>
            </router-link>

            <!-- CHAFING DISHES -->
            <router-link to="/chafing-dishes" class="">
                <img src="../assets/chafing/20049a.webp" alt="" class="    rounded-lg shadow-md shadow-black">
                <p class="text-white text-center text-lg sm:text-xl font-semibold mt-4 lg:text-2xl">Chafing Dishes</p>
            </router-link>

            <!-- Juice Dispensers -->
            <router-link to="/juice-dispensers" class="">
                <img src="../assets/juice/20102.webp" alt="" class="    rounded-lg shadow-md shadow-black">
                <p class="text-white text-center text-lg sm:text-xl font-semibold mt-4 lg:text-2xl">Juice Dispensers</p>
            </router-link>

            <!-- SNACK SERVING SETS  -->
            <router-link to="/snack-serving-sets" class="">
                <img src="../assets/snack/20097.webp" alt="" class="    rounded-lg shadow-md shadow-black">
                <p class="text-white text-center text-lg sm:text-xl font-semibold mt-4 lg:text-2xl">Snack Serving Sets</p>
            </router-link>

          



            <!-- TROLLEY -->
            <router-link to="/trolley" class="">
                <img src="../assets/trollies/20010.webp" alt="" class="    rounded-lg shadow-md shadow-black">
                <p class="text-white text-center text-xl font-semibold mt-4 lg:text-2xl">Trolley</p>
            </router-link>



            <!-- <div class="hidden md:block">

            </div> -->
        </div>
    </section>



    <section id="about" class=" w-full  bg-gradient-to-b to-[#191812] from-[#121314] h-auto pb-32">
        <h1 class="pt-20 text-6xl heading text-center " style="font-family: 'Peignot';">About Us</h1>
        <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 p-5">
            <div class=" p-5 bg-gradient-to-r from-[#F39422] to-yellow-600  bg-opacity-50 m-4 rounded-md shadow-md shadow-gray-900 backdrop-blur justify-center items-center flex">
                <span class="text-base text-left  ">
                   Born out of Venus Industries, VS6 is a new budget brand offering 
to the hospitality industry founded by Mr. Vicky Khurana under the 
commendation of Mr. JK Khurana.
                </span>
                
                <lord-icon src="https://cdn.lordicon.com/zeabctil.json" trigger="loop" style="width:1200px;height:200px"
                    class="opacity-100 lg:-ml-5 lg:-mr-10 -mr-10 -ml-7  lg:w-[250px] lg:h-[250px]">
                </lord-icon>
                

            </div>
            <div class=" p-5 bg-gradient-to-r from-[#F39422] to-yellow-600  bg-opacity-50 m-4 rounded-md shadow-md shadow-gray-900 backdrop-blur justify-center items-center flex">
                <span class="text-base text-left  ">
                   Having served the hospitality 
industry for over 55 years in the luxury segment, Venus now has 
innovated & manufactured a completely new range for budget 
hotels, restaurants. caterers etc. 
                </span>
                
                <lord-icon src="https://cdn.lordicon.com/uukerzzv.json" trigger="loop" style="width:1200px;height:200px"
                    class="opacity-100 lg:-ml-5 lg:-mr-10 -mr-10 -ml-7  lg:w-[250px] lg:h-[250px]">
                </lord-icon>
                

            </div>
            <div class=" p-5 bg-gradient-to-r from-[#F39422] to-yellow-600  bg-opacity-50 m-4 rounded-md shadow-md shadow-gray-900 backdrop-blur justify-center items-center flex">
                <span class="text-base text-left  ">
                   Standing by our values of good 
product quality and innovative design, we bring to you a reliable 
and affordable range of products which include cutlery, barware, 
tableware, chafing dishes, snacks & trolleys, Buffet ware etc.
                </span>
                
                <lord-icon src="https://cdn.lordicon.com/gmzxduhd.json" trigger="loop" style="width:1200px;height:200px"
                    class="opacity-100 lg:-ml-0 lg:-mr-5 -mr-5 -ml-0  lg:w-[250px] lg:h-[250px]">
                </lord-icon>
                

            </div>




   
        
        </div>
        <div class="px-5 py-7 mt-7  mx-auto h-3/4 w-4/5 md:p-10  rounded-md  shadow-md shadow-gray-900 text-center text-2xl font-semibold  " style="background-image: linear-gradient( 112.7deg,  rgba(253,185,83,1) 11.4%, rgba(255,138,0,1) 70.2% );"
        >We Offer Quality and
            Products
            that you
            can
            boast on and prices you are happy to pay</div>



    </section>




    <section class="pb-20 hidden bg-blue-700">
        <h1 class=" text-6xl text-white text-center py-20 " style="font-family: 'Peignot';">TOP PRODUCTS</h1>

        <div class="carousel w-screen" data-flickity='{ "groupCells": 1 , "wrapAround":true}'>
            <div class="carousel-cell  bg-red-100"></div>
            
            
        </div>
    </section>



    


</template>



<style >

.hide{
    display: none;
}
@media (max-width:455px) {
   .hide{
    display: block;
} 
.show{
    display: none;
}
}











.containe .heading{
  font-family: 'Peignot';
  font-weight: 500;
  color: #d4af37;
}



.containe{
  background: url('@/assets/bg.webp');
  background-attachment: fixed;
  background-size: cover;
  background-position:top  center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

}

.containe::after{
  content:'';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.6;
  z-index: -1;
}









 #Catalodgue {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='700' preserveAspectRatio='none' viewBox='0 0 1440 700'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1027%26quot%3b)' fill='none'%3e%3crect width='1440' height='700' x='0' y='0' fill='rgba(161%2c 118%2c 10%2c 0.86)'%3e%3c/rect%3e%3cpath d='M67 700L767 0L891.5 0L191.5 700z' fill='url(%23SvgjsLinearGradient1028)'%3e%3c/path%3e%3cpath d='M526.2 700L1226.2 0L1908.7 0L1208.7 700z' fill='url(%23SvgjsLinearGradient1028)'%3e%3c/path%3e%3cpath d='M1389 700L689 0L380 0L1080 700z' fill='url(%23SvgjsLinearGradient1029)'%3e%3c/path%3e%3cpath d='M942.8 700L242.79999999999995 0L-187.70000000000005 0L512.3 700z' fill='url(%23SvgjsLinearGradient1029)'%3e%3c/path%3e%3cpath d='M882.9910426504825 700L1440 142.99104265048254L1440 700z' fill='url(%23SvgjsLinearGradient1028)'%3e%3c/path%3e%3cpath d='M0 700L557.0089573495175 700L 0 142.99104265048254z' fill='url(%23SvgjsLinearGradient1029)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1027'%3e%3crect width='1440' height='700' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1028'%3e%3cstop stop-color='rgba(112%2c 81%2c 5%2c 0.91)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(112%2c 81%2c 5%2c 0.91)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1029'%3e%3cstop stop-color='rgba(112%2c 81%2c 5%2c 0.91)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(112%2c 81%2c 5%2c 0.91)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
    }


  
    .auov {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1200' height='800' preserveAspectRatio='none' viewBox='0 0 1200 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2232%26quot%3b)' fill='none'%3e%3crect width='1200' height='800' x='0' y='0' fill='url(%23SvgjsLinearGradient2233)'%3e%3c/rect%3e%3cpath d='M0 0L399.74 0L0 286.3z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 286.3L399.74 0L444.39 0L0 311.92z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 311.92L444.39 0L719.01 0L0 555.14z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 555.14L719.01 0L999.8399999999999 0L0 568.92z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1200 800L750.97 800L1200 792.73z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1200 792.73L750.97 800L555.37 800L1200 368.20000000000005z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1200 368.20000000000005L555.37 800L239.57999999999998 800L1200 300.35z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1200 300.35L239.57999999999993 800L114.94999999999993 800L1200 228.38000000000002z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2232'%3e%3crect width='1200' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='8.33%25' y1='-12.5%25' x2='91.67%25' y2='112.5%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2233'%3e%3cstop stop-color='rgba(40%2c 0%2c 248%2c 0.83)' offset='0.02'%3e%3c/stop%3e%3cstop stop-color='rgba(17%2c 16%2c 66%2c 0.89)' offset='0.48'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 0.9)' offset='0.98'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-size: cover;
    }




    /* external css: flickity.css */




.carousel-cell{
  width: 31%;
  margin-right: 2%;
}



@media (max-width:770px) {

   .containe{
background-position: left center;
       background-attachment: scroll;
   }
}
/*
@media (min-width:375px) {
    .carousel-cell {
        height: 120px;
    }

}

@media (min-width:800px) {
    .carousel-cell {
        height: 190px;
    }

}

@media (min-width:961px) {

    
    .carousel-cell {
        height: 260px;
    }
}
*/


</style>

