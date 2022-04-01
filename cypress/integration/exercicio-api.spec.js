/// <reference types="cypress" />

describe('Testes da Funcionalidade Usuários', () => {
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
                    "email": "rafael.silva@qa.com.br",
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

     it.only('Deve editar um usuário previamente cadastrado', () => {
         

          cy.request('usuarios').then(response => {
               cy.log(response.body.usuarios[3]._id)
               cy.request({
                    method: 'PUT',
                    url: 'usuarios',
                    headers: {authorization: token},
                    body: {
                         "nome": "Eduardo Campesato",
                         "email": "eduardo.negrao.7@qa.com.br",
                         "password": "teste",
                         "administrador": "true"
                    }
               })
          })
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          //TODO: 
     });


})