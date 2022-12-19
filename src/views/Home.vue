<template>
<div>

  
  
    <v-container class="text-center mx-auto">
       
          <AboutMe class="mb-5 "/>

          <Portfolio/>
    
          <Background/>
      
          <Contact/>
 
    </v-container>

 
 </div>

</template>

<script>
// @ is an alias to /src
import AboutMe from '@/components/AboutMe.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'
import Background from '../components/Background/Background.vue'



export default {
  name: 'Home',
  components: {
    AboutMe,
    Portfolio,
    Contact,
    Background,
    
  }
}
</script>
<style scoped>
.container{
  width:90%
}
section{
    margin-top: 2.5rem;
}
#contact{
   background-image: url("../../public/images/staticmap.png");

}


</style>