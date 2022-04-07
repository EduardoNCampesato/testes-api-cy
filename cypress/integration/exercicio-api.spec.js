/// <reference types="cypress" />
import contrato from '../contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {
     let token
     before(() => {
          cy.token('eduardo.negrao.7@qa.com.br', 'teste').then(tkn =>{token})
     });

     it('Deve validar contrato de usuários', () => {
          cy.request('usuarios').then(response => {
               return contrato.validateAsync(response.body)
          }) 
     });

     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios',          
          }).then(response =>{
               expect(response.status).to.equal(200)
          })
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          cy.request({
               method: 'POST',
               url: 'usuarios',
               body: {
                    "nome": "Rafael Souza",
                    "email": "rafael.souza.teste001@qa.com.br",
                    "password": "teste",
                    "administrador": "true"
               },
               failOnStatusCode: false
          }).then(response => {
               expect(response.body.message).to.equal('Cadastro realizado com sucesso')
               expect(response.status).to.equal(201)
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
               },
               failOnStatusCode: false
          }).then(response => {
               expect(response.status).to.equal(400)
          })
                             
          })
          


     it('Deve editar um usuário previamente cadastrado', () => {
         

          cy.request('usuarios').then(response => {
               let id = response.body.usuarios[3]._id
               cy.request({
                    method: 'PUT',
                    url: `usuarios/${id}`,
                    headers: {authorization: token},
                    body: 
                    {
                         "nome": "Eduardo Campesato 00",
                         "email": "eduardo.negrao.00@qa.com.br",
                         "password": "teste",
                         "administrador": "true"
                    }
                  
               }).then(response => {
                    expect(response.body.message).to.equal('Registro alterado com sucesso')
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
               }).then(response => {
                    expect(response.status).to.equal(200)
               })


})              
})
});

