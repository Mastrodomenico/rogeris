<template>
  <v-container class="pb-5">
		<v-layout justify-center align-center>
      <v-subheader>Escolha um dia disponível</v-subheader>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list>
            <v-list-tile @click="escolher('01')">
              <v-list-tile-content>
                <v-list-tile-title>01 de {{$store.state.horario.mes}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile @click="escolher('02')">
              <v-list-tile-content>
                <v-list-tile-title>02 de {{$store.state.horario.mes}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile @click="escolher('03')">
              <v-list-tile-content>
                <v-list-tile-title>03 de {{$store.state.horario.mes}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile @click="escolher('04')">
              <v-list-tile-content>
                <v-list-tile-title>04 de {{$store.state.horario.mes}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile @click="escolher('05')">
              <v-list-tile-content>
                <v-list-tile-title>05 de {{$store.state.horario.mes}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile @click="escolher('06')">
              <v-list-tile-content>
                <v-list-tile-title>06 de {{$store.state.horario.mes}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    escolher(dia){
      this.$store.commit('horario/setDia', dia);
      this.$router.push('/horarios/horario');
    }
  }
};
</script>

<style>
</style>
