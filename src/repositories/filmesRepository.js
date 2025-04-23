const Filme = require('../models/filmesModel')


class filmeRepository {
    async mostrar(){
        return await Filme.find()
    }

    async criar(filme){
        return  await Filme.create(filme)
    }

    async atualizar(id, filme){
        return await Filme.findByIdAndUpdate(id, filme, {new:true})
    }

    async deletar(id){
        return await Filme.findByIdAndDelete(id)
    }

    async buscar(filtros){
        const {titulo, diretor, ano, genero} = filtros;
        let query = {}

        if (titulo) query.titulo = { $regex: titulo, $options: 'i' }
        if (diretor) query.diretor = { $regex: diretor, $options: 'i' }
        if (ano) query.ano = { $regex: ano, $options: 'i' }
        if (genero) query.genero = { $regex: genero, $options: 'i' };
    
        return await Filme.find(query)
      }
    }

module.exports = new filmeRepository();