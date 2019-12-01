@login
Feature: Login no sistema
	Como um usuário
	Gostaria de entrar no sistema somente com credenciais válidas
	
Background:
	Given que estou acessando a aplicação		
	
Scenario Outline: Deve validar regras de login
	When informo um email "<email>"
	And informo uma senha "<senha>"
	And clico no botão entrar
	Then visualizo a mensagem "<mensagem>"

Examples:
	| email                     | senha      | mensagem                         |
	| wylliam.mflores@gmail.com | 0123456789 | Bem vindo, Wylliam Flores!       |
	|                           | 0123456789 | Email é um campo obrigatório     | 
	| wylliam.mflores@gmail.com |            | Senha é um campo obrigatório     |
	| wylliam.mflores@gmail.com | invalida   | Problemas com o login do usuário | 
