$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/nadee/eclipse-workspace/MeRiTnAtIoN/src/test/resources/features/Meritnation_01.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Meritnation Website",
  "description": "",
  "id": "meritnation-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@MERITNATION"
    }
  ]
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "meritnation-website;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Login to the application.",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter the valid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "meritnation-website;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "email",
        "",
        "password"
      ],
      "line": 32,
      "id": "meritnation-website;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "adnan8642@gmail.com",
        "",
        "adnan08642"
      ],
      "line": 33,
      "id": "meritnation-website;title-of-your-scenario-outline;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "meritnation-website;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@MERITNATION"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Login to the application.",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter the valid \"adnan8642@gmail.com\" and \"adnan08642\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginpagestep.login_to_the_application()"
});
formatter.result({
  "duration": 28426742200,
  "status": "passed"
});
formatter.match({
  "location": "loginpagestep.i_click_the_login_button()"
});
formatter.result({
  "duration": 160206200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adnan8642@gmail.com",
      "offset": 19
    },
    {
      "val": "adnan08642",
      "offset": 45
    }
  ],
  "location": "loginpagestep.i_enter_the_valid_and(String,String)"
});
formatter.result({
  "duration": 339824400,
  "status": "passed"
});
formatter.match({
  "location": "loginpagestep.i_click_login_button()"
});
formatter.result({
  "duration": 15483039500,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "To enter name in Myprofilepage and select ADD FRIEND",
  "description": "",
  "id": "meritnation-website;to-enter-name-in-myprofilepage-and-select-add-friend",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Myprofilepage"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am logged in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click ME link in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click MYPROFILE link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Myprofilepage is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter the SRAAWYA in Myprofilepage",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I select the SRAAWYA from various name",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I press enter to see SRAAWYA profile",
  "keyword": "Then "
});
formatter.match({
  "location": "MyprofilepageStep.i_am_logged_in_to_the_website()"
});
formatter.result({
  "duration": 43120903200,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_click_ME_link_in_homepage()"
});
formatter.result({
  "duration": 104443400,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_click_MYPROFILE_link()"
});
formatter.result({
  "duration": 2177146700,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.myprofilepage_is_displayed()"
});
formatter.result({
  "duration": 1645815700,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_enter_the_in_Myprofilepage()"
});
formatter.result({
  "duration": 926323900,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_select_the_from_various_name()"
});
formatter.result({
  "duration": 1080635200,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_press_enter()"
});
formatter.result({
  "duration": 5210233800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 47,
      "value": "#"
    },
    {
      "line": 48,
      "value": "#@editparentdetails"
    },
    {
      "line": 49,
      "value": "#Scenario Outline: To edit parent details"
    },
    {
      "line": 50,
      "value": "#Given I click on ADD YOUR ADDRESS link"
    },
    {
      "line": 51,
      "value": "#And I click on parent\u0027s details"
    },
    {
      "line": 52,
      "value": "#When I enter \"\u003cname\u003e\" \"\u003cEmail\u003e\" \"\u003cMobileNo\u003e\""
    },
    {
      "line": 53,
      "value": "#And I click save"
    },
    {
      "line": 54,
      "value": "#Then parent details have been uploaded successfully"
    },
    {
      "line": 55,
      "value": "#Examples:"
    },
    {
      "line": 56,
      "value": "#|name | |Email |                |MobileNo |"
    },
    {
      "line": 57,
      "value": "#|Anjum ||Anjum_1289@gmail.com|  |9949388471|"
    },
    {
      "line": 58,
      "value": "#"
    }
  ],
  "line": 60,
  "name": "To call customer care support",
  "description": "",
  "id": "meritnation-website;to-call-customer-care-support",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 59,
      "name": "@Callme"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "I click on CALL ME link in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I enter \"\u003cMobileno\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I click on CALL NOW",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "call is placed to the customer care",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "meritnation-website;to-call-customer-care-support;",
  "rows": [
    {
      "cells": [
        "Mobileno"
      ],
      "line": 66,
      "id": "meritnation-website;to-call-customer-care-support;;1"
    },
    {
      "cells": [
        "9949399521"
      ],
      "line": 67,
      "id": "meritnation-website;to-call-customer-care-support;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 67,
  "name": "To call customer care support",
  "description": "",
  "id": "meritnation-website;to-call-customer-care-support;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 59,
      "name": "@Callme"
    },
    {
      "line": 19,
      "name": "@MERITNATION"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "I click on CALL ME link in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I enter \"9949399521\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I click on CALL NOW",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "call is placed to the customer care",
  "keyword": "Then "
});
formatter.match({
  "location": "CallMepagestep.i_click_on_CALL_ME_link_in_homepage()"
});
formatter.result({
  "duration": 43677888500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9949399521",
      "offset": 9
    }
  ],
  "location": "CallMepagestep.i_enter(String)"
});
formatter.result({
  "duration": 451237200,
  "status": "passed"
});
formatter.match({
  "location": "CallMepagestep.i_click_on_CALL_NOW()"
});
formatter.result({
  "duration": 163255900,
  "status": "passed"
});
formatter.match({
  "location": "CallMepagestep.call_is_placed_to_the_customer_care()"
});
formatter.result({
  "duration": 4550652400,
  "status": "passed"
});
});