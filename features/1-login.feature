Feature: Login flow "kasirAja"

Background:
    Given I am on the login page

    Scenario: As a user, I'll try testing negative test 
        When I input email "<email>" and password "<password>"
        And I click on button login
        Then I must remain on login page displaying a message "<errorMessageLogin>"

        Examples:
            | email                     | password    | errorMessageLogin                       |   
            |                           |             | \"email\" is not allowed to be empty    |
            |                           | Azminurul28 | \"email\" is not allowed to be empty    |
            | amoorastore2022@gmail.com |             | \"password\" is not allowed to be empty |
            | amoorastore2022           | Azminurul28 | \"email\" must be a valid email         |
            | amoorastore@gmail.com     | Azminurul28 | Kredensial yang Anda berikan salah      |
            | amoorastore2022@gmail.com | Azminurul   | Kredensial yang Anda berikan salah      |

    Scenario: As a user, I can successfully login in kasirAja
        When I input email "<email>" and password "<password>"
        And I click on button login
        Then I must navigated to dashboard page

        Examples:
            | email                     | password    | message  |
            | amoorastore2022@gmail.com | Azminurul28 | kasirAja |
