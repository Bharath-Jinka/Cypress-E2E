import { RegisterPage } from "../../Pages/registerPage"  // imported from the Page class
const RegisterOBJ = new RegisterPage() // created object to access the data from the class.
import UserData from '../../fixtures/UserData.json'

describe('AutomatingRegistraction', () => {

    it('registration', () => {

        RegisterOBJ.OpenURL()
        RegisterOBJ.enterFirstName(UserData.Firstname)
        RegisterOBJ.enterLastName(UserData.lastName)
        RegisterOBJ.enterEmail(UserData.email)
        RegisterOBJ.enterTelephone(UserData.Telephone)
        RegisterOBJ.enterPassword(UserData.Password)
        RegisterOBJ.SelectCheckbox()
        RegisterOBJ.ClickConfirm()


    })

})