Feature: Valid Login 
    @ValidLogin
     Scenario Outline: Login to application with valid credentials
        Given Launch the application
        Given Login to application with "<username>" and "<password>"
        Then Submit the login button
       Examples:
       |username|password|
       |tester@passthenote.com|Tester@123|
       |admin@passthenote.com|Admin@123|

       @InvalidLogin1
    Scenario: invalid Login
        Given Launch the application
        Then Verify invalid login with "test34er@passthenote.com"