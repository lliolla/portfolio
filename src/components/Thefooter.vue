<template>
    <v-footer 
    class="container mx-auto d-flex justify-center text-h6  ma-2">
        <div>
        @{{ date}} {{copyright}}  — Développé par <strong>{{author}}</strong>
        </div>
    </v-footer>
</template>
    
<script>

export default ({
    name:"Thefooter",
    data:()=>{
        return {
        copyright:'Tous droits réservés' ,
	date: new Date().getFullYear(),
	author: 'Fanny Jobert',
        }
    }
   
})
</script>
<style scoped>
.theme--light.v-footer{
background-color:white ;
}
</style>