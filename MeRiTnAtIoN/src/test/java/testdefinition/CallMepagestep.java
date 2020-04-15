package testdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import baseclass0.library0;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.Call_Me_page;
import pages.home_page;
import pages.login_page;
import seleniumutil0.seleniumutil0;

public class CallMepagestep extends library0{

	//WebDriver driver;
	
	home_page hp0;
	
	Call_Me_page cp0;
	
	seleniumutil0 util0;
	
	login_page lp0;
	
	
	@Given("^I click on CALL ME link in homepage$")
	public void i_click_on_CALL_ME_link_in_homepage() throws Throwable {
		
		 launchapp();
		    util0= new seleniumutil0(driver);
			util0.close_popup();
			  lp0= new login_page(driver);
			lp0.click_login_link();
			lp0.do_login("adnan8642@gmail.com", "adnan08642");
			//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
			lp0.click_login();
			util0.close_popup2();
		hp0= new home_page(driver);
		
		hp0.click_CALL_ME();
		
		
	   
	}

	@When("^I enter \"([^\"]*)\"$")
	public void i_enter(String Mobileno) throws Throwable {
		cp0= new Call_Me_page(driver);
	    cp0.enter_phone_no(Mobileno);
	}

	@When("^I click on CALL NOW$")
	public void i_click_on_CALL_NOW() throws Throwable {
		cp0= new Call_Me_page(driver);
		cp0.click_call_now();
	}

	@Then("^call is placed to the customer care$")
	public void call_is_placed_to_the_customer_care() throws Throwable {
		
		util0= new seleniumutil0(driver);
		
		util0.takeSnapShot("C:\\Users\\nadee\\eclipse-workspace\\MERITNATIONPROJECT\\src\\test\\resources\\screenshots\\Screenshot (6).png");
		
	    driver.close();
	}


}
