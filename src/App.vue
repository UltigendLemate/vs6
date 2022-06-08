<template>
  <nav
    class="
      bg-zinc-900
      w-full
      right-0
      text-white
      z-10
      px-7
      shadow-lg
      flex
      md:hidden
      justify-between
      items-center
    " id="head"
  >
    <div class="left flex items-center">
      <img
        src="./assets/logo.png"
        class="h-[70px] md:h-[80px] bg-transparent md:my-3"
        alt=""
      />
    </div>

    <div class="lg:w-[70%] md:w-4/5">
      <div
        @click="MenuOpen()"
        class="
          md:hidden
          text-white
          relative
          left-4
          cursor-pointer
          flex
          align-middle
          items-center
          text-6xl
          h-28
        "
      >
        <i
          :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"
          class="my-auto"
        ></i>
      </div>

      <ul
        class="
          md:flex
          navlist
          md:items-center md:w-full md:justify-between md:px-0
          px-5
          md:pb-0
          z-50
          md:static
          absolute
          text-2xl
          bg-zinc-800
          font-semibold
          text-white
          md:text-white md:bg-transparent
          overflow-x-hidden
          w-full
          duration-700
          ease-in
        "
        :class="[open ? 'left-0' : 'left-[-100%]']"
      >
        <li class="md:text-3xl my-6">
          <router-link to="/" class="hover:text-[#EE6C4D]">Home</router-link>
          <!-- 243980 -->
        </li>
        <li class="md:text-3xl my-6">
          <a href="./#about" class="hover:text-[#EE6C4D]"
            >About Us</a
          >
        </li>
        <li class="md:text-3xl my-6" @click="Catalog()">
          <span class="hover:text-[#EE6C4D]"
            >Catalogue <i :class="[cata ? 'bi bi-x' : 'bi bi-chevron-down']"></i
          ></span>
        </li>

        <div
          class="
            mb-3
            w-full
            text-base
            grid
            duration-700
            ease-in
            scale-110
            
            
            p-5
            px-3
            bg-zinc-700
            grid-cols-2
          "
          :class="[cata ? 'grid' : 'hidden']"
        >
          <ul class="mr-3">
            <li class="my-3.5 py-1 pl-2 shadow-md bg-white bg-opacity-10 rounded-xl ">
              <router-link to="/cutlery">Cutlery</router-link>
            </li>
            <li class="my-3.5 py-1 pl-2 shadow-md bg-white bg-opacity-10 rounded-xl  whitespace-nowrap">
              <router-link to="/bar-accessories">Bar Accessories</router-link>
            </li>
             <li class="my-3.5 py-1 pl-2 shadow-md bg-white bg-opacity-10 rounded-xl ">
            <router-link to="/belly-serving-sets">Belly Serving Sets</router-link>
          </li>
          
            <li class="my-3.5 py-1 pl-2 shadow-md bg-white bg-opacity-10 rounded-xl ">
              <router-link to="/snack-serving-sets"
                >Snack Serving Sets</router-link
              >
            </li>
          </ul>
          <ul class="ml-3">
             <li class="my-3.5 py-1 pl-2 shadow-md bg-white bg-opacity-10 rounded-xl ">
            <router-link to="/trolley">Trolley</router-link>
          </li>
          <li class="my-3.5 py-1 pl-2 shadow-md bg-white bg-opacity-10 rounded-xl ">
            <router-link to="/chafing-dishes">Chafing Dishes</router-link>
          </li>
          <li class="my-3.5 py-1 pl-2 shadow-md bg-white bg-opacity-10 rounded-xl ">
            <router-link to="/juice-dispensers">Juice Dispensers</router-link>
          </li>
            <li class="my-3.5 py-1 pl-2 shadow-md bg-white bg-opacity-10 rounded-xl ">
              <router-link to="/tableware">Tableware</router-link>
            </li>
         
          </ul>
        </div>
        <!-- <li class="md:text-3xl my-6">
          <router-link to="/" class="hover:text-[#EE6C4D]"
            >Contact Us</router-link
          >
        </li> -->
        <!-- <button class="md:mx-4 contact mt-0 rounded-3xl mb-6 md:mt-6">
       <router-link to="/" class=" ">Contact Us</router-link>
     </button> -->
      </ul>
    </div>
  </nav>

  <nav
    class="
      md:flex
      hidden
      menuonpc
      w-full
     
      justify-around
      md:justify-between
      bg-zinc-900
      py-2
      text-xl
    " id="head"
  >
    <!-- LOGO  DIV  -->
    <div class="h-20 lg:pl-20 md:pl-5">
      <img src="./assets/logo.png" alt="" class="bg-transparent h-20" />
    </div>
    <!-- MENU DIV  -->
    <div class="flex space-x-6 items-center md:px-12">
      <router-link to="/" class="text-white px-3 my-auto"> Home </router-link>

      <div class="dropdown ">
        <span class="label px-3 py-2">
          Catalogue<svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi inline ml-2 font-extrabold bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            /></svg
        ></span>
      
        <ul class="items -left-[110px] overflow-hidden">
          <li class="">
            <router-link to="/cutlery">Cutlery</router-link>
          </li>
          <li class="">
            <router-link to="/bar-accessories">Bar Accessories</router-link>
          </li>
           <li class="">
            <router-link to="/belly-serving-sets">Belly Serving Sets</router-link>
          </li>
          
          <li class="">
            <router-link to="/snack-serving-sets"
              >Snack Serving Sets</router-link
            >
          </li>
        </ul>
        <ul class="items items2 left-20 overflow-x-hidden">
          <li class="">
            <router-link to="/trolley">Trolley</router-link>
          </li>
          <li class="">
            <router-link to="/chafing-dishes">Chafing Dishes</router-link>
          </li>
          <li class="">
            <router-link to="/juice-dispensers">Juice Dispensers</router-link>
          </li>
          <li class="">
            <router-link to="/tableware">Tableware</router-link>
          </li>
         
        </ul>
      </div>
      <a href="./#about" class="hover:text-[#EE6C4D] text-white"
            >About Us</a
          >

      <!-- <router-link to="/contact" class="text-white"> Contact Us </router-link> -->
    </div>
  </nav>

  <router-view/>

  

  <footer class="">
    <div class="lg:grid footer pb-7 bg-black text-white lg:grid-cols-4">
      <div
        class="
          flex
          col-span-1
          px-20
          sm:px-32
          md:pl-10
          justify-center
          pt-7
          lg:pr-0 lg:pb-5
        "
      >
        <img src="./assets/logo.png" alt="" class="bg-transparent" />
      </div>

      <div class="grid col-span-1 justify-center">
        <h2 class="text-2xl md:text-3xl font-bold mt-10 uppercase text-center">Quick Links</h2>

        <ul class="">
          <li class="text-center text-2xl my-2">
            <router-link to="/" class="hover:text-[#EE6C4D]">Home</router-link>
          </li>
          <li class="text-center text-2xl my-2">
            <router-link to="/about" class="hover:text-[#EE6C4D]"
              >About Us</router-link
            >
          </li>
          <li class="text-center text-2xl my-2">
            <a href="/#Catalogue" class="hover:text-[#EE6C4D]"
              >Catalogue</a
            >
          </li>
        </ul>

        <div class="grid grid-cols-3 gap-x-6 my-2">
          <img
            class="bg-transparent"
            src="https://img.icons8.com/fluency/60/000000/instagram-new.png"
          />
          <img
            class="bg-transparent"
            src="https://img.icons8.com/fluency/60/000000/facebook-new.png"
          />
          <img
            class="bg-transparent"
            src="https://img.icons8.com/color/60/000000/linkedin-circled--v1.webp"
          />
        </div>
      </div>

      <div
        class="
          lg:text-justify
          text-center
          col-span-2
          text-lg
          grid
          justify-center
        "
      >
        <p class="text-2xl md:text-3xl font-bold mt-10 mb-5 lg:mb-6 ">VENUS INDUSTRIES UNIT - II</p>
        <!-- <p class="text-2xl text-center lg:-ml-28 font-bold -mt-3 mb-9">VENUS INDUSTRIES UNIT - II</p> -->
        <div
          class="
            lg:grid
            md:text-xl
            lg:text-lg lg:-mt-10
            justify-center
            gap-x-3
            grid-cols-2
          "
        >
          <div class="lg:mr-4">
            <span class="font-bold">Office: </span>
            <p class="mb-4">
              1, Basai Road,
              Moti Nagar <br> New Delhi-110015
            </p>
            <span class="font-bold">Manufacturing Unit: </span>
            <p class="mb-4">
              Plot No. 386, Phase - 1 <br> Industrial Estate HSIIDC Barh <br> Sonepat, Haryana
            </p>
          </div>

          <div class="">
            <p class="">
              <span class="font-bold">Call Us: </span>
              <a href="tel:+91-11-43163300" class="block"
                ><i class="bi bi-telephone-fill"></i> +91-11-43163300</a
              >
              <a href="tel:+91-11-45061071" class="block"
                ><i class="bi bi-telephone-fill"></i> +91-11-45061071</a
              >
            </p>

            <div class="hidden md:block">
              <p class="font-bold mt-4">Email Us:</p>
              <a href="mailto:desiccantsindia@yahoo.co.in" class="inline-block">
                <i class="bi bi-envelope-fill"></i> contact@vs6.in</a
              >
            </div>
          </div>
        </div>

        <div class="md:hidden">
          <p class="font-bold mt-4 md:mt-0">Email Us:</p>
          <a href="mailto:desiccantsindia@yahoo.co.in" class="inline-block"
            ><i class="bi bi-envelope-fill"></i> contact@vs6.in</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.heading {
    background: linear-gradient(to bottom, #bba473 22%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#a2710f 78%) !important; 
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    color: #fff;
    position: relative;
	margin: 0;
  @apply text-[45px] md:text-6xl;
}

.heading:after {
    background: none;
    content: attr(data-heading);
    left: 0;
	top: 0;
    z-index: -1;
    position: absolute;
    text-shadow: 
		-1px 0 1px #c6bb9f, 
		0 1px 1px #c6bb9f, 
		5px 5px 10px rgba(0, 0, 0, 0.4),
		-5px -5px 10px rgba(0, 0, 0, 0.4);
}
.heading{
    font-family: Peignot,sans-serif;

}


.menuonpc ul {
    list-style: none;

    z-index: 20;
}

.dropdown {
    position: relative;

    color: #fff;
    display: grid;

}

.label {
    cursor: pointer;
    background: inherit;

    transition: all 0.3s;
}

.items a {
    color: inherit;
    display: flex;
    width:210px !important;
    align-items: center;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: all 0.2s;
}
.items router-link{
    width:250px !important;

}
.items2{
    max-width: 180px !important;
}

.items a:hover {
    border-left: 5px solid;
    background: inherit;
}

.fa-brands,
.fa-solid {
    margin-right: 10px;
}

.items {


    background: #263238;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 48px;
    transform-origin: top;
    transform: scaleY(1);
}

.dropdown:hover>.items {
    opacity: 1;
    visibility: visible;
    height: unset;
    transform: scaleY(1);
    overflow: visible;
    /* position: relative; */
}

.dropdown:hover>.label {
    background: rgb(224, 87, 87);
    /* position: absolute; */

}
</style>
<script>
export default {
  data() {
    return {
      open: false,
      cata: false,
    };
  },
  methods: {
    MenuOpen() {
      this.open = !this.open;
    },
    Catalog() {
      this.cata = !this.cata;
    },
  },
  watch:{
    $route (to){
      this.cata= false;
        this.open = false;
    }
} 
};
</script>

