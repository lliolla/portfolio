<template>
    <div class="py-2 mb-12 ">
       <h3  class="text-h3 font-weight-medium my-5" >Mon portfolio</h3>
       <p>Voici les projets réalisés durant ma formation ainsi que mes projets personnels</p>
        <div>
              <v-container>
                <v-row>
                  <v-col
                    v-for="i in 4"
                    :key="i"
                    cols="6"
                     md="4"
                  >
                    <v-card >
                      <v-img
                      :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                      aspect-ratio="1">
                      </v-img>
                     <v-card-title >
                        test
                      </v-card-title>
                     <v-card-subtitle>
                      sous titre
                     </v-card-subtitle>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
        </div>
        <v-btn color="success">voir plus</v-btn>
    </div>

</template>

<script>
export default {
name:'Portfolio'
}
</script>

<style>

</style>