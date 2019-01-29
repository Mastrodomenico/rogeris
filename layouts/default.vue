<template>
  <v-app dark>
    <v-toolbar :clipped-left="clipped" fixed app color="amber">      
      <v-toolbar-title>Barbearia Rogeris</v-toolbar-title>
    </v-toolbar>
    <v-content>
      
        <nuxt/>
     
    </v-content>
    <menu-app/>
  </v-app>
</template>




<script>
import menuApp from "~/components/Menu";

export default {
  data() {
    return {
      clipped: false
    };
  },
  components: {
    menuApp
  }
};
</script>
