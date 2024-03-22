import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../../core.index';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      localStorage.getItem('isMobileSidebar') || 'false'
    );

  public expandSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public switchSideMenuPosition(): void {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next('false');
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next('true');
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }


  public sidebarData1 = [
    {
      tittle: 'Super-Admin',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },
        // {
        //   menuValue: 'Hospital',
        //   route: routes.Hospital,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'home',
        //   subMenus: [],
        // },
        {
          menuValue: 'Doctor',
          route: routes.doctorList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-square',
          subMenus: [],
        },
        {
          menuValue: 'Patient',
          route: routes.patientListall,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'tag',
          subMenus: [],
        },
        {
          menuValue: 'Lab Test Categories',
          route: routes.laboratory,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'codepen',
          subMenus: [],
        },
        {
          menuValue: 'Physiomart',
          route: routes.laboratory,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-circle',
          subMenus: [],
        },
        {
          menuValue: 'Lab Test',
          route: routes.labtest,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-circle',
          subMenus: [],
        },
        {
          menuValue: 'Lab Package',
          route: routes.labpackage,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-circle',
          subMenus: [],
        },
        {
          menuValue: 'Package Include',
          route: routes.packageinclude,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-circle',
          subMenus: [],
        },
        {
          menuValue: 'Package Offer',
          route: routes.packageoffer,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-circle',
          subMenus: [],
        },
        
        // {
        //   menuValue: 'Appointment list',
        //   route: routes.addappointment,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'plus-circle',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Specialization',
        //   page: 'add-category',
        //   page2: 'edit-category',
        //   route: routes.departnameList,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'codepen',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Therapies',
        //   route: routes.prescriptionList,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'tag',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Physical Health',
        //   route: routes.invoice,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'speaker',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Doctor Session',
        //   route: routes.doctorsession,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'tag',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Report',
        //   route: routes.reports,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'tag',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'EMR',
        //   route: routes.smsTemplate,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'message-square',
        //   subMenus: [
        //     {
        //       menuValue: 'Drugs',
        //       route: routes.drug,
        //     },
        //     // {
        //     //   menuValue: 'Patient History',
        //     //   route: routes.smsSchedule,
        //     // },
        //     // {
        //     //   menuValue: 'Invoice',
        //     //   route: routes.invoice,
        //     // },
        //     // {
        //     //   menuValue: 'Patient Details',
        //     //   route: routes.allpatient,
        //     // },
        //     {
        //       menuValue: 'Medications',
        //       route: routes.medication,
        //     }
        //     ,
        //     // {
        //     //   menuValue: 'Private Note',
        //     //   route: routes.privateNote,
        //     // },
        //     {
        //       menuValue: 'Calender',
        //       route: routes.calender,
        //     },
        //   ],
        // },
        // {
        //   menuValue: 'Doctor Session',
        //   route: routes.doctorsession,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'speaker',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Report',
        //   route: routes.reports,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'save',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'EMR',
        //   route: routes.smsTemplate,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'message-square',
        //   subMenus: [
        //     {
        //       menuValue: 'Drugs',
        //       route: routes.drug,
        //     },
        //     // {
        //     //   menuValue: 'Patient History',
        //     //   route: routes.smsSchedule,
        //     // },
        //     // {
        //     //   menuValue: 'Invoice',
        //     //   route: routes.invoice,
        //     // },
        //     // {
        //     //   menuValue: 'Patient Details',
        //     //   route: routes.allpatient,
        //     // },
        //     {
        //       menuValue: 'Medications',
        //       route: routes.medication,
        //     }
        //     ,
        //     // {
        //     //   menuValue: 'Private Note',
        //     //   route: routes.privateNote,
        //     // },
        //     {
        //       menuValue: 'Calender',
        //       route: routes.calender,
        //     },
        //   ],
        // },
        // {
        //   menuValue: 'Prescription',
        //   route: routes.prescriptionList,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'tag',
        //   subMenus: [],
        // },

        // {
        //   menuValue: 'Staff',
        //   route: routes.Staff,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'user-plus',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Invoice',
        //   route: routes.invoice,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'save',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Schedule',
        //   route: routes.schedule,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'speaker',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Send Custom Email',
        //   route: routes.sendcustomemail,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'align-justify',
        //   subMenus: [],
        // },
        // email setup pooja
        // {
        //   menuValue: 'SMS',
        //   route: routes.smsTemplate,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'message-square',
        //   subMenus: [
        //    {
        //     menuValue: 'SMS Template',
        //     route: routes.smsTemplate,
        //    },
        //    {
        //     menuValue: 'SMS Schedule',
        //    route: routes.smsSchedule,
        //    }
        // ],
        // },
        // {
        //   menuValue: 'SMS Template',
        //   route: routes.smsTemplate,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'speaker',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'SMS Schedule',
        //   route: routes.smsTemplate,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'speaker',
        //   subMenus: [],
        // }
        // {
        //   menuValue: 'Email Templates',
        //   route: routes.barcode,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'align-justify',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Landing Page',
        //   route: routes.importProduct,
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'minimize-2',
        //   subMenus: [
        //     {
        //       menuValue: 'Top Bar',
        //       route: routes.chat,
        //     },
        //     {
        //       menuValue: 'Custom Page',
        //       route: routes.custompage,
        //     },
        //     {
        //       menuValue: 'Home',
        //       route: routes.home,
        //     },
        //     {
        //       menuValue: 'Features',
        //       route: routes.features,
        //     },
        //     {
        //       menuValue: 'Discover',
        //       route: routes.discover,
        //     },
        //     {
        //       menuValue: 'Screenshot',
        //       route: routes.screenshot,
        //     },
        //     {
        //       menuValue: 'Pricing Plan',
        //       route: routes.pricingplan,
        //     },
        //     {
        //       menuValue: 'FAQ',
        //       route: routes.faq,
        //     },
        //     {
        //       menuValue: 'Testimonials',
        //       route: routes.testimonials,
        //     },
        //     {
        //       menuValue: 'Join User',
        //       route: routes.joinus,
        //     },

        //     // {
        //     //   menuValue: 'Client',
        //     //   route: routes.client,
        //     // },
        //   ],
        // },
        // routing flow poioja
        // {
        //   menuValue: 'Estimation',
        //   route: routes.estimation,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'minimize-2',
        // },
        //  {
        //   menuValue: 'Expense',
        //   route: routes.expenses,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'minimize-2',
        //  },
        // {
        //   menuValue: 'Settings',
        //   route: routes.importProduct,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'minimize-2',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Application',
        //   route: routes.application,
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'smartphone',
        //   subMenus: [
        //     {
        //       menuValue: 'Chat',
        //       route: routes.chat,
        //     },
        //     {
        //       menuValue: 'Calendar',
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       route: routes.calendar,
        //       subRoutes: [],
        //     },
        //     {
        //       menuValue: 'Email',
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       route: routes.email,
        //       subRoutes: [],
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   tittle: 'Products',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Products',
    //       route: routes.productList,
    //       page: 'edit-product',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'box',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Create Product',
    //       route: routes.addProduct,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'plus-square',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Category',
    //       page: 'add-category',
    //       page2: 'edit-category',
    //       route: routes.categoryList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'codepen',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Brands',
    //       route: routes.brandList,
    //       page: 'add-brand',
    //       page2: 'edit-brand',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'tag',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Sub Category',
    //       route: routes.subCategoryList,
    //       page: 'sub-add-category',
    //       page2: 'edit-subcategory',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'speaker',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Print Barcode',
    //       route: routes.barcode,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'align-justify',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Import Products',
    //       route: routes.importProduct,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'minimize-2',
    //       subMenus: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Sales',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Sales',
    //       route: routes.salesList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       page: 'add-sales',
    //       page2: 'edit-sales',
    //       icon: 'shopping-cart',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Invoices',
    //       route: routes.invoiceReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'file-text',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Sales Return',
    //       route: routes.salesReturnLists,
    //       page: 'create-sales-return',
    //       page2: 'edit-sales-returns',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'copy',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Quotation',
    //       route: routes.quotationList,
    //       page: 'add-quotation',
    //       page2: 'edit-quotation',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'save',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'POS',
    //       route: routes.pos,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'hard-drive',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Transfer',
    //       route: routes.transfer,
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'shuffle',
    //       subMenus: [
    //         {
    //           menuValue: 'Transfer List',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           page: 'add-transfer',
    //           page2: 'edit-transfer',
    //           route: routes.transferList,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Import Transfer',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.importTransfer,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Return',
    //       route: routes.return,
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'corner-up-left',
    //       subMenus: [
    //         {
    //           menuValue: 'Sales Return',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.salesReturnList,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Purchase Return',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.purchaseReturnList,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Purchases',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Purchases',
    //       route: routes.purchaseList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'shopping-bag',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Import Purchases',
    //       route: routes.importPurchase,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'minimize-2',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Purchase Order',
    //       route: routes.purchaseOrderReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'file-minus',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Purchase Return',
    //       route: routes.purchaseReturnList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'refresh-cw',
    //       subMenus: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Finance & Accounts',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Expense',
    //       route: routes.expense,
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'file-text',
    //       subMenus: [
    //         {
    //           menuValue: 'Expenses',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.expenseList,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Expense Category',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.expenseCategory,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Peoples',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Customers',
    //       route: routes.customerList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'user',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Suppliers',
    //       route: routes.supplierList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'users',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Users',
    //       route: routes.userList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'user-check',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Stores',
    //       route: routes.storeList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'home',
    //       subMenus: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Reports',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Sales Report',
    //       route: routes.salesReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'bar-chart-2',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Purchase Report',
    //       route: routes.purchaseReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'pie-chart',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Inventory Report',
    //       route: routes.inventoryReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'credit-card',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Invoice Report',
    //       route: routes.invoiceReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'file',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Purchase Report',
    //       route: routes.purchaseOrderReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'bar-chart',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Supplier Report',
    //       route: routes.supplierReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'database',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Customer Report',
    //       route: routes.customerReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'pie-chart',
    //       subMenus: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'User Management',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Manage Users',
    //       route: routes.users,
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'users',
    //       subMenus: [
    //         {
    //           menuValue: 'New User',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.newUser,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Users List',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.usersUserList,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Pages',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Authentication',
    //       route: routes.auth,
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'shield',
    //       subMenus: [
    //         {
    //           menuValue: 'Login',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.signIn,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Register',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.signUp,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Forgot Password',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.forgotPassword,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Reset Password',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.forgotPassword,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Error Pages',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'file-minus',
    //       route: routes.errorPages,
    //       subMenus: [
    //         {
    //           menuValue: '404 Error',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.errorPage404,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: '500 Error',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.errorPage500,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Places',
    //       hasSubRoute: true,
    //       icon: 'map',
    //       showSubRoute: false,
    //       route: routes.places,
    //       subMenus: [
    //         {
    //           menuValue: 'Countries',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.countriesList,
    //           subMenus: [],
    //         },
    //         {
    //           menuValue: 'States',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.stateList,
    //           subMenus: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Blank Page',
    //       hasSubRoute: false,
    //       icon: 'file',
    //       showSubRoute: false,
    //       route: routes.blankPage,
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Components',
    //       hasSubRoute: false,
    //       icon: 'hard-drive',
    //       showSubRoute: false,
    //       route: routes.components,
    //       subMenus: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'UI Interface',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Elements',
    //       hasSubRoute: true,
    //       icon: 'layers',
    //       showSubRoute: false,
    //       route: routes.element,
    //       subMenus: [
    //         {
    //           menuValue: 'Sweet Alerts',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.sweetAlerts,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Tooltip',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.tooltip,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Popover',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.popover,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Ribbon',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.ribbon,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Clipboard',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.clipboard,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Drag & Drop',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.dragDrop,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Range Slider',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.rangeSlider,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Rating',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.rating,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Toaster',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.toaster,
    //           subRoutes: [],
    //         },

    //         {
    //           menuValue: 'Text Editor',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.textEditor,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Counter',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.counter,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Scrollbar',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.scrollbar,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Spinner',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.spinner,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Notification',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.notification,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Lightbox',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.lightbox,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Timeline',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.timeline,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Form Wizard',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.formWizard,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Charts',
    //       hasSubRoute: true,
    //       icon: 'bar-chart-2',
    //       showSubRoute: false,
    //       route: routes.charts,
    //       subMenus: [
    //         {
    //           menuValue: 'Apex Charts',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.chartApex,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Ng2 Charts',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.chartNg2,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Prime NG Charts',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.chartPrime,
    //           subRoutes: [],
    //         },
    //       ],
    //     },

    //     {
    //       menuValue: 'Icons',
    //       hasSubRoute: true,
    //       icon: 'database',
    //       showSubRoute: false,
    //       route: routes.icons,
    //       subMenus: [
    //         
    //       
    //       ],
    //     },

    //     {
    //       menuValue: 'Forms',
    //       hasSubRoute: true,
    //       icon: 'edit',
    //       showSubRoute: false,
    //       route: routes.forms,
    //       subMenus: [
    //     
    //       ],
    //     },

    //     {
    //       menuValue: 'Table',
    //       hasSubRoute: true,
    //       icon: 'user',
    //       showSubRoute: false,
    //       route: routes.table,
    //       subMenus: [
    //     
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Settings',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Settings',
    //       hasSubRoute: true,
    //       icon: 'settings',
    //       showSubRoute: false,
    //       route: routes.settings,
    //       subMenus: [
    //       
    //       ],
    //     },
    //     {
    //       menuValue: 'Logout',
    //       hasSubRoute: false,
    //       icon: 'log-out',
    //       showSubRoute: false,
    //       route: routes.signIn,
    //       subMenus: [],
    //     },
    //   ],
    // },
  ];
  //   public sidebarData2 = [
  //   {
  //     tittle: 'Main Menu',
  //     hasSubRoute: true,
  //     icon: 'assets/img/icons/menu-icon.svg',
  //     showSubRoute: false,
  //     subRoutes: [
  //       {
  //         tittle: 'Dashboard',
  //         hasSubRoute: false,
  //         icon: 'assets/img/icons/dashboard.svg',
  //         showSubRoute: false,
  //         route: routes.dashboard,
  //         subRoutes: [],
  //       },
  //       {
  //         tittle: 'Product',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/product.svg',
  //         showSubRoute: false,
  //         route: routes.product,
  //         subRoutes: [
  //           {
  //             tittle: 'Product List',
  //             hasSubRoute: false,
  //             showSubRoute: false,
  //             route: routes.productList,
  //             subRoutes: [],
  //           },
  //           {
  //             tittle: 'Add Product',
  //             hasSubRoute: false,
  //             showSubRoute: false,
  //             route: routes.addProduct,
  //             subRoutes: [],
  //           },
  //
  //         ],
  //       },
  //       {
  //         tittle: 'Sales',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/sales1.svg',
  //         showSubRoute: false,
  //         route: routes.sales,
  //         subRoutes: [
  //
  //         ],
  //       },

  //       {
  //         tittle: 'Purchase',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/purchase1.svg',
  //         showSubRoute: false,
  //         route: routes.purchase,
  //         subRoutes: [
  //
  //         ],
  //       },

  //       {
  //         tittle: 'Expense',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/expense1.svg',
  //         showSubRoute: false,
  //         route: routes.expense,
  //         subRoutes: [
  //
  //         ],
  //       },

  //       {
  //         tittle: 'Quotation',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/quotation1.svg',
  //         showSubRoute: false,
  //         route: routes.quotation,
  //         subRoutes: [
  //
  //         ],
  //       },

  //       {
  //         tittle: 'Transfer',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/transfer1.svg',
  //         showSubRoute: false,
  //         route: routes.transfer,
  //         subRoutes: [
  //
  //         ],
  //       },
  //       {
  //         tittle: 'Return',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/return1.svg',
  //         showSubRoute: false,
  //         route: routes.return,
  //         subRoutes: [
  //
  //         ],
  //       },

  //       {
  //         tittle: 'People',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/users1.svg',
  //         showSubRoute: false,
  //         route: routes.people,
  //         subRoutes: [
  //
  //         ],
  //       },

  //       {
  //         tittle: 'Places',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/places.svg',
  //         showSubRoute: false,
  //         route: routes.places,
  //         subRoutes: [
  //
  //         ],
  //       },
  //     ],
  //   },

  //   {
  //     tittle: 'Users',
  //     hasSubRoute: true,
  //     icon: 'assets/img/icons/users1.svg',
  //     showSubRoute: false,
  //     activeRoute: 'users',
  //     subRoutes: [
  //       {
  //         tittle: 'New User',
  //         hasSubRoute: false,
  //         showSubRoute: false,
  //         route: routes.newUser,
  //         subRoutes: [],
  //       },
  //       {
  //         tittle: 'User List',
  //         hasSubRoute: false,
  //         showSubRoute: false,
  //         route: routes.usersUserList,
  //         subRoutes: [],
  //       },
  //     ],
  //   },

  //   {
  //     tittle: 'Components',
  //     hasSubRoute: true,
  //     isSvg: true,
  //     icon: 'assets/img/icons/layers.svg',
  //     showSubRoute: false,
  //     subRoutes: [
  //       {
  //         tittle: 'Components',
  //         hasSubRoute: false,
  //         icon: 'assets/img/icons/layers.svg',
  //         showSubRoute: false,
  //         route: routes.components,
  //         subRoutes: [],
  //       },
  //       {
  //         tittle: 'Elements',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/box.svg',
  //         showSubRoute: false,
  //         route: routes.element,
  //         subRoutes: [
  //
  //         ],
  //       },

  //       {
  //         tittle: 'Charts',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/bar-chart-2.svg',
  //         showSubRoute: false,
  //         route: routes.charts,
  //         subRoutes: [
  //
  //         ],
  //       },

  //       {
  //         tittle: 'Icons',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/award.svg',
  //         showSubRoute: false,
  //         route: routes.icons,
  //         subRoutes: [
  //
  //         ],
  //       },

  //       {
  //         tittle: 'Forms',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/columns.svg',
  //         showSubRoute: false,
  //         route: routes.forms,
  //         subRoutes: [
  //
  //         ],
  //       },

  //       {
  //         tittle: 'Table',
  //         hasSubRoute: true,
  //         icon: 'assets/img/icons/layout.svg',
  //         showSubRoute: false,
  //         route: routes.table,
  //         subRoutes: [
  //
  //         ],
  //       },
  //
  //         ],
  //       },
  //     ],
  //   },

  //   {
  //     tittle: 'Application',
  //     hasSubRoute: true,
  //     icon: 'assets/img/icons/product.svg',
  //     showSubRoute: false,
  //     route: routes.application,
  //     subRoutes: [
  //
  //     ],
  //   },

  //
  //
  //       },
  //     ],
  //   },
  // ];
  public sidebarData2 = [
    {
      tittle: 'Admin',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboardadmin,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },
        {
          menuValue: 'Appointment',
          route: routes.addappointment,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },
        {
          menuValue: 'Calender',
          route: routes.calender,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },
        {
          menuValue: 'Patient',
          route: routes.allpatientpro,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },
        {
          menuValue: 'Add',
          route: routes.allpatientpro,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'plus-square',
          subMenus: [
            {
              menuValue: 'Add Patient',
              icon: 'plus-square',
              route: routes.addPatient,
            },
            {
              menuValue: 'Add Appointment',
              icon: 'plus-square',
              route: routes.appointment,
            },
          ],
        },
        {
          menuValue: 'Billing',
          route: routes.patientList,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [
            {
              menuValue: 'Invoice',
              icon: 'plus-square',
              route: routes.invoice,
            },
            {
              menuValue: 'Report',
              icon: 'plus-square',
              route: routes.reports,
            },
          ],
        },
        {
          menuValue: 'My Account',
          route: routes.addDoctor,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'box',
          subMenus: [],
        },
        // {
        //   menuValue: 'Doctor',
        //   route: routes.doctorinfo,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'box',
        //   subMenus: [],
        // },
        
        // {
        //   menuValue: 'Specialization;',
        //   page: 'add-category',
        //   page2: 'edit-category',
        //   route: routes.departnameList,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'codepen',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Therapies',
        //   route: routes.prescriptionList,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'tag',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Physical Health',
        //   route: routes.invoice,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'speaker',
        //   subMenus: [],
        // },

        // {
        //   menuValue: 'Therapies',
        //   route: routes.prescriptionList,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'tag',
        //   subMenus: [],
        // },

      
       
        // {
        //   menuValue: 'Specialization',
        //   page: 'add-category',
        //   page2: 'edit-category',
        //   route: routes.departnameList,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'codepen',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Therapies',
        //   route: routes.prescriptionList,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'minimize-2',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Physical Health',
        //   route: routes.invoice,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'speaker',
        //   subMenus: [],
        // },

        // {
        //   menuValue: 'Therapies',
        //   route: routes.prescriptionList,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'minimize-2',
        //   subMenus: [],
        // },

        {
          menuValue: 'Doctor Session',
          route: routes.doctorsession,
          page: 'add-brand',
          page2: 'edit-brand',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'layers',
          subMenus: [],
        },
        {
          menuValue: 'Patient Report',
          route: routes.patientreport,
          page: 'add-brand',
          page2: 'edit-brand',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'codepen',
          subMenus: [],
        },
        {
          menuValue: 'EMR',
          route: routes.smsTemplate,
          page: 'sub-add-category',
          page2: 'edit-subcategory',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'message-square',
          subMenus: [
            {
              menuValue: 'Drugs',
              route: routes.drug,
            }
          ],
        },
        {
          menuValue: 'Online Consultation',
          route: routes.videoconsultation,
          page: 'add-brand',
          page2: 'edit-brand',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'codepen',
          subMenus: [],
        },
      ],
    },

  ];

  public sidebarClient = [
    {
      tittle: 'Client',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboardclient,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },
        {
          menuValue: 'Medical Records',
          route: routes.medicalRecord,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'credit-card',
        },
        {
          menuValue: 'Invoices',
          route: routes.myInvoice,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'speaker',
        },
        {
          menuValue: 'Private Notes',
          route: routes.PatientprivateNote,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'calendar',
        },
        {
          menuValue: ' My Appointments',
          route: routes.myAppointment,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'speaker',
        },
        {
          menuValue: 'Book Appointments',
          route: routes.appointment,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'align-justify',
        },
        {
          menuValue: 'Lab Test',
          route: routes.AppointmentView,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user',
        },

        {
          menuValue: 'Online Consultations',
          route: routes.AppointmentView,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'file',
        },
        {
          menuValue: 'Physiomart',
          route: routes.AppointmentView,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'save',
        },
        {
          menuValue: 'Book Lab Test',
          route: routes.AppointmentView,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'tag',
        },
        {
          menuValue: 'Articles',
          route: routes.AppointmentView,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'home',
        },
        {
          menuValue: 'Feedback',
          route: routes.AppointmentView,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'calendar',
        },
        {
          menuValue: 'Payements',
          route: routes.paymentmethods,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'minimize-2',
        },


      ],
    },

  ];
  public sidebarUser = [
    {
      tittle: 'User',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboarduser,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },
        {
          menuValue: 'Staff-List',
          route: routes.staffList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'tag',
          subMenus: [],
        },

      ],
    },

  ];
}
