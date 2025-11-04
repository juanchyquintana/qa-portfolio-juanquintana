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

WebUI.waitForPageLoad(10)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 'Rocco')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 'value', 
    'Rocco', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 'Roquete')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 'value', 
    'Roquete', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 'email')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 
    'value', 'email', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Male'), 3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Male'))

WebUI.verifyElementClickable(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Male'), FailureHandling.STOP_ON_FAILURE)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), '6549873215')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), 'value', 
    '6549873215', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), 3)

WebUI.click(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'))

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), Keys.chord(Keys.CONTROL, 
        'A'))

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), '09 Jan 2015')

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), Keys.chord(Keys.ENTER))

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), 
    'value', '09 Jan 2015', 3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/button_Select City_submit'))

WebUI.focus(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'))

WebUI.delay(3)

WebUI.closeBrowser()

