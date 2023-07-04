import page from './page.js';

class loginPage extends page {
    //Object => element
    //method function => element interaction
    //ELMENT LIST

//GET ELEMENT
get emailField () {
    return $('#email')
}

get passwordField () {
    return $('#password')
}

get loginButton () {
    return $('button[type="submit"]')
}

get errorMessage () {
    return $('div[role="alert"]')
}

open () {
    return browser.url('https://kasirdemo.belajarqa.com')
}

async successLogin(email, password) {
    await this.open()
    await this.emailField.setvalue(email)
    await this.passwordField.setvalue(password)
    await this.loginButton.click()
}

}

export default new loginPage();
