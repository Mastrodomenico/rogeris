<template>
  <v-container class="pb-5">
    <v-subheader>Seus Horário</v-subheader>
    
    <v-flex xs12>
      <v-card color="transparent darken-2" class="white--text">
        <v-layout>
          <v-flex xs5>
            <v-img src="/corte/1.jpg" height="125px" contain></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">Corte simples</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
				<v-layout>
          <v-flex xs5>
            <v-img src="/corte/1.jpg" height="125px" contain></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">Barba completa</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
				<v-card-actions class="pa-3">
					Horário:
          <v-spacer></v-spacer>
					 10 de Janeiro às 08:00         
        </v-card-actions>
				<v-card-actions class="pa-3">
					Valor:
          <v-spacer></v-spacer>
					 R$ 20,00       
        </v-card-actions>
				<v-card-actions class="pa-3">
					Duração:
          <v-spacer></v-spacer>
					15 min  
        </v-card-actions>
      </v-card>
    </v-flex>
		<div>
      <v-btn block color="amber" dark router to="/horarios/mes">Marcar um Horário</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>