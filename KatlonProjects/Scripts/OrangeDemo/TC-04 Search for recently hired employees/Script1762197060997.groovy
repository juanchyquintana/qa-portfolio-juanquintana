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

recordsBefore = WebUI.getText(findTestObject('OR-OrangeDemo/span_RecordsFound_Quantity'))

WebUI.waitForElementClickable(findTestObject('OR-OrangeDemo/input_EmployeeName_Search'), 3)

WebUI.click(findTestObject('OR-OrangeDemo/input_EmployeeName_Search'))

WebUI.setText(findTestObject('OR-OrangeDemo/input_EmployeeName_Search'), 'Employee Rocco')

WebUI.verifyElementAttributeValue(findTestObject('OR-OrangeDemo/input_EmployeeName_Search'), 'value', 'Employee Rocco', 
    3)

WebUI.click(findTestObject('OR-OrangeDemo/button_Search_Employee'))

WebUI.waitForElementVisible(findTestObject('OR-OrangeDemo/div_row_information_Employee'), 3)

recordsAfter = WebUI.getText(findTestObject('OR-OrangeDemo/span_RecordsFound_Quantity'))

WebUI.verifyMatch(recordsAfter, '^\\(\\d+\\) Record(s)? Found$', true)

WebUI.verifyNotMatch(recordsAfter, '^\\(0\\) Record(s)? Found$', true)

WebUI.verifyElementPresent(findTestObject('OR-OrangeDemo/div_row_information_Employee'), 3)

WebUI.verifyNotMatch(recordsAfter, recordsBefore, false)

WebUI.verifyTextPresent('Employee Rocco', false)

WebUI.delay(3)

WebUI.closeBrowser()

