/// <reference types="cypress" />


describe('Testes da Funcionalidade Usuários', () => {
     let token
     before(() => {
          cy.token('eduardo.negrao.7@qa.com.br', 'teste').then(tkn =>{token})
     });

     it('Deve validar contrato de usuários', () => {
          //TODO: 
     });

     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios',
               body: {
                    "quantidade": 3,
                    "usuarios": [
                         {
                              "nome": "Fulano Souza",
                              "email": "ciclano@qa.com.br",
                              "password": "teste1",
                              "administrador": "true",
                              "_id": "6qNcZqYsGjLJFVi1"
                            },
                            {
                              "nome": "Eduardo Campesato",
                              "email": "eduardo.campesato.7@qa.com.br",
                              "password": "teste",
                              "administrador": "true",
                              "_id": "IrLCe9gRkXqNDUna"
                            },
                            {
                              "nome": "Rafael Silva",
                              "email": "rafael.silva@qa.com.br",
                              "password": "teste",
                              "administrador": "true",
                              "_id": "ahH3ppWHBluq6xad"
                            },
                            {
                              "nome": "Eduardo Negrão",
                              "email": "eduardo.negrao.7@qa.com.br",
                              "password": "teste",
                              "administrador": "true",
                              "_id": "gItaQgLXY4bjR7UG"
                            },
                            {
                              "nome": "Rafael Silva",
                              "email": "rafael.silv@qa.com.br",
                              "password": "teste",
                              "administrador": "true",
                              "_id": "gY4vjlAcWfwPIoPd"
                            }
                    ]
               }

          })
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          cy.request({
               method: 'POST',
               url: 'usuarios',
               body: {
                    "nome": "Rafael Silva de Souza",
                    "email": "rafael.silva1@qa.com.br",
                    "password": "teste",
                    "administrador": "true"
               }
          })
     });

     it('Deve validar um usuário com email inválido', () => {
          cy.request({
               method: 'POST',
               url: 'usuarios',
               body: {
                    "nome": "Rafael Silva",
                    "email": "rafael.silv#qa.com.br",
                    "password": "teste",
                    "administrador": "true"
               }
          })
     });

     it('Deve editar um usuário previamente cadastrado', () => {
         

          cy.request('usuarios').then(response => {
               let id = response.body.usuarios[3]._id
               cy.request({
                    method: 'PUT',
                    url: `usuarios/${id}`,
                    headers: {authorization: token},
                    body: 
                    {
                         "nome": "Eduardo Campesato 001",
                         "email": "eduardo.negrao.7@qa.com.br",
                         "password": "teste",
                         "administrador": "true"
                    }
                  
               })
          })
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          cy.request('usuarios').then(response => {
               let id = response.body.usuarios[3]._id
               cy.request({
                    Method: 'Delete',
                    url: `usuarios/${id}`,
                    headers: {authorization: token}
               });


})              
})