exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textBox = page.getByLabel('Username')
        this.password_textBox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async enterUsername(username){
        await this.username_textBox.fill(username)
    }

    async enterPassword(password){
        await this.password_textBox.fill(password)
    }

    async clickOnLogin(){
        await this.login_button.click()
    }
}