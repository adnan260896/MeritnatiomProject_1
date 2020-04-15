#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@MERITNATION
Feature: Meritnation Website

 
  
@Login
  Scenario Outline: Title of your scenario outline
    Given Login to the application.
     And I click the login button
    When I enter the valid "<email>" and "<password>"
    Then I click login button

    Examples: 
|email |                         |password |
|adnan8642@gmail.com|            |adnan08642|


 @Myprofilepage
  Scenario: To enter name in Myprofilepage and select ADD FRIEND
  Given I am logged in to the website
  And I click ME link in homepage
  And I click MYPROFILE link
  And Myprofilepage is displayed
  When I enter the SRAAWYA in Myprofilepage
  And I select the SRAAWYA from various name
  Then I press enter to see SRAAWYA profile
 
 
  
  @editparentdetails
  Scenario Outline: To edit parent details
  Given I click on ADD YOUR ADDRESS link
  And I click on parent's details
  When I enter "<name>" "<Email>" "<MobileNo>"
  And I click save 
  Then parent details have been uploaded successfully
  Examples:
  |name | |Email |                |MobileNo |
  |Anjum ||Anjum_1289@gmail.com|  |9949388471|
  
  @Callme
  Scenario Outline: To call customer care support
  Given I click on CALL ME link in homepage
  When I enter "<Mobileno>"
  And I click on CALL NOW 
  Then call is placed to the customer care
  Examples:
  |Mobileno |
  |9949399521|
  
  