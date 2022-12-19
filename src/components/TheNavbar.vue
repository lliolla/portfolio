<template>

  <div   class="container mx-auto">  
    <v-toolbar 
    class="my-6"
    flat>
      
        <v-toolbar-title class="text-h5 font-weight-bold cyan--text " >
           <span>F</span>anny
         </v-toolbar-title>
    
        <v-toolbar-title>
            <v-btn text class="font-weight-bold cyan--text" @click="$vuetify.goTo('#aboutMe', {duration: 500, easing: 'easeInOutCubic'})">A propos</v-btn>
            <v-btn text  class="font-weight-bold cyan--text" @click="$vuetify.goTo('#portfolio', {duration: 500, easing: 'easeInOutCubic'})">Portfolio</v-btn>
            <v-btn text class="font-weight-bold cyan--text" @click="$vuetify.goTo('#background', {duration: 500, easing: 'easeInOutCubic'})">Mon parcours</v-btn>
            <v-btn text class="font-weight-bold cyan--text" @click="$vuetify.goTo('#contact', {duration: 500, easing: 'easeInOutCubic'})">Contact</v-btn>
        </v-toolbar-title> 
       
            
    </v-toolbar>
    </div>
  


 
</template>

<script>
export default {
name : 'TheNavbar',

}

</script>

<style>
.v-toolbar__content, .v-toolbar__extension{
    display: flex;
    justify-content: space-between;
    padding: 0px;
}
</style>