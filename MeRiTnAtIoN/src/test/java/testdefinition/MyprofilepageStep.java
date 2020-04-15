package testdefinition;

import org.openqa.selenium.By;

import baseclass0.library0;
import comexcelutility.excelutility;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.MyProfilePage;
import pages.home_page;
import pages.login_page;
import seleniumutil0.seleniumutil0;

public class MyprofilepageStep extends library0 {
	
//WebDriver driver;

login_page lp0;

home_page hp0;

MyProfilePage mp0;

seleniumutil0 util0;

excelutility ex;
	
	@Given("^I am logged in to the website$")
	public void i_am_logged_in_to_the_website() throws Throwable {
		
	    launchapp();
	    util0= new seleniumutil0(driver);
		util0.close_popup();
		  lp0= new login_page(driver);
		lp0.click_login_link();
		lp0.do_login("adnan8642@gmail.com", "adnan08642");
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		lp0.click_login();
		util0.close_popup2();
	  	    
	}
	    

	@Given("^I click ME link in homepage$")
	public void i_click_ME_link_in_homepage() throws Throwable {
		hp0= new home_page(driver);
	   hp0.click_ME();
	}

	@Given("^I click MYPROFILE link$")
	public void i_click_MYPROFILE_link() throws Throwable {
		hp0= new home_page(driver);
		hp0.click_MYPROFILE();
	   	}

	@Given("^Myprofilepage is displayed$")
	public void myprofilepage_is_displayed() throws Throwable {
	    driver.get("https://www.meritnation.com/parent/41687319");
	}

	@When("^I enter the SRAAWYA in Myprofilepage$")
	public void i_enter_the_in_Myprofilepage() throws Throwable {
		mp0= new MyProfilePage(driver);
		ex= new excelutility(driver);
		mp0.enter_friendname(ex.excel_friendname(1));
		
	
		
	   
	}

	@When("^I select the SRAAWYA from various name$")
	public void i_select_the_from_various_name() throws Throwable {
		mp0= new MyProfilePage(driver);
		mp0.select_friend_name();
	}

	@Then("^I press enter to see SRAAWYA profile$")
	public void i_press_enter() throws Throwable {
		mp0= new MyProfilePage(driver);
		mp0.press_enterkey();
		driver.close();
	}


}

