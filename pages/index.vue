<template>
  <v-container class="pb-5">
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <div class="text-xs-center mt-5 mb-5">
          <v-avatar :tile="false" size="150" color="grey lighten-4">
            <img src="/logo.jpg" alt="avatar">
          </v-avatar>
        </div>
      </v-flex>
    </v-layout>
    <v-layout justify-center align-center>
      <v-subheader>Olá, Daniel</v-subheader>
    </v-layout>
     <v-layout>
      <v-btn block color="amber" dark router to="/horarios/mes">Marcar Horário</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  }
};
</script>
