Feature: Free CRM Login Feature

# without using Examples keyword
#Scenario: Free CRM Test Scenario

#Given user is already on Login Page
#When title of Login Page is Free CRM 
#Then user enters username and password
#And user clicks on Login Button 
#Then user is on Home Page 
#Then user mouse over on Contacts
#Then user click on new contacts link
#Then user enters "<firstname>" and "<lastname>"
#And user click on save button
#Then close the browser

#with Examples keyword
Scenario Outline: Free CRM Test Scenario

Given user is already on Login Page
When title of Login Page is Free CRM 
Then user enters username and password
And user clicks on Login Button 
Then user is on Home Page 
Then user mouse over on Contacts
Then user click on new contacts link
#Then user enters "<firstname>" and "<lastname>"
And user click on save button
Then close the browser


Examples:
 |firstname|lastname|
  |ravi| ram1|