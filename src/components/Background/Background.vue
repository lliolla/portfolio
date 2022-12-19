<template>
  <div class="background py-2 mb-12">
       <div class="container">
       <h3  class="text-h3 font-weight-medium my-5" >Mon parcours</h3>
       
        <div class="gird">
          <v-tabs
            color="cyan darken-1"
                grow
          >
            <v-tab>FORMATION</v-tab>
            <v-tab>EXPERIENCES PROFESSIONNELLLES</v-tab>
            <v-tab>COMPETENCES</v-tab>
            <v-tab-item class="ma-2">
                  <exp/>
            </v-tab-item>
            <v-tab-item class="ma-2">
                  <formation/>
            </v-tab-item>
            <v-tab-item class="ma-2">
                <competences/>
             </v-tab-item>
          </v-tabs>
        </div>
    </div>
  </div>
</template>

<script>
import competences from "../Background/competences.vue"
import formation from "../Background/formation.vue"
import exp from "../Background/exp.vue"

export default {
name:'Background',
components: {
 competences,
 formation,
 exp
},
 

}
</script>

<style>
.v-expansion-panel-content{
  text-align: left;
}
img{
  width:40%;
  margin:20px;
}
</style>