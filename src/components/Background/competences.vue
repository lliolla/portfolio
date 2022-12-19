<template>
  <v-row class="d-flex">
              <v-col 
              v-for="logo in logos" 
              :key="logo.src"
              aspect-ratio="1"
              cols="2"
              class="img-logo"> 
              <img :src="logo.src" :alt="logo.alt" > 
              </v-col>
  </v-row>
        
</template>
<script>
export default {
    name:"competences",
    data(){
  return{
    logos: [
      {src:"require(`//public/images/logos/vuetify.svg`)", alt:'vuetify',class:'img-logo',col:'2'},
      {src:'../../public/images/logos/wordpress-blue.svg', alt:'wordpress',class:'img-logo',col:'2'},
      {src:'../../public/images/logos/vue-js-1.svg', alt:'vue-js',class:'img-logo',col:'2'},
      {src:'../../public/images/logos/nodejs-2.svg', alt:'node-js',class:'img-logo',col:'2'},
      {src:'../../public/images/logos/logo-javascript.svg', alt:'javascript',class:'img-logo',col:'2'},
      {src:'../../public/images/logos/git.svg', alt:'git',class:'img-logo',col:'2'},


    ]
  }
 }
}
</script>