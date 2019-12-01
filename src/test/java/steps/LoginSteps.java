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

public class LoginSteps {

	private WebDriver browser;

	@Given("^que estou acessando a aplicação$")
	public void queEstouAcessandoAAplicação() throws Throwable {
		System.setProperty("webdriver.gecko.driver",
				"C:\\Users\\Informatica\\eclipse-workspace\\driver\\geckodriver.exe");
		browser = new FirefoxDriver();
		browser.get("https://seubarriga.wcaquino.me/login");
		browser.manage().window().setSize(new Dimension(1200, 765));
	}
	
	@When("^informo um email \"([^\"]*)\"$")
	public void informoUmEmail(String arg1) throws Throwable {
		browser.findElement(By.id("email")).sendKeys(arg1);
	}

	@When("^informo uma senha \"([^\"]*)\"$")
	public void informoUmaSenha(String arg1) throws Throwable {
		browser.findElement(By.id("senha")).sendKeys(arg1);
	}

	@When("^clico no botão entrar$")
	public void clicoNoBotãoEntrar() throws Throwable {
		browser.findElement(By.className("btn-primary")).click();
	}

	@Then("^visualizo a mensagem \"([^\"]*)\"$")
	public void visualizoAMensagem(String arg1) throws Throwable {
		String texto = browser.findElement(By.className("alert")).getText();
		Assert.assertEquals(arg1, texto);
	}

	@After("@login")
	public void quitBrowser() {
		browser.quit();
	}
}
