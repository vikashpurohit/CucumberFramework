package stepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsStepWithMapDefinition {
	WebDriver driver;

	@Given("^user is already on Login Pages$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver",
				"F:\\Selenium\\Selenium_Browser_Driver\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com");
	}

	@When("^title of Login Page is Free CRMs$")
	public void title_of__Login_Page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println("Title is :" + title);
		Assert.assertEquals("Free CRM in the cloud software boosts sales", title);
	}

	@Then("^users enters username and password$")
	public void users_enters_username_and_password(DataTable Credentials) {

		for (Map<String, String> tableValue : Credentials.asMaps(String.class, String.class)) {

			driver.findElement(By.xpath("//*[@name='username']")).sendKeys(tableValue.get("username"));
			driver.findElement(By.xpath("//*[@name='password']")).sendKeys(tableValue.get("password"));
		}
	}

	@Then("^user clicks on Login Buttons$")
	public void user_clicks_on_Login_Buttons() {
		WebElement loginbtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", loginbtn);
		// driver.findElement(By.className("btn btn-small")).click();
	}

	@Then("^user is on Home Pages$")
	public void user_is_on_Home_Page() {
		String title = driver.getTitle();
		System.out.println("Home Page title ::" + title);
		Assert.assertEquals("CRMPRO", title);
	}

	@Then("^user mouse over on deals$")
	public void user_mouse_over_on_Deals() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
	}

	@Then("^user click on new deal links$")
	public void user_click_on_new_deal_links() {
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}

	@Then("^user enters new deals details$")
	public void user_enters_new_deals_details(DataTable dealData) {

		for (Map<String, String> data : dealData.asMaps(String.class, String.class)) {

			driver.findElement(By.id("title")).sendKeys(data.get("title"));
			driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
			driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
			driver.findElement(By.id("commission")).sendKeys(data.get("commission"));

			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click(); // save button

			// move to new deal page:
			Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		}
	}

	/*
	 * @And("^user click on save buttons$") public void user_click_on_save_buttons()
	 * {
	 * 
	 * }
	 */
	@Then("^close the browsers$")
	public void close_the_browsers() {
		driver.quit();
	}

}
