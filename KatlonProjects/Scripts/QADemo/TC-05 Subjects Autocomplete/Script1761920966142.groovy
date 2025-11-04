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

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 'Name Test')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 'value', 
    'Name Test', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 'Last Name Test')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 'value', 
    'Last Name Test', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 'emailtest@gmail.com')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 
    'value', 'emailtest@gmail.com', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Other'), 3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Other'))

WebUI.verifyElementClickable(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Other'), FailureHandling.STOP_ON_FAILURE)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), '7891234560')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), 'value', 
    '7891234560', 3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/input_Subjects_subjectsInput'))

WebUI.sendKeys(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionSubjects/input_Subjects_subjectsInput'), 'Ma')

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/option_Subjects_byText', [('subject') : 'Maths']), 
    3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/option_Subjects_byText', [('subject') : 'Maths']))

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/chip_subject_byText', [('subject') : 'Maths']), 
    3)

WebUI.verifyElementText(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/chip_subject_byText', [('subject') : 'Maths']), 
    'Maths')

WebUI.verifyElementPresent(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/chip_subject_byText', [('subject') : 'Maths']), 
    3)

WebUI.delay(3)

WebUI.closeBrowser()

