Feature: Deal data creation

Scenario: Free CRM Test create a new Deal Scenario

Given user is already on Login Pages
When title of Login Page is Free CRMs 
Then users enters username and password
|vikashp|test@123|
Then user clicks on Login Buttons 
Then user is on Home Pages
Then user mouse over on deals
Then user click on new deal links
Then user enters new deals details
|test deal|1000|50|10|
Then user click on save buttons
Then close the browsers
