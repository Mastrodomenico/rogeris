<template>
  <v-container class="pb-5">
		<v-layout justify-center align-center>
      <v-subheader>Preencha com seus dados atualizados</v-subheader>
    </v-layout>
    <v-form ref="form" lazy-validation>
      <v-text-field v-model="nome" label="Name" required></v-text-field>
      <v-text-field v-model="email" label="Telefone" required></v-text-field>
			<v-text-field v-model="telefone" label="E-mail" required></v-text-field>

      <v-btn color="amber" block>Salvar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    nome: "Daniel Mastrodomenico",
    email: "daniel@clienteagente.com.br",
    telefone: "11 95075-5377",
  }),
};
</script>

<style>
</style>
