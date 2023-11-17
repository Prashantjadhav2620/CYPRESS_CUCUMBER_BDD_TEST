Feature: Amazon validation

  Background: Login to Amazon
    Given I am visit the Amazon Page
    When click sign button
    And I am Enter the valid userName "AMAZON_USER_USER"
    Then I am Click the Login button
    Then I am Enter the valid password "AMAZON_USER_PASS"
    Then I am Click the Sign button


  Scenario Outline: Product Add to Cart
    Then I am search the "<item>" in SearchBox
    Then I choose a random item from the search results
    Then selected Item Add to Cart
#    Then I validate msg
    # And get a error msg
    Examples:
      | item|
      | redmi 12 5g |
#      | pen |
#
#  Scenario:Cart Page
#    Given I am visit the Amazon Page
#    Then I am Click the cart
#    Then I am choose the product and delete it