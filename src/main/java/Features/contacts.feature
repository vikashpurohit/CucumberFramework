Feature: Free CRM Test Feature For Contacts

Scenario Outline: Free CRM Test Contacts Scenario

Given user is already on Login Pages
When title of Login Page is Free CRMs 
Then users enters "<username>" and "<password>"
Then user clicks on Login Buttons 
Then user is on Home Pages
Then user mouse over on Contactss
Then user click on new contacts links
Then user enters contacts details "<firstname>" and "<lastname>" and "<position>"
And user click on save buttons
Then close the browsers

Examples: 
 |username|password|firstname|lastname|position|
 |vikashp|test@123|krish|tiwari|manager|
 |vikashp|test@123|raj|dubey|CEO|
