//package testdefinition;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//
//import baseclass0.library0;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import pages.registeration_page;
//
//
//
//public class RegisterationStep1 extends library0 {
//	
//	//WebDriver driver;
//	registeration_page pg_1;
//	//seleniumutil0 util;
//	//login_page lp1;
//	
//	@Given("^I have opened the meritnation website and registeration page is displayed$")
//	public void i_have_opened_the_meritnation_website_and_registeration_page_is_displayed() throws Throwable {
//	    
//		//lp1= new login_page(driver);
//	    pg_1= new registeration_page(driver);
//	    //launch_browser();
//	    
//	    driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
//	    
//	   
//	}
//
//	@Given("^I click on create account$")
//	public void i_click_on_create_account()  {
//		//driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
//	    //driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
//		pg_1 = new registeration_page(driver);
//		pg_1.select_createaccount();
//		
//	   	}
//
//	@When("^I enter \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
//	public void i_enter(String emailid, String mobileno, String password, String name, String areapincode) throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		pg_1 = new registeration_page(driver);
//	    pg_1.enter_emailid(emailid);
//	    pg_1.enter_mobile(mobileno);
//	    pg_1.enter_password(password);
//	    pg_1.enter_pincode(areapincode);
//	    pg_1.enter_username(name);
//	    
//	}
//
//	@When("^I select \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" parent\"$")
//	public void i_select_parent(String boarddropdown, String countrydropdown, String gradedropdown) throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		pg_1 = new registeration_page(driver);
//	    pg_1.select_board();
//	    pg_1.select_country();
//	    pg_1.select_grade();
//	    pg_1.select_radiobutton();
//	}
//
//	@When("^I click on submit$")
//	public void i_click_on_submit() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		pg_1 = new registeration_page(driver);
//	    pg_1.select_submit();
//	}
//
//	@When("^Registeration is successfull and onboarding page is displayed$")
//	public void registeration_is_successfull_and_onboarding_page_is_displayed() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    driver.get("https://www.meritnation.com/onboarding?redirect=users/dashboard");
//	}
//
//	@When("^I enter the\"([^\"]*)\" in the onboarding page$")
//	public void i_enter_the_in_the_onboarding_page(String schoolname) throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		pg_1 = new registeration_page(driver);
//	    pg_1.enter_schoolname(schoolname);
//	}
//
//	@Then("^Homepage is displayed$")
//	public void homepage_is_displayed() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    driver.get("https://www.meritnation.com/cbse-class-10/12");
//	}
//
//}
