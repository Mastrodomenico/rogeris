<template>
  <v-container class="pb-5">
    <v-subheader>Confirmar</v-subheader>
    
    <v-flex xs12>
      <v-card color="transparent darken-2" class="white--text">
        <v-layout>
          <v-flex xs5>
            <v-img src="/corte/1.jpg" height="125px" contain></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{$store.state.horario.servico.nome}}</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
				<v-card-actions class="pa-3">
					Horário:
          <v-spacer></v-spacer>
					 {{$store.state.horario.dia}} de {{$store.state.horario.mes}} às {{$store.state.horario.horario}}      
        </v-card-actions>
				<v-card-actions class="pa-3">
					Valor:
          <v-spacer></v-spacer>
					 {{$store.state.horario.servico.valor}}       
        </v-card-actions>
				<v-card-actions class="pa-3">
					Duração:
          <v-spacer></v-spacer>
					{{$store.state.horario.servico.tempo}}    
        </v-card-actions>
      </v-card>
    </v-flex>
		<div>
      <v-btn block color="amber" dark>Marcar horário</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>