$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Contas.feature");
formatter.feature({
  "line": 2,
  "name": "Cadastro, edição e exclusão de contas",
  "description": "Como um usuário \r\nGostaria de cadastrar editar e excluir contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro,-edição-e-exclusão-de-contas",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@contas"
    }
  ]
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação Teste",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "informo o email \"wylliam.mflores@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "informo a senha \"0123456789\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico em entrar",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.queEstouAcessandoAAplicaçãoTeste()"
});
formatter.result({
  "duration": 5131356694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wylliam.mflores@gmail.com",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoOEmail(String)"
});
formatter.result({
  "duration": 126004622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoASenha(String)"
});
formatter.result({
  "duration": 36197787,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoEmEntrar()"
});
formatter.result({
  "duration": 509129219,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 33872408,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro,-edição-e-exclusão-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "seleciono Menu Contas Adicionar",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "informo o nome da conta \"Conta Wylliam\"\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clico no botão Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "a conta é inserida com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.selecionoMenuContasAdicionar()"
});
formatter.result({
  "duration": 497835100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta Wylliam",
      "offset": 25
    }
  ],
  "location": "ContasSteps.informoONomeDaConta(String)"
});
formatter.result({
  "duration": 48117025,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoNoBotãoSalvar()"
});
formatter.result({
  "duration": 316570307,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 17801573,
  "status": "passed"
});
formatter.after({
  "duration": 2445880282,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação Teste",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "informo o email \"wylliam.mflores@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "informo a senha \"0123456789\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico em entrar",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.queEstouAcessandoAAplicaçãoTeste()"
});
formatter.result({
  "duration": 6241420792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wylliam.mflores@gmail.com",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoOEmail(String)"
});
formatter.result({
  "duration": 57709329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoASenha(String)"
});
formatter.result({
  "duration": 40087206,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoEmEntrar()"
});
formatter.result({
  "duration": 498219189,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 35878385,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro,-edição-e-exclusão-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "seleciono Menu Contas Adicionar",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "clico no botão Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "sistema emite a mensagem  que o nome da conta é obrigatório",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.selecionoMenuContasAdicionar()"
});
formatter.result({
  "duration": 505104824,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoNoBotãoSalvar()"
});
formatter.result({
  "duration": 273668513,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.sistemaEmiteAMensagemQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 24723284,
  "status": "passed"
});
formatter.after({
  "duration": 2387084926,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação Teste",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "informo o email \"wylliam.mflores@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "informo a senha \"0123456789\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico em entrar",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.queEstouAcessandoAAplicaçãoTeste()"
});
formatter.result({
  "duration": 5118138391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wylliam.mflores@gmail.com",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoOEmail(String)"
});
formatter.result({
  "duration": 59425140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoASenha(String)"
});
formatter.result({
  "duration": 37999433,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoEmEntrar()"
});
formatter.result({
  "duration": 552909911,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 34003340,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro,-edição-e-exclusão-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "seleciono Menu Contas Adicionar",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "informo o nome da conta existente \"Conta com movimentacao\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "clico no botão Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "sistema emite a mensagem que já existe uma conta com esse nome",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.selecionoMenuContasAdicionar()"
});
formatter.result({
  "duration": 515822653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta com movimentacao",
      "offset": 35
    }
  ],
  "location": "ContasSteps.informoONomeDaContaExistente(String)"
});
formatter.result({
  "duration": 46676142,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoNoBotãoSalvar()"
});
formatter.result({
  "duration": 260272938,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.sistemaEmiteAMensagemQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 26412348,
  "status": "passed"
});
formatter.after({
  "duration": 2070374667,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação Teste",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "informo o email \"wylliam.mflores@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "informo a senha \"0123456789\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico em entrar",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.queEstouAcessandoAAplicaçãoTeste()"
});
formatter.result({
  "duration": 5643816458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wylliam.mflores@gmail.com",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoOEmail(String)"
});
formatter.result({
  "duration": 92084630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoASenha(String)"
});
formatter.result({
  "duration": 45623703,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoEmEntrar()"
});
formatter.result({
  "duration": 514871913,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 38527208,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Deve editar conta com sucesso",
  "description": "",
  "id": "cadastro,-edição-e-exclusão-de-contas;deve-editar-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "seleciono Menu Contas Listar",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "clico para editar uma conta",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "altero o nome para \"Conta Alterada\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "clico no botão Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "sistema emite a mensagem que a conta foi alterada com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.selecionoMenuContasListar()"
});
formatter.result({
  "duration": 576977598,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoParaEditarUmaConta()"
});
formatter.result({
  "duration": 285149236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta Alterada",
      "offset": 20
    }
  ],
  "location": "ContasSteps.alteroONomePara(String)"
});
formatter.result({
  "duration": 73523896,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoNoBotãoSalvar()"
});
formatter.result({
  "duration": 270133328,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.sistemaEmiteAMensagemQueAContaFoiAlteradaComSucesso()"
});
formatter.result({
  "duration": 19128629,
  "status": "passed"
});
formatter.after({
  "duration": 2414713612,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação Teste",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "informo o email \"wylliam.mflores@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "informo a senha \"0123456789\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico em entrar",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.queEstouAcessandoAAplicaçãoTeste()"
});
formatter.result({
  "duration": 5104844513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wylliam.mflores@gmail.com",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoOEmail(String)"
});
formatter.result({
  "duration": 210640389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoASenha(String)"
});
formatter.result({
  "duration": 123255344,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoEmEntrar()"
});
formatter.result({
  "duration": 554322804,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 47419754,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Deve excluir conta com sucesso",
  "description": "",
  "id": "cadastro,-edição-e-exclusão-de-contas;deve-excluir-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "seleciono Menu Contas Listar",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "clico para excluir uma conta",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "sistema emite a mensagem que a conta foi excluída com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.selecionoMenuContasListar()"
});
formatter.result({
  "duration": 640373640,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoParaExcluirUmaConta()"
});
formatter.result({
  "duration": 320595013,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.sistemaEmiteAMensagemQueAContaFoiExcluídaComSucesso()"
});
formatter.result({
  "duration": 32972672,
  "status": "passed"
});
formatter.after({
  "duration": 2872694137,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação Teste",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "informo o email \"wylliam.mflores@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "informo a senha \"0123456789\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico em entrar",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.queEstouAcessandoAAplicaçãoTeste()"
});
formatter.result({
  "duration": 5276727551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wylliam.mflores@gmail.com",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoOEmail(String)"
});
formatter.result({
  "duration": 81909193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 17
    }
  ],
  "location": "ContasSteps.informoASenha(String)"
});
formatter.result({
  "duration": 38613045,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoEmEntrar()"
});
formatter.result({
  "duration": 518813581,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 39449025,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Não deve excluir conta com movimentação",
  "description": "",
  "id": "cadastro,-edição-e-exclusão-de-contas;não-deve-excluir-conta-com-movimentação",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "seleciono Menu Contas Listar",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "clico para excluir uma conta com movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "sistema emite a mensagem que a conta esta em uso",
  "keyword": "Then "
});
formatter.match({
  "location": "ContasSteps.selecionoMenuContasListar()"
});
formatter.result({
  "duration": 555639907,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.clicoParaExcluirUmaContaComMovimentação()"
});
formatter.result({
  "duration": 279068791,
  "status": "passed"
});
formatter.match({
  "location": "ContasSteps.sistemaEmiteAMensagemQueAContaEstaEmUso()"
});
formatter.result({
  "duration": 19815326,
  "status": "passed"
});
formatter.after({
  "duration": 2625707613,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login no sistema",
  "description": "Como um usuário\nGostaria de entrar no sistema somente com credenciais válidas",
  "id": "login-no-sistema",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Deve validar regras de login",
  "description": "",
  "id": "login-no-sistema;deve-validar-regras-de-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "informo um email \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "informo uma senha \"\u003csenha\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "clico no botão entrar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "visualizo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-no-sistema;deve-validar-regras-de-login;",
  "rows": [
    {
      "cells": [
        "email",
        "senha",
        "mensagem"
      ],
      "line": 16,
      "id": "login-no-sistema;deve-validar-regras-de-login;;1"
    },
    {
      "cells": [
        "wylliam.mflores@gmail.com",
        "0123456789",
        "Bem vindo, Wylliam Flores!"
      ],
      "line": 17,
      "id": "login-no-sistema;deve-validar-regras-de-login;;2"
    },
    {
      "cells": [
        "",
        "0123456789",
        "Email é um campo obrigatório"
      ],
      "line": 18,
      "id": "login-no-sistema;deve-validar-regras-de-login;;3"
    },
    {
      "cells": [
        "wylliam.mflores@gmail.com",
        "",
        "Senha é um campo obrigatório"
      ],
      "line": 19,
      "id": "login-no-sistema;deve-validar-regras-de-login;;4"
    },
    {
      "cells": [
        "wylliam.mflores@gmail.com",
        "invalida",
        "Problemas com o login do usuário"
      ],
      "line": 20,
      "id": "login-no-sistema;deve-validar-regras-de-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "que estou acessando a aplicação",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5285879473,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Deve validar regras de login",
  "description": "",
  "id": "login-no-sistema;deve-validar-regras-de-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informo um email \"wylliam.mflores@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "informo uma senha \"0123456789\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "clico no botão entrar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "visualizo a mensagem \"Bem vindo, Wylliam Flores!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "wylliam.mflores@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.informoUmEmail(String)"
});
formatter.result({
  "duration": 45689014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 19
    }
  ],
  "location": "LoginSteps.informoUmaSenha(String)"
});
formatter.result({
  "duration": 37240584,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicoNoBotãoEntrar()"
});
formatter.result({
  "duration": 518522481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bem vindo, Wylliam Flores!",
      "offset": 22
    }
  ],
  "location": "LoginSteps.visualizoAMensagem(String)"
});
formatter.result({
  "duration": 31222651,
  "status": "passed"
});
formatter.after({
  "duration": 2171870908,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "que estou acessando a aplicação",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5719859177,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Deve validar regras de login",
  "description": "",
  "id": "login-no-sistema;deve-validar-regras-de-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informo um email \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "informo uma senha \"0123456789\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "clico no botão entrar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "visualizo a mensagem \"Email é um campo obrigatório\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginSteps.informoUmEmail(String)"
});
formatter.result({
  "duration": 35696137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 19
    }
  ],
  "location": "LoginSteps.informoUmaSenha(String)"
});
formatter.result({
  "duration": 39186848,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicoNoBotãoEntrar()"
});
formatter.result({
  "duration": 274212459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email é um campo obrigatório",
      "offset": 22
    }
  ],
  "location": "LoginSteps.visualizoAMensagem(String)"
});
formatter.result({
  "duration": 23455631,
  "status": "passed"
});
formatter.after({
  "duration": 2302068489,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "que estou acessando a aplicação",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5043138468,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deve validar regras de login",
  "description": "",
  "id": "login-no-sistema;deve-validar-regras-de-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informo um email \"wylliam.mflores@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "informo uma senha \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "clico no botão entrar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "visualizo a mensagem \"Senha é um campo obrigatório\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "wylliam.mflores@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.informoUmEmail(String)"
});
formatter.result({
  "duration": 51450990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "LoginSteps.informoUmaSenha(String)"
});
formatter.result({
  "duration": 26552922,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicoNoBotãoEntrar()"
});
formatter.result({
  "duration": 559063752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senha é um campo obrigatório",
      "offset": 22
    }
  ],
  "location": "LoginSteps.visualizoAMensagem(String)"
});
formatter.result({
  "duration": 29978323,
  "status": "passed"
});
formatter.after({
  "duration": 2494495536,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "que estou acessando a aplicação",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5171791291,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Deve validar regras de login",
  "description": "",
  "id": "login-no-sistema;deve-validar-regras-de-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informo um email \"wylliam.mflores@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "informo uma senha \"invalida\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "clico no botão entrar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "visualizo a mensagem \"Problemas com o login do usuário\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "wylliam.mflores@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.informoUmEmail(String)"
});
formatter.result({
  "duration": 101678179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalida",
      "offset": 19
    }
  ],
  "location": "LoginSteps.informoUmaSenha(String)"
});
formatter.result({
  "duration": 31793344,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicoNoBotãoEntrar()"
});
formatter.result({
  "duration": 504019108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Problemas com o login do usuário",
      "offset": 22
    }
  ],
  "location": "LoginSteps.visualizoAMensagem(String)"
});
formatter.result({
  "duration": 38176706,
  "status": "passed"
});
formatter.after({
  "duration": 2159239470,
  "status": "passed"
});
});