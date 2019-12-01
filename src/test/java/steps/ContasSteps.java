package steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContasSteps {

	private WebDriver browser;

	@Given("^que estou acessando a aplicação Teste$")
	public void queEstouAcessandoAAplicaçãoTeste() throws Throwable {
		System.setProperty("webdriver.gecko.driver",
				"C:\\Users\\Informatica\\eclipse-workspace\\driver\\geckodriver.exe");
		browser = new FirefoxDriver();
		browser.get("https://seubarriga.wcaquino.me/login");
		browser.manage().window().setSize(new Dimension(1200, 765));
	}

	@When("^informo o email \"([^\"]*)\"$")
	public void informoOEmail(String arg1) throws Throwable {
		browser.findElement(By.id("email")).sendKeys(arg1);
	}

	@When("^informo a senha \"([^\"]*)\"$")
	public void informoASenha(String arg1) throws Throwable {
		browser.findElement(By.id("senha")).sendKeys(arg1);
	}

	@When("^clico em entrar$")
	public void clicoEmEntrar() throws Throwable {
		browser.findElement(By.className("btn-primary")).click();
	}

	@Then("^visualizo a página inicial$")
	public void visualizoAPáginaInicial() throws Throwable {
		String texto = browser.findElement(By.className("alert-success")).getText();
		Assert.assertEquals("Bem vindo, Wylliam Flores!", texto);
	}

	@When("^seleciono Menu Contas Adicionar$")
	public void selecionoMenuContasAdicionar() throws Throwable {
		browser.findElement(By.xpath("//*[@class='nav navbar-nav']//li[@class='dropdown']")).click();
		browser.findElement(By.xpath("//*[@class='nav navbar-nav']//li//a[contains(@href,'/addConta')]")).click();
	}

	@When("^informo o nome da conta \"([^\"]*)\"\"$")
	public void informoONomeDaConta(String arg1) throws Throwable {
		browser.findElement(By.id("nome")).sendKeys(arg1);
	}

	@When("^clico no botão Salvar$")
	public void clicoNoBotãoSalvar() throws Throwable {
		browser.findElement(By.className("btn-primary")).click();
	}

	@Then("^a conta é inserida com sucesso$")
	public void aContaÉInseridaComSucesso() throws Throwable {
		String texto = browser.findElement(By.className("alert-success")).getText();
		Assert.assertEquals("Conta adicionada com sucesso!", texto);
	}

	@Then("^sistema emite a mensagem  que o nome da conta é obrigatório$")
	public void sistemaEmiteAMensagemQueONomeDaContaÉObrigatório() throws Throwable {
		String texto = browser.findElement(By.className("alert-danger")).getText();
		Assert.assertEquals("Informe o nome da conta", texto);
	}

	@When("^informo o nome da conta existente \"([^\"]*)\"$")
	public void informoONomeDaContaExistente(String arg1) throws Throwable {
		browser.findElement(By.id("nome")).sendKeys(arg1);
	}

	@Then("^sistema emite a mensagem que já existe uma conta com esse nome$")
	public void sistemaEmiteAMensagemQueJáExisteUmaContaComEsseNome() throws Throwable {
		String texto = browser.findElement(By.className("alert-danger")).getText();
		Assert.assertEquals("Já existe uma conta com esse nome!", texto);
	}

	@When("^seleciono Menu Contas Listar$")
	public void selecionoMenuContasListar() throws Throwable {
		browser.findElement(By.xpath("//*[@class='nav navbar-nav']//li[@class='dropdown']")).click();
		browser.findElement(By.xpath("//*[@class='nav navbar-nav']//li//a[contains(@href,'/contas')]")).click();
	}

	@When("^clico para editar uma conta$")
	public void clicoParaEditarUmaConta() throws Throwable {
		browser.findElement(By.xpath(
				"//*[@id='tabelaContas']//td[.='Conta para alterar']/..//span[@class='glyphicon glyphicon-edit']"))
				.click();
	}

	@When("^altero o nome para \"([^\"]*)\"$")
	public void alteroONomePara(String arg1) throws Throwable {
		browser.findElement(By.id("nome")).sendKeys(arg1);
	}

	@Then("^sistema emite a mensagem que a conta foi alterada com sucesso$")
	public void sistemaEmiteAMensagemQueAContaFoiAlteradaComSucesso() throws Throwable {
		String texto = browser.findElement(By.className("alert-success")).getText();
		Assert.assertEquals("Conta alterada com sucesso!", texto);
	}

	@When("^clico para excluir uma conta$")
	public void clicoParaExcluirUmaConta() throws Throwable {
		browser.findElement(By.xpath(
				"//*[@id='tabelaContas']//td[.='Conta mesmo nome']/..//span[@class='glyphicon glyphicon-remove-circle']"))
				.click();
	}

	@Then("^sistema emite a mensagem que a conta foi excluída com sucesso$")
	public void sistemaEmiteAMensagemQueAContaFoiExcluídaComSucesso() throws Throwable {
		String texto = browser.findElement(By.className("alert-success")).getText();
		Assert.assertEquals("Conta removida com sucesso!", texto);
	}

	@When("^clico para excluir uma conta com movimentação$")
	public void clicoParaExcluirUmaContaComMovimentação() throws Throwable {
		browser.findElement(By.xpath(
				"//*[@id='tabelaContas']//td[.='Conta com movimentacao']/..//span[@class='glyphicon glyphicon-remove-circle']"))
				.click();
	}

	@Then("^sistema emite a mensagem que a conta esta em uso$")
	public void sistemaEmiteAMensagemQueAContaEstaEmUso() throws Throwable {
		String texto = browser.findElement(By.className("alert-danger")).getText();
		Assert.assertEquals("Conta em uso na movimentações", texto);
	}
	
	@After("@contas")
	public void quitBrowser() {
		browser.quit();
	}
}