const filmesRepository = require("../repositories/filmesRepository")

class filmesService{

    async mostrar(){
        return await filmesRepository.mostrar()
    }

    async criar(titulo, diretor, ano, genero){
        if(!(titulo&&diretor&&ano&&genero)){
            throw new Error("Todos os campos são necessarios!")
        }

        const novoFilme = ({titulo, diretor, ano, genero})

        return await filmesRepository.criar(novoFilme)
    }

    async atualizar(id, titulo, diretor, ano, genero){
        if(!(id&&titulo&&diretor&&ano&&genero)){
            throw new Error("Todos os campos são necessarios!")
        }

        const dadosAtualizados = ({titulo, diretor, ano, genero})

        return await filmesRepository.atualizar(id, dadosAtualizados)
    }

    async deletar(id){
        if(!(id)){
            throw new Error("Sem id de remoção!")
        }

        return await filmesRepository.deletar(id)
    }

    async buscar(query){
        if((query.titulo||query.diretor||query.ano||query.genero) === undefined){
            throw new Error("Filtro invalido")
        }

        return await filmesRepository.buscar(query)
    }
}

module.exports = new filmesService()