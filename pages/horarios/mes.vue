<template>
  <v-container class="pb-5">
		<v-layout justify-center align-center>
      <v-subheader>Escolha um mês disponível</v-subheader>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list>
            <v-list-tile @click="escolher('Janeiro')">
              <v-list-tile-content>
                <v-list-tile-title>Janeiro</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
						<v-divider></v-divider>
						<v-list-tile @click="escolher('Fevereiro')">
              <v-list-tile-content>
                <v-list-tile-title>Fevereiro</v-list-tile-title>
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
  data() {
    return {
      items: []
    };
  },
  methods: {
    escolher(mes){
      this.$store.commit('horario/setMes', mes);
      this.$router.push('/horarios/dia');
    }
  }
};
</script>

<style>
</style>
