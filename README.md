# Sistema CRUD de filmes

API RESTful de um sistema CRUD para filmes

## Tecnologias:

* Node.js
* Express
* MongoDB
* Mongoose

## Funções:

1. Mostra filmes
2. Criar filmes
3. Atualizar filmes
4. Deletar filmes
5. Buscar filmes

## Endpoints:

 Filmes(/filmes)

GET /filmes → Mostra os filmes

POST /filmes → Cria um filmes

PUT /filmes/:id → Atualiza um filmes

DELETE /filmes/:id → Deleta um filmes

GET /filmes/busca?titulo=Jaguará_do_Sul → Busca um filme por titulo

## Modelos:

 Filme

```
 {
   titulo: String,
   diretor: String,
   ano: String,
   genero: String
 }
```

## Licença

Este projeto está licenciado sob a Licença MIT.  
Veja o arquivo [LICENSE](./LICENSE) para mais informações.
