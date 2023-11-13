Feature: Instagram validation

  Scenario: Login to Instagram
    Given I am visit the instagram Page
    When click login button
    And I am Enter the valid userName and password
    Then I validate login page
    Then I am go to profile page and validate profile page
    Then I am go to home page and validate profile page

