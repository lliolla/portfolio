<template>
  
        <v-btn
            class="mx-2"
            fab
            dark
            color="primary"
            @click="$vuetify.goTo('#aboutMe', {duration: 500, easing: 'easeInOutCubic'})"
        >
            <v-icon dark>
                mdi-arrow-up-thick
            </v-icon>
    </v-btn>

</template>
<script>

export default {
    name:"ScrollToTop",
   
}
</script>
<style scoped>
.v-btn{
    position: fixed;
  right: 40px;
  bottom: 40px;

}
</style>