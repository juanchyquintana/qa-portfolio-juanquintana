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

WebUI.navigateToUrl(GlobalVariable.baseUrl)

WebUI.click(findTestObject('OR-CuraDemo/OR-TC05/a_We Care About Your Health_btn-make-appointment'))

WebUI.setText(findTestObject('Object Repository/OR-CuraDemo/OR-TC05/input_Username_txt-username'), GlobalVariable.username)

WebUI.verifyElementAttributeValue(findTestObject('OR-CuraDemo/OR-TC05/input_Username_txt-username'), 'value', GlobalVariable.username, 
    5)

WebUI.setText(findTestObject('Object Repository/OR-CuraDemo/OR-TC05/input_Password_txt-password'), GlobalVariable.password)

WebUI.verifyElementAttributeValue(findTestObject('OR-CuraDemo/OR-TC05/input_Password_txt-password'), 'value', GlobalVariable.password, 
    5)

WebUI.click(findTestObject('Object Repository/OR-CuraDemo/OR-TC05/button_Password_btn-login'))

urlAppointment = WebUI.getUrl(FailureHandling.STOP_ON_FAILURE)

WebUI.waitForElementVisible(findTestObject('OR-CuraDemo/OR-TC05/a_CURA Healthcare_menu-toggle'), 5)

WebUI.click(findTestObject('Object Repository/OR-CuraDemo/OR-TC05/a_CURA Healthcare_menu-toggle'))

WebUI.click(findTestObject('Object Repository/OR-CuraDemo/OR-TC05/a'))

urlAfter = WebUI.getUrl()

WebUI.verifyMatch(urlAfter, GlobalVariable.baseUrl, false)

WebUI.navigateToUrl(urlAppointment)

WebUI.verifyElementVisible(findTestObject('OR-CuraDemo/OR-TC05/a_We Care About Your Health_btn-make-appointment'))

WebUI.closeBrowser()

