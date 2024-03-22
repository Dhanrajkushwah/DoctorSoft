export class routes {
  static navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  private static base = '';


// only admin routes 

public static get core5(): string {
  return this.baseUrl+'/admin';
}

public static get Admin_User(): string {
  return this.core5 +'/user';
}

public static get Admin_Doctor(): string {
  return this.core5 +'/doctor';
}

public static get Admin_Client(): string {
  return this.core5 +'/clients';
}

  public static get baseUrl(): string {
    return this.base;
  }
  // auth routes
  public static get auth(): string {
    return this.base + '/auth';
  }
  // pooja

  public static get signIn(): string {
    return this.base + '/signin';
  }
  public static get signUp(): string {
    return this.base + '/signup';
  }
  public static get forgotPassword(): string {
    return this.base + '/forgetpassword';
  }
  // auth routes *ends*

  // error pages routes

  public static get errorPages(): string {
    return this.baseUrl + '/errorpages';
  }
  public static get errorPage404(): string {
    return this.errorPages + '/error404';
  }
  public static get errorPage500(): string {
    return this.errorPages + '/error500';
  }
  // error pages routes *ends*

  // core pages routes

  public static get core(): string {
    return this.baseUrl;
  }
  public static get dashboard(): string {
    return this.core + '/super-admin/dashboard';
  }
  public static get addPatient(): string {
    return this.core + '/super-admin/patient/add';
  }
  public static get dashboardadmin(): string {
    return this.core + '/admin/dashboard';
  }
  public static get laboratory(): string {
    return this.core + '/super-admin/laboratory';
  }
  public static get labtest(): string {
    return this.core + '/super-admin/labtest';
  }
  public static get labpackage(): string {
    return this.core + '/super-admin/labpackage';
  }
  public static get packageinclude(): string {
    return this.core + '/super-admin/packageinclude';
  }

  public static get packageoffer(): string {
    return this.core + '/super-admin/packageoffer';
  }
  
  public static get dashboardclient(): string {
    return this.core + '/client/dashboard';
  }
  public static get medicalRecord(): string {
    return this.core + '/client/medicalrecord';
  }
  public static get PatientprivateNote(): string {
    return this.core + '/client/privatenote';
  }
  public static get myInvoice(): string {
    return this.core + '/client/myinvoice';
  }
  public static get myAppointment(): string {
    return this.core + '/client/myappointment';
  }
  public static get dashboarduser(): string {
    return this.core + '/user/dashboard';
  }
  public static get components(): string {
    return this.core + '/components';
  }
  public static get blankPage(): string {
    return this.core + '/blank-page';
  }

  public static get sales(): string {
    return this.core + '/sales';
  }
  public static get purchase(): string {
    return this.core + '/purchase';
  }
  public static get expense(): string {
    return this.core + '/expense';
  }
  public static get quotation(): string {
    return this.core + '/quotation';
  }
  public static get transfer(): string {
    return this.core + '/transfer';
  }

  public static get return(): string {
    return this.core + '/return';
  }
  public static get people(): string {
    return this.core + '/people';
  }
  public static get places(): string {
    return this.core + '/places';
  }
  public static get element(): string {
    return this.core + '/element';
  }
  public static get charts(): string {
    return this.core + '/charts';
  }
  public static get icons(): string {
    return this.core + '/icons';
  }
  public static get forms(): string {
    return this.core + '/forms';
  }
  public static get table(): string {
    return this.core + '/table';
  }
  public static get application(): string {
    return this.core + '/application';
  }
  public static get report(): string {
    return this.core + '/report';
  }
  public static get users(): string {
    return this.core + '/users';
  }
  public static get settings(): string {
    return this.core + '/settings';
  }
  public static get profile(): string {
    return this.core + '/profile';
  }
  public static get activities(): string {
    return this.core + '/activities';
  }
  // public static get prescriptionList(): string {
  //   return this.core + '/client/prescription-list';
  // }

  public static get productList(): string {
    return this.core + '/super-admin/company';
  }
  public static get doctorList(): string {
    return this.core + '/super-admin/doctor';
  }

public static get patientListall(): string {
  return this.core + '/super-admin/patientdata';
}
  public static get doctorinfo(): string {
    return this.core + '/super-admin/doctorinfo';
  }

  public static get patientList(): string {
    return this.core + '/super-admin/patient';
  }
  public static get addappointment(): string {
    return this.core + '/super-admin/appointmentlist';
  }
  public static get appointment(): string {
    return this.core + '/super-admin/addappoiment';
  }
  public static get addDoctor(): string {
    return this.core + '/super-admin/doctor/add-doctor';
  }

  public static get appointmentList(): string {
    return this.core + '/super-admin/appointmentlist';
  }
  public static get allpatientpro(): string {
    return this.core + '/super-admin/allpatientPro';
  }
  public static get departnameList(): string {
    return this.core + '/super-admin/department';
  }
  public static get schedule(): string {
    return this.core + '/super-admin/schedule';
  }
  public static get sendcustomemail(): string {
    return this.core + '/super-admin/sendcustomemail';
  }
  
  public static get smsTemplate(): string {
    return this.core + '/super-admin/smstemplatelist';
  }
  public static get drug(): string {
    return this.core + '/super-admin/druglist';
  }
  public static get patientdocument(): string {
    return this.core + '/super-admin/patientdocument';
  }
  
  public static get smsTemplateForm(): string {
    return this.core + '/super-admin/smstemplate';
  }
  public static get smsSchedule(): string {
    return this.core + '/super-admin/patienthistory';
  }
  public static get privateNote(): string {
    return this.core + '/super-admin/privatenote';
  }
  public static get calender(): string {
    return this.core + '/super-admin/calender';
  }
  public static get newcalender(): string {
    return this.core + '/super-admin/newcalender';
  }
  
  public static get medication(): string {
    return this.core + '/super-admin/medication';
  }

  public static get AddSmsSchedule(): string {
    return this.core + '/super-admin/smsschedule/add';
  }
  
  public static get Hospital(): string {
    return this.core + '/super-admin/hospital';
  }
  public static get Staff(): string {
    return this.core + '/super-admin/staff';
  }
  public static get Prescription(): string {
    return this.core + '/super-admin/prescription';
  }
  public static get viewPrescription(): string {
    return this.core + '/super-admin/viewprescription';
  }
  public static get invoice(): string {
    return this.core + '/super-admin/invoice';
  }
  public static get allpatient(): string {
    return this.core + '/super-admin/allpatient';
  }


  public static get Addinvoice(): string {
    return this.core + '/super-admin/invoice/add';
  }
  public static get Printinvoice(): string {
    return this.core + '/super-admin/invoice/print';
  }
  public static get addTransfer(): string {
    return this.core +'/super-admin/plan/add';
  }
  public static get subCategoryList(): string {
    return this.core + '/super-admin/coupons';
  }
  public static get addSubcategory(): string {
    return this.core + '/super-admin/coupons/add';
  }

  public static get brandList(): string {
    return this.core + '/super-admin/planrequest';
  }
  
  public static get categoryList(): string {
    return this.core + '/super-admin/orders';
  }
  public static get addCategory(): string {
    return this.core + '/super-admin/orders/add';
  }
  public static get estimation(): string {
    return this.core + '/super-admin/estimation';
  }
  public static get addBrand(): string {
    return this.product + '/add-brand';
  }
  public static get importProduct(): string {
    return this.core + '/super-admin/setting';
  }
  public static get expenses(): string {
    return this.core + '/super-admin/expenses';
  }
  public static get staffList(): string {
    return this.core + '/user/staf-list';
  }
  public static get barcode(): string {
    return this.product + '/barcode';
  }
  public static get editProduct(): string {
    return this.product + '/edit-product';
  }
  public static get editCategory(): string {
    return this.product + '/edit-category';
  }
  public static get editSubCategory(): string {
    return this.product + '/edit-subcategory';
  }
  public static get editBrand(): string {
    return this.product + '/edit-brand';
  }
  public static get productDetails(): string {
    return this.product + '/product-details';
  }
 
  public static get salesList(): string {
    return this.sales + '/sales-list';
  }
  public static get pos(): string {
    return this.sales + '/pos';
  }
  public static get salesReturnLists(): string {
    return this.sales + '/sales-return-lists';
  }
  public static get createSalesReturns(): string {
    return this.sales + '/create-sales-returns';
  }
  public static get addSales(): string {
    return this.sales + '/add-sales';
  }
  public static get editSalesReturns(): string {
    return this.sales + '/edit-sales-returns';
  }
  public static get editSales(): string {
    return this.sales + '/edit-sales';
  }
  public static get salesDetails(): string {
    return this.sales + '/sales-details';
  }

  public static get purchaseList(): string {
    return this.purchase + '/purchase-list';
  }
  public static get addPurchase(): string {
    return this.purchase + '/add-purchase';
  }
  public static get importPurchase(): string {
    return this.purchase + '/import-purchase';
  }
  public static get editPurchase(): string {
    return this.purchase + '/edit-purchase';
  }

  public static get expenseList(): string {
    return this.expense + '/expense-list';
  }
  public static get expenseCategory(): string {
    return this.expense + '/expense-category';
  }
  public static get createExpense(): string {
    return this.expense + '/create-expense';
  }
  public static get editExpense(): string {
    return this.expense + '/edit-expense';
  }
  public static get quotationList(): string {
    return this.quotation + '/quotation-list';
  }
  public static get addQuotation(): string {
    return this.quotation + '/add-quotation';
  }
  public static get editQuotation(): string {
    return this.quotation + '/edit-quotation';
  }


  public static get importTransfer(): string {
    return this.transfer + '/import-transfer';
  }
  public static get editTransfer(): string {
    return this.transfer + '/edit-transfer';
  }

  public static get salesReturnList(): string {
    return this.return + '/sales-return-list';
  }
  public static get createSalesReturn(): string {
    return this.return + '/create-sales-return';
  }
  public static get purchaseReturnList(): string {
    return this.return + '/purchase-return-list';
  }
  public static get createPurchaseReturn(): string {
    return this.return + '/create-purchase-return';
  }
  public static get editSalesReturn(): string {
    return this.return + '/edit-sales-return';
  }
  public static get editPurchaseReturn(): string {
    return this.return + '/edit-purchase-return';
  }

  public static get customerList(): string {
    return this.people + '/customer-list';
  }
  public static get addCustomer(): string {
    return this.people + '/add-customer';
  }
  public static get supplierList(): string {
    return this.people + '/supplier-list';
  }
  public static get addSupplier(): string {
    return this.people + '/add-supplier';
  }
  public static get userList(): string {
    return this.people + '/user-list';
  }
  public static get addUser(): string {
    return this.people + '/add-user';
  }
  public static get storeList(): string {
    return this.people + '/store-list';
  }
  public static get addStore(): string {
    return this.people + '/add-store';
  }
  public static get editCustomer(): string {
    return this.people + '/edit-customer';
  }
  public static get editSupplier(): string {
    return this.people + '/edit-supplier';
  }
  public static get editUser(): string {
    return this.people + '/edit-user';
  }
  public static get editStore(): string {
    return this.people + '/edit-store';
  }

  public static get newCountry(): string {
    return this.places + '/new-country';
  }
  public static get countriesList(): string {
    return this.places + '/countries-list';
  }
  public static get newState(): string {
    return this.places + '/new-state';
  }
  public static get stateList(): string {
    return this.places + '/state-list';
  }
  public static get editCountry(): string {
    return this.places + '/edit-country';
  }
  public static get editState(): string {
    return this.places + '/edit-state';
  }

  public static get sweetAlerts(): string {
    return this.element + '/sweet-alerts';
  }
  public static get tooltip(): string {
    return this.element + '/tooltip';
  }
  public static get popover(): string {
    return this.element + '/popover';
  }
  public static get ribbon(): string {
    return this.element + '/ribbon';
  }
  public static get clipboard(): string {
    return this.element + '/clipboard';
  }
  public static get dragDrop(): string {
    return this.element + '/drag-drop';
  }
  public static get rangeSlider(): string {
    return this.element + '/range-slider';
  }
  public static get rating(): string {
    return this.element + '/rating';
  }
  public static get toaster(): string {
    return this.element + '/toaster';
  }
  public static get textEditor(): string {
    return this.element + '/text-editor';
  }
  public static get counter(): string {
    return this.element + '/counter';
  }
  public static get scrollbar(): string {
    return this.element + '/scrollbar';
  }

  public static get spinner(): string {
    return this.element + '/spinner';
  }
  public static get notification(): string {
    return this.element + '/notification';
  }
  public static get lightbox(): string {
    return this.element + '/lightbox';
  }

  public static get stickyNote(): string {
    return this.element + '/sticky-note';
  }
  public static get timeline(): string {
    return this.element + '/timeline';
  }
  public static get formWizard(): string {
    return this.element + '/form-wizard';
  }

  public static get chartApex(): string {
    return this.charts + '/chart-apex';
  }
  public static get chartNg2(): string {
    return this.charts + '/chart-ng2';
  }
  public static get chartPrime(): string {
    return this.charts + '/prime-ng';
  }

  public static get iconFontAwesome(): string {
    return this.icons + '/icon-fontawesome';
  }

  public static get iconFeather(): string {
    return this.icons + '/icon-feather';
  }
  public static get iconIonic(): string {
    return this.icons + '/icon-ionic';
  }
  public static get iconMaterial(): string {
    return this.icons + '/icon-material';
  }
  public static get iconPe7(): string {
    return this.icons + '/icon-pe7';
  }
  public static get iconSimpleline(): string {
    return this.icons + '/icon-simpleline';
  }

  public static get iconWeather(): string {
    return this.icons + '/icon-weather';
  }
  public static get iconThemify(): string {
    return this.icons + '/icon-themify';
  }
  public static get iconTypicon(): string {
    return this.icons + '/icon-typicon';
  }
  public static get iconFlag(): string {
    return this.icons + '/icon-flag';
  }

  public static get formBasicInputs(): string {
    return this.forms + '/form-basic-inputs';
  }
  public static get formInputsGroups(): string {
    return this.forms + '/form-input-groups';
  }
  public static get formHorizontal(): string {
    return this.forms + '/form-horizontal';
  }
  public static get formVertical(): string {
    return this.forms + '/form-vertical';
  }
  public static get formMask(): string {
    return this.forms + '/form-mask';
  }
  public static get formValidation(): string {
    return this.forms + '/form-validation';
  }
  public static get formSelect(): string {
    return this.forms + '/form-select';
  }
  public static get formFileUpload(): string {
    return this.forms + '/form-file-upload';
  }
  public static get basicTable(): string {
    return this.table + '/tables-basic';
  }
  public static get dataTable(): string {
    return this.table + '/data-basic';
  }
  public static get chat(): string {
    return this.core + '/super-admin/topbar';
  }
  public static get custompage(): string {
    return this.core + '/super-admin/custompage';
  }
  public static get home(): string {
    return this.core + '/super-admin/homepage';
  }
  public static get features(): string {
    return this.core + '/super-admin/features';
  }
  public static get discover(): string {
    return this.core + '/super-admin/discover';
  }
  public static get screenshot(): string {
    return this.core + '/super-admin/screenshot';
  }
  public static get pricingplan(): string {
    return this.core + '/super-admin/priceing';
  }
  public static get faq(): string {
    return this.core + '/super-admin/faq';
  }
  public static get testimonials(): string {
    return this.core + '/super-admin/testimonials';
  }
  public static get joinus(): string {
    return this.core + '/super-admin/joinus';
  }
  public static get client(): string {
    return this.core + '/super-admin/client';
  }
  
  public static get calendar(): string {
    return this.application + '/calendar';
  }
  public static get email(): string {
    return this.application + '/email';
  }
  public static get purchaseOrderReport(): string {
    return this.report + '/purchase-order-report';
  }
  public static get inventoryReport(): string {
    return this.report + '/inventory-report';
  }
  public static get salesReport(): string {
    return this.report + '/sales-report';
  }
  public static get invoiceReport(): string {
    return this.report + '/invoice-report';
  }
  public static get purchaseReport(): string {
    return this.report + '/purchase-report';
  }
  public static get supplierReport(): string {
    return this.report + '/supplier-report';
  }
  public static get customerReport(): string {
    return this.report + '/customer-report';
  }
  public static get newUser(): string {
    return this.users + '/new-user';
  }
  public static get usersUserList(): string {
    return this.users + '/user-lists';
  }
  public static get editUsersUserList(): string {
    return this.users + '/new-user-edit';
  }
  public static get generalSettings(): string {
    return this.settings + '/general-settings';
  }
  public static get emailSettings(): string {
    return this.settings + '/email-settings';
  }
  public static get paymentSettings(): string {
    return this.settings + '/payment-settings';
  }
  public static get currencySettings(): string {
    return this.settings + '/currency-settings';
  }
  public static get groupSettings(): string {
    return this.settings + '/group-permissions';
  }
  public static get taxRates(): string {
    return this.settings + '/tax-rates';
  }
  public static get createPermission(): string {
    return this.settings + '/create-permission';
  }
  public static get editPermission(): string {
    return this.settings + '/edit-permission';
  }
  public static get product(): string {
    return this.core + '/admin/product';
  }
  public static get addProduct(): string {
    return this.core + '/admin/product/add';
  }
  public static get deal(): string {
    return this.core + '/admin/deal';
  }
  public static get addDeal(): string {
    return this.core + '/admin/deal/add';
  }
  public static get lead(): string {
    return this.core + '/admin/lead';
  }
  public static get addLead(): string {
    return this.core + '/admin/lead/add';
  }
  // core pages child routes *ends*


  public static get prescriptionList(): string {
    return this.core + '/super-admin/prescription';
  }
  public static get prescriptionView(): string {
    return this.core + '/super-admin/viewprescription';
  }
  public static get AppointmentView(): string {
    return this.core + '/client/appointment-list';
  }
  public static get paymentmethods(): string {
    return this.core + '/client/payment';
  }
  public static get prescriptionviewList(): string {
    return this.core + '/super-admin/viewprescriptions';
  }

  public static get doctorloginList(): string {
    return this.core + '/admin/doctorlist';
  }
  public static get doctorsession(): string {
    return this.core + '/super-admin/doctorsession';
  }
  public static get doctorsessionadd(): string {
    return this.core + '/super-admin/add-doctorsession';
  }
  public static get reports(): string {
    return this.core + '/super-admin/report';
  }
  public static get patientreport(): string {
    return this.core + '/super-admin/patientreport';
  }
  public static get videoconsultation(): string {
    return this.core + '/super-admin/videocall';
  }
  
}
