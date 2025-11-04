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

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 'Franco')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 'value', 
    'Franco', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 'Pool')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 'value', 
    'Pool', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 'fp@gmail.com')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 
    'value', 'fp@gmail.com', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Female'), 3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Female'))

WebUI.verifyElementClickable(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Female'), FailureHandling.STOP_ON_FAILURE)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), '3579514682')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), 'value', 
    '3579514682', 3)

WebUI.verifyElementNotClickable(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_City'))

WebUI.scrollToElement(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_State'), 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_State'), 3)

WebUI.enhancedClick(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_State'))

WebUI.focus(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_State'))

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_State'), 'NCR')

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_State'), Keys.chord(Keys.ENTER))

WebUI.verifyElementText(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/value_State'), 'NCR')

WebUI.scrollToElement(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_City'), 3)

WebUI.waitForElementClickable(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_City'), 3)

WebUI.enhancedClick(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_City'))

WebUI.focus(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_City'))

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_City'), 'Delhi')

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/select_City'), Keys.chord(Keys.ENTER))

WebUI.verifyElementText(findTestObject('OR-QADemo/Page_DEMOQA/SectionUbicationUser/value_City'), 'Delhi')

WebUI.delay(3)

WebUI.closeBrowser()

