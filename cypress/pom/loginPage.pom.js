class Login {

    elements = {
        username: () => cy.get('[name = "username"]'),
        password: () => cy.get('[name = "password"]'),
        loginButton: () => cy.get('[type="submit"]'),
    }
    
    navigateLoginPage () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    };

    enterUsername (username) {
        this.elements.username().type(username);
    };

    enterPassword (password) {
        this.elements.password().type(password);
    };

    clickLoginButton () {
        this.elements.loginButton().click();
    };

    checkUserName () {
        let expectedName = 'manda user';

        cy.get('.oxd-userdropdown-name').then( (storeValue) => {
            let actualName = storeValue.text();
            
            expect(actualName).to.equal(expectedName);
            assert.equal(actualName,expectedName);
        })
    };
}

export default Login;