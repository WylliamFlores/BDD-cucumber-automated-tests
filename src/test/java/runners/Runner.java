package runners;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/",
		tags = {},
		glue = "steps", 
		plugin = { "pretty", "html:target/report-html" }, 
		monochrome = true, 
		snippets = SnippetType.CAMELCASE, 
		dryRun = false, 
		strict = false)

public class Runner {

	@BeforeClass
	public static void resetDataBase() {
		System.setProperty("webdriver.gecko.driver",
						"C:\\Users\\Informatica\\eclipse-workspace\\driver\\geckodriver.exe");		
		WebDriver browser = new FirefoxDriver();
		browser = new FirefoxDriver();
		browser.get("https://seubarriga.wcaquino.me/login");
		browser.findElement(By.id("email")).sendKeys("wylliam.mflores@gmail.com");
		browser.findElement(By.id("senha")).sendKeys("0123456789");
		browser.findElement(By.className("btn-primary")).click();
		browser.findElement(By.linkText("reset")).click();
		browser.quit();		
	}
}
