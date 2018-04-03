$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Selenium/Selenium_Workspace/CucumberSeleniumFramework/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Test create a new Deal Scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-test-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Pages",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login Page is Free CRMs",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "users enters username and password",
  "rows": [
    {
      "cells": [
        "vikashp",
        "test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login Buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on Home Pages",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user mouse over on deals",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on new deal links",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters new deals details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click on save buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browsers",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 10476041556,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.title_of__Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 16879677,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.users_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 262452343,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_Login_Buttons()"
});
formatter.result({
  "duration": 7295540092,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 14933822,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_mouse_over_on_Deals()"
});
formatter.result({
  "duration": 154156474,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_click_on_new_deal_links()"
});
formatter.result({
  "duration": 134115398,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_new_deals_details(DataTable)"
});
formatter.result({
  "duration": 1821453833,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_click_on_save_buttons()"
});
formatter.result({
  "duration": 106407898,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.close_the_browsers()"
});
formatter.result({
  "duration": 1009601194,
  "status": "passed"
});
});