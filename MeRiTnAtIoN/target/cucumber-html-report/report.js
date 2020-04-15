$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/nadee/eclipse-workspace/MERITNATIONPROJECT/src/test/resources/features/Meritnation_0.feature");
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
        "adnanmohd11@gmail.com",
        "",
        "Adnan260896"
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
  "name": "I enter the valid \"adnanmohd11@gmail.com\" and \"Adnan260896\"",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "loginpagestep.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "adnanmohd11@gmail.com",
      "offset": 19
    },
    {
      "val": "Adnan260896",
      "offset": 47
    }
  ],
  "location": "loginpagestep.i_enter_the_valid_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginpagestep.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
});