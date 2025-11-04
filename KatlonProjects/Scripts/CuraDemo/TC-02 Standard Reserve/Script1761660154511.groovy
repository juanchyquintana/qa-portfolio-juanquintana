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

WebUI.setText(findTestObject('Object Repository/OR-CuraDemo/OR-TC02/Login/input_Username_txt-username'), GlobalVariable.username)

WebUI.verifyElementAttributeValue(findTestObject('OR-CuraDemo/OR-TC01/input_Username_txt-username'), 'value', GlobalVariable.username, 
    5)

WebUI.setText(findTestObject('Object Repository/OR-CuraDemo/OR-TC02/Login/input_Password_txt-password'), GlobalVariable.password)

WebUI.verifyElementAttributeValue(findTestObject('OR-CuraDemo/OR-TC01/input_Password_txt-password'), 'value', GlobalVariable.password, 
    5)

WebUI.click(findTestObject('Object Repository/OR-CuraDemo/OR-TC02/Login/button_Password_btn-login'))

WebUI.waitForElementVisible(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/h2_1'), 3)

WebUI.verifyElementText(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/h2_1'), 'Make Appointment')

WebUI.selectOptionByValue(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/select_Facility_combo_facility'), 'Hongkong CURA Healthcare Center', 
    false)

WebUI.verifyOptionSelectedByValue(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/select_Facility_combo_facility'), 
    'Hongkong CURA Healthcare Center', false, 3)

WebUI.click(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/input_Apply for hospital readmission_chk_ho_9218d5'))

WebUI.verifyElementChecked(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/input_Apply for hospital readmission_chk_ho_9218d5'), 
    3)

WebUI.click(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/input_Medicaid_radio_program_medicaid'))

WebUI.verifyElementChecked(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/input_Medicaid_radio_program_medicaid'), 
    3)

WebUI.click(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/input_Visit Date (Required)_txt_visit_date'))

WebUI.click(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/td_Sa_day'))

WebUI.verifyElementAttributeValue(findTestObject('OR-CuraDemo/OR-TC03/Make Appointment/input_Visit Date (Required)_txt_visit_date'), 
    'value', '31/10/2025', 3)

WebUI.click(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/textarea_Comment_txt_comment'))

WebUI.setText(findTestObject('Object Repository/OR-CuraDemo/OR-TC02/Make Appointment/textarea_Comment_txt_comment'), 'Test Test')

WebUI.verifyElementAttributeValue(findTestObject('OR-CuraDemo/OR-TC02/Make Appointment/textarea_Comment_txt_comment'), 'value', 
    'Test Test', 3)

WebUI.click(findTestObject('Object Repository/OR-CuraDemo/OR-TC02/Make Appointment/button_Comment_btn-book-appointment'))

WebUI.waitForElementVisible(findTestObject('OR-CuraDemo/OR-TC02/Summary of Appointment/h2'), 3)

WebUI.verifyElementText(findTestObject('OR-CuraDemo/OR-TC02/Summary of Appointment/h2'), 'Appointment Confirmation')

WebUI.verifyElementText(findTestObject('OR-CuraDemo/OR-TC02/Summary of Appointment/p_Facility_facility'), 'Hongkong CURA Healthcare Center')

WebUI.verifyElementText(findTestObject('OR-CuraDemo/OR-TC02/Summary of Appointment/p_Apply for hospital readmission_hospital_r_6297ca'), 
    'Yes')

WebUI.verifyElementText(findTestObject('OR-CuraDemo/OR-TC02/Summary of Appointment/p_Healthcare Program_program'), 'Medicaid')

WebUI.verifyElementText(findTestObject('OR-CuraDemo/OR-TC02/Summary of Appointment/p_Visit Date_visit_date'), '31/10/2025')

WebUI.verifyElementText(findTestObject('OR-CuraDemo/OR-TC02/Summary of Appointment/p_Comment_comment'), 'Test Test')

WebUI.closeBrowser()

