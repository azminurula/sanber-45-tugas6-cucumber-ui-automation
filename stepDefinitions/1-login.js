import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../pageObjects/loginPage';
import dashboardPage from '../pageObjects/dashboardPage';

Given('I am on the login page', async () => {
    await loginPage.open();
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/login');

});

When('I input email {string} and password {string}', async function (email, password) {
    await loginPage.emailField.setValue(email);
    await loginPage.passwordField.setValue(password);
});

When('I click on button login', async () => {
    await loginPage.loginButton.click();
})

Then('I must remain on login page displaying a message {string}', async function (errorMessageLogin) {
    await expect(loginPage.errorMessage).toExist();
    await expect(loginPage.errorMessage).toHaveTextContaining(errorMessageLogin);
})

Then('I must navigated to dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    await expect(dashboardPage.textKasirAja).toExist();
});