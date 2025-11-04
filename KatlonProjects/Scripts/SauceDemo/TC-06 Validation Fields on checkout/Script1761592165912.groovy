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

WebUI.navigateToUrl('https://www.saucedemo.com/')

WebUI.setText(findTestObject('Object Repository/OR-SauceDemo/OR-TC06/input_Swag Labs_user-name'), 'standard_user')

WebUI.setEncryptedText(findTestObject('Object Repository/OR-SauceDemo/OR-TC06/input_Swag Labs_password'), 'qcu24s4901FyWDTwXGr6XA==')

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC06/input_Swag Labs_login-button'))

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC06/button_29.99_add-to-cart-sauce-labs-backpack'))

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC06/a_Swag Labs_shopping_cart_link'))

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC06/button_Continue Shopping_checkout'))

WebUI.setText(findTestObject('OR-SauceDemo/OR-TC05/input_Checkout Your Information_last-name'), 'Test')

WebUI.verifyElementAttributeValue(findTestObject('OR-SauceDemo/OR-TC05/input_Checkout Your Information_last-name'), 'value', 
    'Test', 3)

WebUI.setText(findTestObject('OR-SauceDemo/OR-TC05/input_Checkout Your Information_postal-code'), '4000')

WebUI.verifyElementAttributeValue(findTestObject('OR-SauceDemo/OR-TC05/input_Checkout Your Information_postal-code'), 'value', 
    '4000', 3)

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC06/input_Cancel_continue'))

WebUI.waitForElementPresent(findTestObject('OR-SauceDemo/OR-TC06/h3'), 3)

WebUI.verifyElementText(findTestObject('OR-SauceDemo/OR-TC06/h3'), 'Error: First Name is required')

WebUI.closeBrowser()

