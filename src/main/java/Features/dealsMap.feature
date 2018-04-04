Feature: Deal data creation 

Scenario: Free CRM Test create a new Deal Scenario 
 
	Given user is already on Login Pages 
	When title of Login Page is Free CRMs 
	Then users enters username and password 
		|username|password|
		|vikashp|test@123|
	Then user clicks on Login Buttons 
	Then user is on Home Pages 
	Then user mouse over on deals 
	Then user click on new deal links 
	Then user enters new deals details 
		|title|amount|probability|commission|
		|test deal1|1000|50|10|
		|test deal2|2000|60|20|
		|test deal3|3000|70|30|
#	Then user click on save buttons 
	Then close the browsers 
