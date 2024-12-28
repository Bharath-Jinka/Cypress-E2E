export class RegisterPage {

    Weblocators = {

        'FirstName': '#input-firstname',
        'LastName': '#input-lastname',
        'Email': '#input-email',
        'Mobile': '#input-telephone',
        'Password': '#input-password',
        'ConfirmPWD': '#input-confirm',
        'radiobuttons': 'input[Text="Yes"]',
        'Checkbox': 'input[type="checkbox"]',
        'continuebutton': '.btn-primary',


    }

    OpenURL() {

        cy.visit(Cypress.env('URL')) //URL is the environmnetal variable available in config file
    }

    enterFirstName(FName) {
        cy.get(this.Weblocators.FirstName).type(FName)  
        // Fname is the parameter here, it wil be called in test data file

    }

    enterLastName(LName) {
        cy.get(this.Weblocators.LastName).type(LName)

    }

    enterEmail(email) {
        cy.get(this.Weblocators.Email).type(email)

    }


    enterTelephone(Telephone) {
        cy.get(this.Weblocators.Mobile).type(Telephone)

    }
    enterPassword(Pword) {
        cy.get(this.Weblocators.Password).type(Pword)
        cy.get(this.Weblocators.ConfirmPWD).type(Pword)

    }

   /* SelectRadiobuttons() {

        cy.get(this.Weblocators.radiobuttons).click()
    }*/

    SelectCheckbox() {

        cy.get(this.Weblocators.Checkbox).check()
    }
    ClickConfirm() {

        cy.get(this.Weblocators.continuebutton).click()
    }

}