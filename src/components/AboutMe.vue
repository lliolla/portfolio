<template>
<section id="aboutMe" class="d-flex flex-row justify-space-between ">
        <div class="d-flex flex-column justify-center text-left col-4 ">
            <div>  <h2 class="text-h5 font-weight-medium mb-2 text-uppercase"> Bonjour,<br/> Je m'appelle Fanny JOBERT</h2>
            <p class="text-p my-5">Je suis developpeuse Fullstack Javascript</p></div>
            <v-btn 
            elevation="3"
            color="primary1"
            large
            target="_blank"
             href="/public/CV.pdf"
              download
            class="pX-4 mX-5 my-5 white--text"> 
             Télécharger mon CV 
            
            </v-btn>
        </div>
        <div  class="d-flex text-right col-7 " >
            <img class="img" src="../../public/images/dev.svg" alt="image developpeur">
        </div>
 
</section>
</template>

<script>
export default {
    name:'AboutMe',
}
</script>
 <style scoped>
.img,img {
  width: 100%;
  height: auto;
  padding:0px;
  margin:0px;
}

.col-4, .col-7{
    padding: 0px;
}

 </style>>
 


