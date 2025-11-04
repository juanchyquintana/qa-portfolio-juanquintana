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

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 'Coki')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 'value', 
    'Coki', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 'Coquete')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 'value', 
    'Coquete', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 'email@gmail.com')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 
    'value', 'email@gmail.com', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Other'), 3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Other'))

WebUI.verifyElementClickable(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Other'), FailureHandling.STOP_ON_FAILURE)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), 3)

WebUI.click(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'))

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), Keys.chord(Keys.CONTROL, 
        'A'))

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), '09 Jan 2014')

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), Keys.chord(Keys.ENTER))

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), 
    'value', '09 Jan 2014', 3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/input_Subjects_subjectsInput'))

WebUI.sendKeys(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionSubjects/input_Subjects_subjectsInput'), 'Ph')

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/option_Subjects_byText', [('subject') : 'Physics']), 
    3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/option_Subjects_byText', [('subject') : 'Physics']))

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/chip_subject_byText', [('subject') : 'Physics']), 
    3)

WebUI.verifyElementPresent(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/chip_subject_byText', [('subject') : 'Physics']), 
    3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/input_Subjects_subjectsInput'))

WebUI.sendKeys(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionSubjects/input_Subjects_subjectsInput'), 'Ar')

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/option_Subjects_byText', [('subject') : 'Arts']), 
    3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/option_Subjects_byText', [('subject') : 'Arts']))

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/chip_subject_byText', [('subject') : 'Arts']), 
    3)

WebUI.verifyElementPresent(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/chip_subject_byText', [('subject') : 'Arts']), 
    3)

WebUI.scrollToElement(findTestObject('OR-QADemo/Page_DEMOQA/SectionHobbies/label_checkbox_Reading'), 0)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionHobbies/label_checkbox_Reading'))

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionHobbies/input_checkbox_Reading'), 'checked', 
    'true', 2)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/button_Select City_submit'))

WebUI.focus(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'))

WebUI.delay(3)

WebUI.closeBrowser()

