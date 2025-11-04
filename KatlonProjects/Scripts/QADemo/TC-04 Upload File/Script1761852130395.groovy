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

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 'Juan')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_firstName'), 'value', 
    'Juan', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 'Quintana')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Name_lastName'), 'value', 
    'Quintana', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 'juan@gmail.com')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_Email_userEmail'), 
    'value', 'juan@gmail.com', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Male'), 3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Male'))

WebUI.verifyElementClickable(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_radio_Male'), FailureHandling.STOP_ON_FAILURE)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), 3)

WebUI.setText(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), '1234567890')

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_number_Mobile'), 'value', 
    '1234567890', 3)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), 3)

WebUI.click(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'))

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), Keys.chord(Keys.CONTROL, 
        'A'))

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), '29 Jul 1969')

WebUI.sendKeys(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), Keys.chord(Keys.ENTER))

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionUserInformation/input_date_DateOfBirth'), 
    'value', '29 Jul 1969', 3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/input_Subjects_subjectsInput'))

WebUI.sendKeys(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/SectionSubjects/input_Subjects_subjectsInput'), 'Soci')

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/option_Subjects_byText', [('subject') : 'Social Studies']), 
    3)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/option_Subjects_byText', [('subject') : 'Social Studies']))

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/chip_subject_byText', [('subject') : 'Social Studies']), 
    3)

WebUI.verifyElementPresent(findTestObject('OR-QADemo/Page_DEMOQA/SectionSubjects/chip_subject_byText', [('subject') : 'Social Studies']), 
    3)

WebUI.scrollToElement(findTestObject('OR-QADemo/Page_DEMOQA/SectionHobbies/label_checkbox_Sports'), 0)

WebUI.waitForElementClickable(findTestObject('OR-QADemo/Page_DEMOQA/SectionHobbies/label_checkbox_Sports'), 2)

WebUI.click(findTestObject('OR-QADemo/Page_DEMOQA/SectionHobbies/label_checkbox_Sports'))

WebUI.verifyElementAttributeValue(findTestObject('OR-QADemo/Page_DEMOQA/SectionHobbies/input_checkbox_Sports'), 'checked', 
    'true', 2)

WebUI.scrollToElement(findTestObject('OR-QADemo/Page_DEMOQA/SectionPictureProfile/input_file_uploadPicture'), 0)

WebUI.waitForElementVisible(findTestObject('OR-QADemo/Page_DEMOQA/SectionPictureProfile/input_file_uploadPicture'), 0)

WebUI.uploadFile(findTestObject('OR-QADemo/Page_DEMOQA/SectionPictureProfile/input_file_uploadPicture'), 'C:\\\\Users\\\\jquin\\\\Desktop\\\\Juandy\\\\egProfile.jpg')

fileName = WebUI.executeJavaScript('return (function(){\n  const el = document.querySelector(\'#uploadPicture\');\n  return el && el.files && el.files.length ? el.files[0].name : \'\';\n})();\n', 
    [])

WebUI.verifyMatch(fileName, '.*egProfile\\.jpg$', true)

WebUI.click(findTestObject('Object Repository/OR-QADemo/Page_DEMOQA/button_Select City_submit'))

WebUI.verifyElementText(findTestObject('OR-QADemo/Page_DEMOQA/SectionPictureProfile/td_form_Picture'), 'Picture')

WebUI.verifyElementText(findTestObject('OR-QADemo/Page_DEMOQA/SectionPictureProfile/td_form_PictureName'), fileName)

WebUI.closeBrowser(FailureHandling.STOP_ON_FAILURE)

