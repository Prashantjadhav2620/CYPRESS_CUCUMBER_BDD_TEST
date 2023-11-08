Feature: OrangeHRM validation

  Scenario Outline:Login to OrangeHRM using valid username and password
  
    When I am visit the OrangeHRM Page
    Given I should be login OrangeHRM using valid "<UserName>" and "<Password>"
    And I should be Validate "Dashboard"
    And I should be navigate to the PIM page
    And I should be Validate "PIM"
    And I should be add a new User using "<firstname>" and "<middlename>" or "<lastname>"
    And I should be Validate a new User

    Examples:
      | UserName | Password | firstname | middlename | lastname |
      | Admin    | admin123 | aniket    | Ashok      | patil    |