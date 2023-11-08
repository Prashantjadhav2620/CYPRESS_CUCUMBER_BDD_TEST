Feature: Instagram validation

  Background: Login to Amazon
    Given I am visit the Amazon Page
    When click sign button
    And I am Enter the valid userName "8459907108"
    Then I am Click the Login button
    Then I am Enter the valid password "Prashant6@"
    Then I am Click the Sign button


  Scenario: Product Add to Cart
    Then I am search the "<item>" in SearchBox
    Then I choose a random item from the search results
    Then selected Item Add to Cart
    Then I validate msg
    # And get a error msg
    Examples:
      | item|
      | pen |
#
  Scenario:Cart Page
    Given I am visit the Amazon Page
    Then I am Click the cart
    Then I am choose the product and delete it