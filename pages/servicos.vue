<template>
  <div>
    <v-layout justify-center align-center>
      <v-subheader>
        Dia {{$store.state.horario.dia}} de {{$store.state.horario.mes}} às {{$store.state.horario.horario}}
      </v-subheader>
    </v-layout>
    <v-layout justify-center align-center>
      <v-subheader>Escolha o serviço que deseja</v-subheader>
    </v-layout>
    <v-toolbar color="ambler" dark tabs>
      <v-tabs  v-model="tab" color="amber" grow>
        <v-tabs-slider color="black"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat class="ma-3">
          <v-flex xs12>
            <v-card v-for="n in 4" :key="n" class="mb-3">
              <v-img src="/corte/1.jpg" height="200px"></v-img>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Corte simples</div>
                  <div class="grey--text">Valor: R$ 20,00</div>
                  <span class="grey--text">Tempo estimado: 30 min</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn block color="amber" @click="escolher('Corte Simples', 'R$ 20,00', '30 min')">Quero este</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    tab: null,
    items: ["Cabelo", "Barba", "Combos"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }),
  methods:{
    escolher(nome, valor, tempo){
      this.$store.commit('horario/setServico', {nome, valor, tempo})
      this.$router.push('/checkout');
    }
  }
};
</script>

<style>
</style>
