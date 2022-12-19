<template>
  <v-app >
    
    <v-main class="pt-0.5">
         <TheNavbar/>
         <ScrollToTop/>
      <router-view/>
      <Thefooter/>
    </v-main>
       
  </v-app>
</template>
<script>
import TheNavbar from '@/components/TheNavbar.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import Thefooter from '@/components/Thefooter.vue'


export default {
components: {
    TheNavbar,
    ScrollToTop,
    Thefooter,
  }    
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cambay&display=swap');

#app{
     font-family: "Cambay", Helvetica, Arial;
     font-size: 20px;
}

</style> 