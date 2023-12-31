Feature: Sign in

  Background: Navigate to the Sign in Page
    Given open the Amazon page
    And click on sign in button

  Scenario: without using any email address
    Given click on continue button
    Then The alert message should be given to user as Enter your email or mobile phone number

  # Scenario: using an invalid email address
  #   Given type any email address
  #   When click on continue button
  #   Then The error message should be given to user as We cannot find an account with that email address
