package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
	@CucumberOptions(
			features="F:\\Selenium\\Selenium_Workspace\\CucumberSeleniumFramework\\src\\main\\java\\Features\\contacts.feature",
			glue= {"stepDefinition"},
			format= {"pretty","html:test-outout","json:json-output/cucumber.json","junit:junit-output/cucumber.xml"},
			dryRun=false ,
			monochrome= true,
			strict=true // strictly follow the mspping
			)
	
	public class TestRunner{
	
}
