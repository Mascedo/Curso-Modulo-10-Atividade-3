const filmesService = require("../services/filmesService")


exports.mostrarFilmes = async (req, res) => {
    try{
        const filmes = await filmesService.mostrar()
        res.status(200).json(filmes)
    } catch (erro){
        res.status(500).json({erro: "Erro ao mostrar filmes", detalhes: erro.message})
    }
}  

exports.criarFilme = async (req, res) => {
    try{
        const {titulo, diretor, ano, genero} = req.body
        const novoFilme = await filmesService.criar(titulo, diretor, ano, genero)
        res.status(201).json(novoFilme)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.atualizarFilme = async (req, res) => {
    try{
        const {titulo, diretor, ano, genero} = req.body
        const id = req.params.id   
        const novoFilme = await filmesService.atualizar(id, titulo, diretor, ano, genero)
        res.status(201).json(novoFilme)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.deletarFilme = async (req, res) => {
    try{
        const id = req.params.id
        await filmesService.deletar(id)
        res.status(201).json("Filme removido!")
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.buscarFilme = async (req, res) => {
    try{
        const response = await filmesService.buscar(req.query)
        res.status(200).json(response)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}