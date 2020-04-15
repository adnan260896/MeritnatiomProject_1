package testdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.xml.LaunchSuite;

import baseclass0.library0;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.login_page;
import seleniumutil0.seleniumutil0;

public class loginpagestep extends library0 {

	//WebDriver driver;
	login_page lp0;
	seleniumutil0 util0;
	
	@Given("^Login to the application\\.$")
	public void login_to_the_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		lp0= new login_page(driver);
		launchapp();
		util0= new seleniumutil0(driver);
		util0.close_popup();
		
		 // driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		
	    
	}

	@Given("^I click the login button$")
	public void i_click_the_login_button() throws Throwable {
		 lp0= new login_page(driver);
	    lp0.click_login_link();
	    
	}

	@When("^I enter the valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_the_valid_and(String email, String password) throws Throwable {
		 lp0= new login_page(driver);
	   lp0.do_login(email, password);
	   
	}

	@Then("^I click login button$")
	public void i_click_login_button() throws Throwable {
		 lp0= new login_page(driver);
		 lp0.click_login();
		 util0= new seleniumutil0(driver);
		 util0.close_popup2();
		 driver.close();
		 
	}

}
