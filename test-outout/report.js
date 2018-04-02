$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Selenium/Selenium_Workspace/CucumberSeleniumFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Test Feature For Contacts",
  "description": "",
  "id": "free-crm-test-feature-for-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Test Contacts Scenario",
  "description": "",
  "id": "free-crm-test-feature-for-contacts;free-crm-test-contacts-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "users enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login Buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home Pages",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user mouse over on Contactss",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on new contacts links",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters contacts details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on save buttons",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "close the browsers",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "free-crm-test-feature-for-contacts;free-crm-test-contacts-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 17,
      "id": "free-crm-test-feature-for-contacts;free-crm-test-contacts-scenario;;1"
    },
    {
      "cells": [
        "vikashp",
        "test@123",
        "krish",
        "tiwari",
        "manager"
      ],
      "line": 18,
      "id": "free-crm-test-feature-for-contacts;free-crm-test-contacts-scenario;;2"
    },
    {
      "cells": [
        "vikashp",
        "test@123",
        "raj",
        "dubey",
        "CEO"
      ],
      "line": 19,
      "id": "free-crm-test-feature-for-contacts;free-crm-test-contacts-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Test Contacts Scenario",
  "description": "",
  "id": "free-crm-test-feature-for-contacts;free-crm-test-contacts-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "users enters \"vikashp\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login Buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home Pages",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user mouse over on Contactss",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on new contacts links",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters contacts details \"krish\" and \"tiwari\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on save buttons",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "close the browsers",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinion.user_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.title_of__Login_Page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "vikashp",
      "offset": 14
    },
    {
      "val": "test@123",
      "offset": 28
    }
  ],
  "location": "ContactsStepDefinion.users_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.user_clicks_on_Login_Buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.user_mouse_over_on_Contactss()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.user_click_on_new_contacts_links()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "krish",
      "offset": 30
    },
    {
      "val": "tiwari",
      "offset": 42
    },
    {
      "val": "manager",
      "offset": 55
    }
  ],
  "location": "ContactsStepDefinion.user_enters_contacts_details_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.user_click_on_save_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.close_the_browsers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Test Contacts Scenario",
  "description": "",
  "id": "free-crm-test-feature-for-contacts;free-crm-test-contacts-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "users enters \"vikashp\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login Buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home Pages",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user mouse over on Contactss",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on new contacts links",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters contacts details \"raj\" and \"dubey\" and \"CEO\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on save buttons",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "close the browsers",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinion.user_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.title_of__Login_Page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "vikashp",
      "offset": 14
    },
    {
      "val": "test@123",
      "offset": 28
    }
  ],
  "location": "ContactsStepDefinion.users_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.user_clicks_on_Login_Buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.user_mouse_over_on_Contactss()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.user_click_on_new_contacts_links()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "raj",
      "offset": 30
    },
    {
      "val": "dubey",
      "offset": 40
    },
    {
      "val": "CEO",
      "offset": 52
    }
  ],
  "location": "ContactsStepDefinion.user_enters_contacts_details_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.user_click_on_save_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinion.close_the_browsers()"
});
formatter.result({
  "status": "skipped"
});
});