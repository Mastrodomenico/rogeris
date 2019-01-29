<template>
  <v-container class="pb-5">
		<v-layout justify-center align-center>
      <v-subheader>Escolha um horário disponível</v-subheader>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list>
            <v-list-tile @click="escolher('08:00')">
              <v-list-tile-content>
                <v-list-tile-title>08:00 <small> do dia</small> {{$store.state.horario.dia}} <small>de</small> {{$store.state.horario.mes}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile  @click="escolher('08:30')">
              <v-list-tile-content>
                <v-list-tile-title>08:30 <small> do dia</small> {{$store.state.horario.dia}} <small>de</small> {{$store.state.horario.mes}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile  @click="escolher('09:00')">
              <v-list-tile-content>
                <v-list-tile-title>09:00 <small> do dia</small> {{$store.state.horario.dia}} <small>de</small> {{$store.state.horario.mes}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile  @click="escolher('09:30')">
              <v-list-tile-content>
                <v-list-tile-title>09:30 <small> do dia</small> {{$store.state.horario.dia}} <small>de</small> {{$store.state.horario.mes}}</v-list-tile-title>
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
    escolher(horario){
      this.$store.commit('horario/setHorario', horario);
      this.$router.push('/servicos');
    }
  }
};
</script>

<style>
</style>
