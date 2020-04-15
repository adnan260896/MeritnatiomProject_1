package baseclass0;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.InputEvent;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

public class library0 {
	
	protected WebDriver driver;
	public static Properties prop;
	
	public void launchapp() throws IOException{
		FileInputStream fis = new FileInputStream("C:\\Users\\nadee\\eclipse-workspace\\MeRiTnAtIoN\\src\\test\\resources\\config_property\\configuration_property");
		prop = new Properties();
		prop.load(fis);
		String browser = prop.getProperty("browser");
		
		if(browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\nadee\\eclipse-workspace\\MeRiTnAtIoN\\src\\test\\resources\\drivers\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		else if(browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "C:\\Users\\nadee\\eclipse-workspace\\MeRiTnAtIoN\\src\\test\\resources\\drivers\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));
	}
	public void quit() {
		driver.close();
	}
}


