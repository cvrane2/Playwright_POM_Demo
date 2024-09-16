import { test, expect } from '@playwright/test';
import {LoginPage} from './pages/login';
import {LogoutPage} from './pages/logout';

test('test', async ({ page }) => {

    const Login = new LoginPage(page);
    const Logout = new LogoutPage(page);

    await Login.gotoLoginPage();
    await Login.enterUsername('tomsmith');
    await Login.enterPassword('SuperSecretPassword!');
    await Login.clickOnLogin();
    
    await Logout.clickOnLogout();
    
});