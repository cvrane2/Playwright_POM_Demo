exports.LogoutPage = class LogoutPage{

    constructor(page) {

        this.page = page
        this.logout_Button = page.getByRole('link', { name: 'Logout' })
    }

    async clickOnLogout(){
        await this.logout_Button.click();
    }
}