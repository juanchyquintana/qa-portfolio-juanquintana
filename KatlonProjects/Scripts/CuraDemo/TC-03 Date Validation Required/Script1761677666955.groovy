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

WebUI.click(findTestObject('OR-CuraDemo/OR-TC02/Login/a_We Care About Your Health_btn-make-appointment'))

WebUI.setText(findTestObject('OR-CuraDemo/OR-TC03/Login/input_Username_txt-username'), GlobalVariable.username)

WebUI.verifyElementAttributeValue(findTestObject('OR-CuraDemo/OR-TC03/Login/input_Username_txt-username'), 'value', GlobalVariable.username, 
    5)

WebUI.setText(findTestObject('OR-CuraDemo/OR-TC03/Login/input_Password_txt-password'), GlobalVariable.password)

WebUI.verifyElementAttributeValue(findTestObject('OR-CuraDemo/OR-TC03/Login/input_Password_txt-password'), 'value', GlobalVariable.password, 
    5)

WebUI.click(findTestObject('OR-CuraDemo/OR-TC01/button_Password_btn-login'), FailureHandling.STOP_ON_FAILURE)

WebUI.selectOptionByValue(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/select_Facility_combo_facility'), 'Hongkong CURA Healthcare Center', 
    true)

WebUI.verifyOptionSelectedByValue(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/select_Facility_combo_facility'), 
    'Hongkong CURA Healthcare Center', false, 3)

WebUI.click(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/input_Apply for hospital readmission_chk_ho_9218d5'))

WebUI.verifyElementChecked(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/input_Apply for hospital readmission_chk_ho_9218d5'), 
    3)

WebUI.click(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/input_None_radio_program_none'))

WebUI.verifyElementChecked(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/input_None_radio_program_none'), 3)

WebUI.setText(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/textarea_Comment_txt_comment'), 'Test without date. Date validation require')

WebUI.verifyElementAttributeValue(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/textarea_Comment_txt_comment'), 'value', 
    'Test without date. Date validation require', 3)

WebUI.verifyElementAttributeValue(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/input_Visit Date (Required)_txt_visit_date'), 
    'required', 'true', 3)

WebUI.click(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/button_Comment_btn-book-appointment'))

WebUI.waitForElementVisible(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/input_Visit Date (Required)_txt_visit_date'), 
    3)

