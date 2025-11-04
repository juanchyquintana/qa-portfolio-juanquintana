import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.maximizeWindow()

WebUI.navigateToUrl(GlobalVariable.baseUrl)

WebUI.setText(findTestObject('Object Repository/OR-OrangeDemo/Login/input_Username_username'), GlobalVariable.username)

WebUI.verifyElementAttributeValue(findTestObject('OR-OrangeDemo/Login/input_Username_username'), 'value', GlobalVariable.username, 
    3)

WebUI.setText(findTestObject('Object Repository/OR-OrangeDemo/Login/input_Password_password'), GlobalVariable.password)

WebUI.verifyElementAttributeValue(findTestObject('OR-OrangeDemo/Login/input_Password_password'), 'value', GlobalVariable.password, 
    3)

WebUI.click(findTestObject('Object Repository/OR-OrangeDemo/Login/button_LoginAccount'))

WebUI.click(findTestObject('OR-OrangeDemo/a_navigation_PIM'))

WebUI.click(findTestObject('OR-OrangeDemo/a_navegation_AddEmployee'))

WebUI.setText(findTestObject('Object Repository/OR-OrangeDemo/input_Employee Full Name_firstName'), 'Employee Rocco')

WebUI.verifyElementAttributeValue(findTestObject('OR-OrangeDemo/input_Employee Full Name_firstName'), 'value', 'Employee Rocco', 
    3)

WebUI.setText(findTestObject('Object Repository/OR-OrangeDemo/input_Employee Full Name_middleName'), 'Roquete')

WebUI.verifyElementAttributeValue(findTestObject('OR-OrangeDemo/input_Employee Full Name_middleName'), 'value', 'Roquete', 
    3)

WebUI.setText(findTestObject('Object Repository/OR-OrangeDemo/input_Employee Full Name_lastName'), 'Quintana')

WebUI.verifyElementAttributeValue(findTestObject('OR-OrangeDemo/input_Employee Full Name_lastName'), 'value', 'Quintana', 
    3)

WebUI.waitForElementClickable(findTestObject('OR-OrangeDemo/input_EmployeeId_Value'), 5)

WebUI.click(findTestObject('OR-OrangeDemo/input_EmployeeId_Value'))

WebUI.sendKeys(findTestObject('OR-OrangeDemo/input_EmployeeId_Value'), Keys.chord(Keys.CONTROL, 'A'))

WebUI.sendKeys(findTestObject('OR-OrangeDemo/input_EmployeeId_Value'), Keys.chord(Keys.DELETE))

employeeId = WebUI.executeJavaScript('return (Math.floor(Math.random()*90000)+10000).toString();\n', [])

WebUI.sendKeys(findTestObject('OR-OrangeDemo/input_EmployeeId_Value'), employeeId)

WebUI.verifyElementAttributeValue(findTestObject('OR-OrangeDemo/input_EmployeeId_Value'), 'value', employeeId, 3)

WebUI.sendKeys(findTestObject('OR-OrangeDemo/input_EmployeeId_Value'), Keys.chord(Keys.TAB))

WebUI.click(findTestObject('Object Repository/OR-OrangeDemo/button_employee_Create'))

WebUI.waitForElementVisible(findTestObject('OR-OrangeDemo/div_OrangeHRM, Inc_oxd-toast oxd-toast--suc_e9b1cc'), 5)

WebUI.verifyElementText(findTestObject('OR-OrangeDemo/p_message_Success'), 'Success')

WebUI.verifyElementText(findTestObject('OR-OrangeDemo/p_message_SuccessfullySaved'), 'Successfully Saved')

WebUI.delay(3)

urlAfter = WebUI.getUrl()

WebUI.verifyMatch(urlAfter, '.*viewPersonalDetails.*', true)

employeeIdAfter = WebUI.getAttribute(findTestObject('OR-OrangeDemo/input_EmployeeId_Saved'), 'value')

WebUI.verifyMatch(employeeIdAfter, employeeId, false)

WebUI.verifyMatch(employeeId, '\\d+', true)

WebUI.closeBrowser()

