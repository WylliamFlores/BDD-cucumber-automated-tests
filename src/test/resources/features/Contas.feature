@contas
Feature: Cadastro, edição e exclusão de contas
Como um usuário 
Gostaria de cadastrar editar e excluir contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Background:
	Given que estou acessando a aplicação Teste
	When informo o email "wylliam.mflores@gmail.com"
	And informo a senha "0123456789"
	And clico em entrar
	Then visualizo a página inicial
	

Scenario: Deve inserir uma conta com sucesso
	When seleciono Menu Contas Adicionar
	And informo o nome da conta "Conta Wylliam""
	And clico no botão Salvar 	
	Then a conta é inserida com sucesso	


Scenario: Não deve inserir uma conta sem nome
	When seleciono Menu Contas Adicionar
	And clico no botão Salvar
	Then sistema emite a mensagem  que o nome da conta é obrigatório
	

Scenario: Não deve inserir uma conta com nome já existente
	When seleciono Menu Contas Adicionar
	And informo o nome da conta existente "Conta com movimentacao"
	And clico no botão Salvar
	Then sistema emite a mensagem que já existe uma conta com esse nome
	

Scenario: Deve editar conta com sucesso
	When seleciono Menu Contas Listar
	And clico para editar uma conta
	And altero o nome para "Conta Alterada"
	And clico no botão Salvar 
	Then sistema emite a mensagem que a conta foi alterada com sucesso	
	

Scenario: Deve excluir conta com sucesso
	When seleciono Menu Contas Listar
	And clico para excluir uma conta
	Then sistema emite a mensagem que a conta foi excluída com sucesso
	

Scenario: Não deve excluir conta com movimentação
	When seleciono Menu Contas Listar
	And clico para excluir uma conta com movimentação
	Then sistema emite a mensagem que a conta esta em uso	