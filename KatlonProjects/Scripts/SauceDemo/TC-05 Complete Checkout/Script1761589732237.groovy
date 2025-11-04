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

WebUI.setText(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/input_Swag Labs_user-name'), 'standard_user')

WebUI.setEncryptedText(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/input_Swag Labs_password'), 'qcu24s4901FyWDTwXGr6XA==')

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/input_Swag Labs_login-button'))

WebUI.waitForElementNotPresent(findTestObject('OR-SauceDemo/OR-TC03/span_Swag Labs_shopping_cart_badge'), 5)

WebUI.click(findTestObject('OR-SauceDemo/OR-TC05/button_29.99_add-to-cart-sauce-labs-backpack'))

WebUI.waitForElementPresent(findTestObject('OR-SauceDemo/OR-TC05/button_29.99_remove-sauce-labs-backpack'), 3)

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/button_9.99_add-to-cart-sauce-labs-bike-light'))

WebUI.waitForElementPresent(findTestObject('OR-SauceDemo/OR-TC05/button_9.99_remove-sauce-labs-bike-light'), 3)

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/a_Swag Labs_shopping_cart_link'))

WebUI.waitForElementPresent(findTestObject('OR-SauceDemo/OR-TC05/div_Description_cart_item'), 2)

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/button_Continue Shopping_checkout'))

WebUI.verifyElementText(findTestObject('OR-SauceDemo/OR-TC05/span_Swag Labs_title'), 'Checkout: Your Information', FailureHandling.STOP_ON_FAILURE)

WebUI.setText(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/input_Checkout Your Information_first-name'), 'Rocco')

WebUI.verifyElementAttributeValue(findTestObject('OR-SauceDemo/OR-TC05/input_Checkout Your Information_first-name'), 'value', 
    'Rocco', 3)

WebUI.setText(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/input_Checkout Your Information_last-name'), 'Test')

WebUI.verifyElementAttributeValue(findTestObject('OR-SauceDemo/OR-TC05/input_Checkout Your Information_last-name'), 'value', 
    'Test', 3)

WebUI.setText(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/input_Checkout Your Information_postal-code'), '4000')

WebUI.verifyElementAttributeValue(findTestObject('OR-SauceDemo/OR-TC05/input_Checkout Your Information_postal-code'), 'value', 
    '4000', 3)

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/input_Cancel_continue'))

WebUI.verifyElementText(findTestObject('OR-SauceDemo/OR-TC05/span_Swag Labs_title'), 'Checkout: Overview', FailureHandling.STOP_ON_FAILURE)

WebUI.click(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/button_Cancel_finish'))

WebUI.verifyElementText(findTestObject('OR-SauceDemo/OR-TC05/span_Swag Labs_title'), 'Checkout: Complete!', FailureHandling.STOP_ON_FAILURE)

WebUI.verifyElementText(findTestObject('Object Repository/OR-SauceDemo/OR-TC05/h2_Checkout Complete_complete-header'), 'Thank you for your order!')

WebUI.closeBrowser()

