import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public ApiData$ = new BehaviorSubject([])
  constructor(
    private _http: HttpClient
  ) { }
  ///-----------------------------------------Company Api ---------------------------------------------->

  addCompany(data: any) {
    return this._http.post<any>(environment._api + "/api/admin/createadmin", data)
  }
  getCompany() {
    return this._http.get<any>(environment._api + "/api/admin/admin")
  }
  deleteCompany(id: string) {
    return this._http.delete<any>(environment._api + '/api/admin/admin/' + id)
  }
  addPlan(data: any) {
    return this._http.post<any>(environment._api + "/api/plan", data)
  }

  updateCompany(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/admin/admin/" + id, data)
  }
  ///-----------------------------------------Plan Api ---------------------------------------------->

  updatePlan(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/plan/" + id, data)
  }
  getPlan() {
    return this._http.get<any>(environment._api + "/api/plan")

  }
  getPlanById(pid: any) {
    return this._http.get<any>(environment._api + "/api/plan/" + pid)
  }

  ///-----------------------------------------Product Api ---------------------------------------------->


  getClient() {
    return this._http.get<any>(environment._api + "/api/client")
  }
  getUser() {
    return this._http.get<any>(environment._api + "/api/user")
  }
  ///-----------------------------------------Deal Api ---------------------------------------------->
  addDeal(data: any) {
    return this._http.post<any>(environment._api + "/api/deals", data)
  }
  updateDeal(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/deals/" + id, data)
  }
  getDeal() {
    return this._http.get<any>(environment._api + "/api/deals")
  }
  getDealById(pid: any) {
    return this._http.get<any>(environment._api + "/api/deals/" + pid)
  }
  deleteDeal(pid: any) {
    return this._http.delete<any>(environment._api + "/api/deals/" + pid)
  }
  // --------------------------------leads data----------------------------------------------------------
  addLead(data: any) {
    return this._http.post<any>(environment._api + "/api/leads", data)
  }
  updateLead(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/leads/" + id, data)
  }
  getLead() {
    return this._http.get<any>(environment._api + "/api/leads")
  }
  getLeadById(pid: any) {
    return this._http.get<any>(environment._api + "/api/leads/" + pid)
  }
  deleteLead(id: any) {
    return this._http.delete<any>(environment._api + "/api/leads/" + id)
  }


  ///-----------------------------------------User Api ---------------------------------------------->
  addUser(data: any) {
    return this._http.post<any>(environment._api + "/api/admin/createuser", data)
  }
  GetUser() {
    return this._http.get<any>(environment._api + "/api/admin/user")
  }
  deleteUser(id: any) {
    return this._http.delete<any>(`${environment._api}/api/admin/user/${id}`)
  }
  editUser(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/admin/user/" + id, data)
  }
  resetpass(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/admin/userpassword/" + id, data)
  }

  ///-----------------------------------------Landing page ScreenShorts Api ---------------------------------------------->

  addScreenshortsList(data: any) {
    return this._http.post<any>(environment._api + "/api/landingpage/screenshotlist", data)
  }
  GetScreenshortsList() {
    return this._http.get<any>(environment._api + "/api/landingpage/screenshotlist")
  }
  deleteScreenshortsList(id: any) {
    return this._http.delete<any>(`${environment._api}/api/landingpage/screenshotlist/${id}`)
  }
  editScreenshortsList(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/admin/client/" + id, data)
  }


  ///-----------------------------------------Discover Api ---------------------------------------------->
  Getdiscover() {
    return this._http.get<any>(environment._api + "/api/landingpage/discover")
  }
  Adddiscover(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/landingpage/discover/" + id, data)
  }
  ///-------------------------------------------Create Discover Api ---------------------------------------------->
  adddiscover(data: any) {
    return this._http.post<any>(environment._api + "/api/landingpage/discoverlist", data)
  }
  GetAlldiscover() {
    return this._http.get<any>(environment._api + "/api/landingpage/discoverlist")
  }
  deletediscover(id: any) {
    return this._http.delete<any>(`${environment._api}/api/landingpage/discoverlist/${id}`)
  }
  getDiscoverById(_id: any) {
    return this._http.get<any>(environment._api + "/api/landingpage/discoverlist/" + _id)
  }
  updatediscover(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/landingpage/discoverlist/" + id, data)
  }
  ///-----------------------------------------Feature Api ---------------------------------------------->

  updateFeature(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/landingpage/feature" + id, data)
  }
  getFeature() {
    return this._http.get<any>(environment._api + "/api/landingpage/feature")
  }
  getFeatureList() {
    return this._http.get<any>(environment._api + "/api/landingpage/featurelist")
  }

  addFeature(data: any) {
    return this._http.post<any>(environment._api + "/api/landingpage/featurelist", data)
  }

  ///-------------------------Doctor api-------------------------------->
  getDoctor() {
    return this._http.get<any>(environment._api + "/api/doctor")
  }

  addDoctor(data: any) {
    return this._http.post<any>(environment._api + "/api/doctor", data)
  }
  deletedoctor(id: any) {
    return this._http.delete<any>(`${environment._api}c${id}`)
  }
  editDoctor(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/doctor/" + id, data)
  }
  /////////////////////////////// New Service For Hospital /////////////////////////////////////
  addPatient(data: any) {
    return this._http.post<any>(environment._api + "/api/patient", data)
  }
  addBookApp(data: any) {
    return this._http.post<any>(environment._api + "/api/sendotp", data)
  }
  addOTPApp(data: any) {
    return this._http.post<any>(environment._api + "/api/verifyotp", data)
  }
  getpatientById(id: any) {
    return this._http.get<any>(environment._api + "/api/patient/" + id)
  }
  getpatientByDoctorId(id: any) {
    return this._http.get<any>(environment._api + "/api/patient/" + id)
  }
  // getAllPatientss(state:any,city:any) {
  //   return this._http.get<any>(environment._api + `/api/getallpatientbystatecity/state/city?state=${state}&city=${city}`)
  // }

  getAllPatientss() {
    return this._http.get<any>(environment._api + "/api/patient")
  }

  getAllPatient() {
    return this._http.get<any>(environment._api + "/api/patient")
  }
  getAllPatientbydoctor(state: any, city: any, id: any) {
    return this._http.get<any>(environment._api + `/api/patient/get/states/city/doctorid?state=${state}&city=${city}&doctorId=${id}`)
  }

  getAllDepartment() {
    return this._http.get<any>(environment._api + "/api/department")
  }
  deletepatient(id: string) {
    return this._http.delete<any>(environment._api + '/api/patient/' + id)
  }
  getPatientById(id: any) {
    return this._http.get<any>(environment._api + "/api/patient/" + id)
  }

  updatepatient(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/patient/" + id, data)
  }

  //////////////////////////////////////////// add slote doctor /////////////////////////
  addPrescription(data: any) {
    return this._http.post<any>(environment._api + "/api/slot", data)
  }
  getAllSlot() {
    return this._http.get<any>(environment._api + "/api/slot/get/")
  }
  getAllDoctorDepartment(depart: any) {
    return this._http.get<any>(environment._api + "/api/precipitation/department/" + depart)
  }
  getPatientDetails(depart: any) {
    return this._http.get<any>(environment._api + "/api/precipitation/patient/" + depart)
  }
  // //////////////////////////////////**************pooja appointment****************************///////// */
  addAppointment(obj: any) {
    return this._http.post<any>(environment._api + "/api/appointment", obj)
  }
  getAppointment() {
    return this._http.get<any>(environment._api + "/api/appointment")
  }
  getAppointmentbyid(id: any) {
    return this._http.get<any>(environment._api + "/api/appointment/getappointmentbydoctorId/" + id)
  }

  getAppointmentById(id: any) {
    let URL = `${environment._api + "/api/appointment/"}/${id}`;
    return this._http.get<any>(URL)
  }
  getAppointmentSlotById(did: any, date: any) {
    return this._http.get<any>(environment._api + "/api/session/" + did + '/' + date)
  }
  getAppointmentByPatientId(id: any) {
    let URL = `${environment._api + "/api/appointmentbypatientid"}/${id}`;
    return this._http.get<any>(URL)
  }


  deleteAppointmentById(id: any) {
    let URL = `${environment._api + "/api/appointment/"}/${id}`;
    return this._http.delete<any>(URL)
  }
  ///--------------------------Hospital--------------------------------------

  getHospital() {
    return this._http.get<any>(environment._api + "/api/hospital")
  }
  addhospital(data: any) {
    return this._http.post<any>(environment._api + "/api/hospital", data)
  }

  deleteHospital(id: any) {
    return this._http.delete<any>(`${environment._api}/api/hospital/${id}`)
  }
  gethospitalById(pid: any) {
    return this._http.get<any>(environment._api + "/api/profile/" + pid)
  }
  edithospital(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/hospital/" + id, data)
  }

  //------------------------------Staff----------------------------------------
  getStaff() {
    return this._http.get<any>(environment._api + "/api/staff")
  }
  addStaff(data: any) {
    return this._http.post<any>(environment._api + "/api/staff", data)
  }



  ///--------------------------Hospital Schedule--------------------------------------

  getschedules() {
    return this._http.get<any>(environment._api + "/api/schedule")
  }
  addschedule(data: any) {
    return this._http.post<any>(environment._api + "/api/schedule", data)
  }



  ///--------------------------Hospital Schedule--------------------------------------

  getdepartmentset() {
    return this._http.get<any>(environment._api + "/api/department")
  }
  adddepartmentse(data: any) {
    return this._http.post<any>(environment._api + "/api/department", data)
  }
  getAllPatientDetail(patientData: any) {
    return this._http.get<any>(environment._api + "/api/precipitation/patient/" + patientData)
  }

  approveDoctor(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/doctorstatus/" + id, data)
  }
  ///--------------------------Doctor Registration--------------------------------------

  getdoctor() {
    return this._http.get<any>(environment._api + "/api/doctor")
  }
  getdoctors(state: string, city: string, dateTo: any, dateFrom: any) {
    return this._http.get<any>(`https://doctor3.onrender.com/api/states/cities/doctor/date?state=${state}&city=${city}&dateTo=${dateTo}&dateFrom=${dateFrom}`)
  }
  getSpecility() {
    return this._http.get<any>(environment._api + "/api/speciality")
  }
  getQualification(qualification: any) {
    let obj = {
      qualifications: qualification
    }
    return this._http.post<any>(`${environment._api}/api/speciality/qualification`, obj)

  }
  getspecialization(specialization: any) {
    let obj2 = {
      specializations: specialization
    }

    return this._http.post<any>(`${environment._api}/api/speciality/specialization`, obj2)
  }

  getsubspecialization() {
    return this._http.get<any>(environment._api + "/api/subspecialization")
  }
  getservice() {
    return this._http.get<any>(environment._api + "/api/service")
  }
  getdoctorById(id: any) {
    return this._http.get<any>(environment._api + "/api/profile/" + id)
  }


  ///////////////////////////////////////Doctor Specialization//////////////////////////

  addspacialization(data: any) {
    return this._http.post<any>(environment._api + "/api/specialization", data)
  }
  getspacialization() {
    return this._http.get<any>(environment._api + "/api/specialization/get")
  }
  deletespacialization(id: string) {
    return this._http.delete<any>(environment._api + '/api/specialization/' + id)
  }
  getSpecializationById(id: any) {
    return this._http.get<any>(environment._api + "/api/specialization/" + id)
  }
  updateSpecialization(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/specialization/" + id, data)
  }

  ///////////////////////////////////////Doctor Therapy//////////////////////////
  addTherapy(data: any) {
    return this._http.post<any>(environment._api + "/api/therapy", data)
  }
  getTherapy() {
    return this._http.get<any>(environment._api + "/api/therapy/get")
  }

  deleteTherapy(id: string) {
    return this._http.delete<any>(environment._api + '/api/therapy/' + id)
  }

  editTherapy(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/therapy/" + id, data)
  }

  GetTherapygetById(id: any) {
    return this._http.get<any>(environment._api + "/api/therapy/" + id)
  }

  ///////////////////////////////////////Doctor PhysicalHealth//////////////////////////

  addPhysicalHealth(data: any) {
    return this._http.post<any>(environment._api + "/api/physicalHealth", data)
  }
  getPhysicalHealth() {
    return this._http.get<any>(environment._api + "/api/physicalHealth/get")
  }

  deletePhysicalHealth(id: string) {
    return this._http.delete<any>(environment._api + '/api/physicalHealth/' + id)
  }

  editPhysicalHealth(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/physicalHealth/" + id, data)
  }

  getPhysicalHealthById(id: any) {
    return this._http.get<any>(environment._api + "/api/physicalHealth/" + id)
  }
  /////////////////////////////////////// Doctor session //////////////////////////

  addDoctorsSession(data: any) {
    return this._http.post<any>(environment._api + "/api/session", data)
  }
  getDoctorsSession(did: any) {
    return this._http.get<any>(environment._api + "/api/get/session/" + did)
  }
  deleteDoctorsSession(id: string) {
    return this._http.delete<any>(environment._api + "/api/session/" + id)
  }
  getDoctoreSessionById(id: any) {
    return this._http.get<any>(environment._api + "/api/session/get/" + id)
  }
  updateDoctoreSessionById(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/session/" + id, data)
  }
  GetProfile(userId: any) {
    return this._http.get<any>(environment._api + "/api/profile/" + userId)
  }
  getDrugs() {
    return this._http.get<any>(environment._api + "/api/drug/get")
  }
  deletedru(id: string) {
    return this._http.delete<any>(environment._api + "/api/drug/" + id)
  }
  addDrug(data: any) {
    return this._http.post<any>(environment._api + "/api/drug", data)
  }
  addPatientDocument(data: any) {
    return this._http.post<any>(environment._api + "/api/patientdocs", data)
  }
  // getPatientDocuments() {
  //   return this._http.get<any>(environment._api + "/api/patientdocs")
  // }
  //      addDoctorsSession(data: any) {
  //       return this._http.post<any>(environment._api + "/api/session", data)
  //     }
  //     getDoctorsSession() {
  //       return this._http.get<any>(environment._api + "/api/session/get")
  //     }
  //     deleteDoctorsSession(id:string){
  //       return this._http.delete<any>(environment._api +"/api/session/" +id)
  //     }
  //     getDoctoreSessionById(id:any) {
  //       return this._http.get<any>(environment._api + "/api/session/get/"+id)
  //     }
  //     updateDoctoreSessionById(id:any, data:any) {
  //       return this._http.put<any>(environment._api + "/api/session/"+id, data)
  //     }
  //     GetProfile(userId: any) {
  //       return this._http.get<any>(environment._api + "/api/profile/" + userId)
  //     }
  //     getDrugs() {
  //       return this._http.get<any>(environment._api + "/api/drug")
  //     }
  //     addDrug(data: any) {
  //       return this._http.post<any>(environment._api + "/api/drug", data)
  //     }
  //     addPatientDocument(data: any) {
  //       return this._http.post<any>(environment._api + "/api/patientdocs", data)
  //     }
  getPatientDocuments() {
    return this._http.get<any>(environment._api + "/api/patientdocs")
  }
  getPatientDocumentsById(id: any) {
    return this._http.get<any>(environment._api + "/api/patientdocs/" + id)
  }
  getLoggedPatientDocumentsById(id: any) {
    return this._http.get<any>(environment._api + "/api/patientdocs/getpatientdocsbypatientId/" + id)
  }





  //////////////////////// Private Note  ////////////////

  // addPatientNote(data: any) {
  //   return this._http.post<any>(environment._api + "/api/patientnote", data)
  // }
  // getPatientNote() {
  //   return this._http.get<any>(environment._api + "/api/patientnote")
  // }


  // //////////////////////// invoice   ////////////////
  // addinvoice(data: any) {
  //   return this._http.post<any>(environment._api + "/api/invoice", data)
  // }
  // getinvoice() {
  //   return this._http.get<any>(environment._api + "/api/invoice")
  // }
  // getinvoiceById(id: any) {
  //   return this._http.get<any>(environment._api + "/api/invoice/" + id)
  // }


  getCalender(id: any) {
    return this._http.get<any>(environment._api + "/api/session/calender/doctorid/" + id)
  }


  // // ---------------------------------------ConsultaTION _______________________________________________________________________________________

  // addConsultation(data: any) {
  //   return this._http.post<any>(environment._api + "/api/consultaion", data)
  // }

  // ////////////////////////// Country  //////////////////////////

  // getall_states(state: string) {
  //   return this._http.get<any>(`https://country-state-city-0jga.onrender.com/api?country=${state}`)
  // }

  // getall_country() {
  //   return this._http.get<any>(`https://country-state-city-0jga.onrender.com/api`)
  // }
  // getall_city(countrys: string, state: string) {
  //   return this._http.get<any>(`https://country-state-city-0jga.onrender.com/api?country=${countrys}&state=${state}`)
  // }

  getStateDoctor() {
    return this._http.get<any>(`https://state-city.onrender.com/states`)
  }
  getCityDoctor(state: string) {
    return this._http.get<any>(`https://state-city.onrender.com/states/cities?state=${state}`)
  }

  addPatientNote(data: any) {
    return this._http.post<any>(environment._api + "/api/patientnote", data)
  }
  getPatientNote() {
    return this._http.get<any>(environment._api + "/api/patientnote")
  }
  getPatientNoteByPatientId(id: any) {
    return this._http.get<any>(environment._api + "/api/patientnote/getprivatenotebypatientId/" + id)
  }


  //////////////////////// invoice   ////////////////
  addinvoice(data: any) {
    return this._http.post<any>(environment._api + "/api/invoice", data)
  }
  getinvoice() {
    return this._http.get<any>(environment._api + "/api/invoice")
  }
  getinvoiceById(id: any) {
    return this._http.get<any>(environment._api + "/api/invoice/" + id)
  }
  getinvoiceByPatientId(id: any) {
    return this._http.get<any>(environment._api + "/api/invoice/getinvoicebypatientid/" + id)
  }
  getinvoicetotal() {
    return this._http.get<any>(environment._api + "/api/invoice/get/totalamount")
  }

  // ---------------------------------------ConsultaTION _______________________________________________________________________________________

  addConsultation(data: any) {
    return this._http.post<any>(environment._api + "/api/consultaion", data)
  }
  getConsultationByAppDocPatientId(appId: any, patientId: any, doctorId: any) {
    return this._http.get<any>(environment._api + `/api/consultaion/get/threeid?appointmentId=${appId}&patientId=${patientId}&doctorId=${doctorId}`)
  }
  getConsultationByDocPatientId(patientId: any, doctorId: any) {
    return this._http.get<any>(environment._api + `/api/consultaion/get/twoid?patientId=${patientId}&doctorId=${doctorId}`)
  }

  ////////////////////////// Country  //////////////////////////

  getall_states(state: string) {
    return this._http.get<any>(`https://country-state-city-0jga.onrender.com/api?country=${state}`)
  }

  getall_country() {
    return this._http.get<any>(`https://country-state-city-0jga.onrender.com/api`)
  }
  getall_city(countrys: string, state: string) {
    return this._http.get<any>(`https://country-state-city-0jga.onrender.com/api?country=${countrys}&state=${state}`)
  }
  ////////////////////////// Country  //////////////////////////
  getallservices() {
    return this._http.get<any>(environment._api + "/api/allservices")
  }

  getallservicespercentageee(services: string) {
    return this._http.get<any>(`https://doctor3.onrender.com/api/allservices/servicepercentage/${services}`)
  }
  getMeetingbyid(id: any) {
    return this._http.get<any>(environment._api + "/api/appointment/getdatabydoctorId/" + id)
  }

  getPatientMeetingbyid(id: any) {
    return this._http.get<any>(environment._api + "/api/appointment/" + id)
  }
  addLabtest(data: any) {
    return this._http.post<any>(environment._api + "/api/labtest", data)
  }
  getLabtest() {
    return this._http.get<any>(environment._api + "/api/labtest")
  }
  addPackage(data: any) {
    return this._http.post<any>(environment._api + "/api/package", data)
  }
  getPackage() {
    return this._http.get<any>(environment._api + "/api/package")
  }
  ////////////////////////// lab test add  //////////////////////////

  addlabtest(data: any) {
    return this._http.post<any>(environment._api + "/api/category", data)
  }


  getlabtest() {
    return this._http.get<any>(environment._api + "/api/category/get")
  }

////////////////////////// Test Package add //////////////////////////

  addtestpackage(data: any) {
    return this._http.post<any>(environment._api + "/api/testpackage", data)
  }


  gettestpackage() {
    return this._http.get<any>(environment._api + "/api/testpackage")
  }

  ////////////////////////// Package Offer //////////////////////////

  addofferpackage(data: any){
    return this._http.post<any>(environment._api +"/api/packageoffer", data)
  }
  getofferpackage(){
    return this._http.get<any>(environment._api + "/api/packageoffer")
  }




}










