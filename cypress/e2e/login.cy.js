import Login from "../pom/loginPage.pom";

const login = new Login;

describe('Login', () => {
    it('Enter valid credentials', () => {
        login.navigateLoginPage();
        login.enterUsername('Admin');
        login.enterPassword('admin123')
        login.clickLoginButton();
        login.checkUserName();
    })
})