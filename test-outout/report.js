$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Selenium/Selenium_Workspace/CucumberSeleniumFramework/src/main/java/Features/dealsMap.feature");
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "vikashp",
        "test@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Login Buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on Home Pages",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user mouse over on deals",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on new deal links",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters new deals details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#\tThen user click on save buttons"
    }
  ],
  "line": 20,
  "name": "close the browsers",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 9428065963,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.title_of__Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 27016597,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 343900750,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_clicks_on_Login_Buttons()"
});
formatter.result({
  "duration": 8316101295,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 14093903,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_mouse_over_on_Deals()"
});
formatter.result({
  "duration": 156365471,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_click_on_new_deal_links()"
});
formatter.result({
  "duration": 132398201,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_new_deals_details(DataTable)"
});
formatter.result({
  "duration": 2937649300,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Probability must be a number between 0-100\nCommission must be a decimal percentage value between 0 and 100\n}\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027VIKASH-HP\u0027, ip: \u0027192.168.43.192\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\vikash\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 65.0.3325.181, webStorageEnabled: true}\nSession ID: 2ffd2e1dc96ba06f09838de333c8339b\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Deals\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat stepDefinition.DealsStepWithMapDefinition.user_enters_new_deals_details(DealsStepWithMapDefinition.java:93)\r\n\tat ✽.Then user enters new deals details(F:/Selenium/Selenium_Workspace/CucumberSeleniumFramework/src/main/java/Features/dealsMap.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.close_the_browsers()"
});
formatter.result({
  "status": "skipped"
});
});