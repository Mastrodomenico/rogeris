export const state = () => ({
	mes: "",
	dia: "",
	horario: "",
	servico: {
		nome: "",
		valor: "",
		tempo: ""
	}
})

export const mutations = {
	setMes(state, value) {
		state.mes = value
	},
	setDia(state, value) {
		state.dia = value
	},
	setHorario(state, value) {
		state.horario = value
	},
	setServico(state, value) {
		state.servico.nome = value.nome
		state.servico.valor = value.valor
		state.servico.tempo = value.tempo
	}
}