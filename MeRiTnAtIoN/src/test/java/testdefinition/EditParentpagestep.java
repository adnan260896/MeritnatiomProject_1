package testdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import baseclass0.library0;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.EditParent_page;
import pages.home_page;
import pages.login_page;
import seleniumutil0.seleniumutil0;

public class EditParentpagestep extends library0 {
	
	//WebDriver driver;
	
	home_page hp0;
	
	EditParent_page epp0;
	
	seleniumutil0 util0;
	
	login_page lp0;
	

	@Given("^I click on ADD YOUR ADDRESS link$")
	public void i_click_on_ADD_YOUR_ADDRESS_link() throws Throwable {
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
		
		hp0.click_Add_address();
		
	   
	}

	@Given("^I click on parent's details$")
	public void i_click_on_parent_s_details() throws Throwable {

		epp0= new EditParent_page(driver);
		
		epp0.Select_parent_details();
	}

	@When("^I enter \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void i_enter(String name, String Email, String MobileNo) throws Throwable {
		epp0= new EditParent_page(driver);
		
		epp0.edit_profile(name, Email, MobileNo);
	}

	@When("^I click save$")
	public void i_click_save() throws Throwable {
		epp0= new EditParent_page(driver);
		
		epp0.click_save_button();
	}

	@Then("^parent details have been uploaded successfully$")
	public void parent_details_have_been_uploaded_successfully() throws Throwable {
	  util0= new seleniumutil0(driver);
	  util0.takeSnapShot("C:\\Users\\nadee\\eclipse-workspace\\MERITNATIONPROJECT\\src\\test\\resources\\screenshots\\Screenshot (5).png");
	  driver.close();
	}

}
