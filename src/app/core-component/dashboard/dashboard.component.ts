import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { ChartConfiguration, ChartData } from 'chart.js';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexResponsive,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';
import { BaseChartDirective } from 'ng2-charts';
import { CalenderService } from 'src/app/component/super-admin/services/calender.service';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';
import { CommonService, SettingsService } from 'src/app/core/core.index';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive | any;
  colors: any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  legend: ApexLegend | any;
  fill: ApexFill | any;
};
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
date= new Date()
date1= new Date(+1)

@ViewChild(BaseChartDirective) chart1: BaseChartDirective;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: [this.date, Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  private route: Router;
  public routes = routes;
  admintolen: any
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions> | any;
  public chartOptionsmonthlyappointment: Partial<ChartOptions> | any;
  public chartOptionsmonthlycollection: Partial<ChartOptions> | any;
  public Areachart: Partial<ChartOptions> | any;
  public currency!: string;
  public admin_token: any;
  public client_token: any;
  public super_token: any;
  public user_token: any;
  patient: any;
  patients: any = [];
  doctor: any;
  appointmentDatas:any
  doctors: any = [];
  hospitalss: any;
  getStaf: any;
  plan: any;
  doctor_id:any
  company: any;
  dealData: any = [];
  leadData: any = [];
  appointmentByPatient : any =[];
  appointmentData : any =[];

  patientData: any;
  stateName= undefined;
  cityName= undefined;
  doctorId : any;

  constructor(
    private common: CommonService,
     private setting: SettingsService,
      private service: CompanyService,
    private calederservice: CalenderService,
    private _formBuilder: FormBuilder,
    private datepipe:DatePipe
    ) {

    this.super_token = sessionStorage.getItem('superadmin-token')
    this.admin_token = sessionStorage.getItem('admin-token')
    this.client_token = sessionStorage.getItem('client-token')
    this.user_token = sessionStorage.getItem('user-token')
    this.getpatient();
    this.getdostors();
    this.calederservice.getCalender().subscribe(res => {
      this.calederservice.ApiData$.next(res)
    })


    if (this.super_token) {
      this.Areachartmath();
    } else {
      this.chartOptionsmath();
    }
  }
  ngOnInit(): void {
    this.getAppointmentByPatient()
    this.getAppointmentbyid()
  }
  public Areachartmath() {
    this.Areachart = {
      series: [

        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }
  public chartOptionsmath() {
    this.chartOptions = {
      series: [
        {
          name: 'Appointment',
          color: '#005dac',
          data: [6],
        },

      ],
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        zoom: {
          enabled: true,
        },
      },

      responsive: {
        breakpoint: 280,
        options: {
          legend: {
            position: 'bottom',
            offsetY: 0,
          },
        },
      },
      plotOptions: {
        area: {
          fillTo: 'end',
        },
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 7,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          distributed: true,
          colors: {
            ranges: [
              {
                from: 0,
                to: 100000,
                color: '#28C76F',
              },
              {
                from: -100000,
                to: 0,
                color: '#EA5455',
              },
            ],
          },
        },
      },
      xaxis: {
        categories: [
         
         this.datepipe.transform(this.date,'YYYY-dd-MM')
        ],
      },

      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    };
    this.chartOptions1 = {
      series: [
        {
          name: 'Collection',
          color: 'red',
          data: [1500],
        },

      ],
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        zoom: {
          enabled: true,
        },
      },

      responsive: {
        breakpoint: 280,
        options: {
          legend: {
            position: 'bottom',
            offsetY: 0,
          },
        },
      },
      plotOptions: {
        area: {
          fillTo: 'end',
        },
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 7,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          distributed: true,
          colors: {
            ranges: [
              {
                from: 0,
                to: 100000,
                color: '#0047AB',
              },
              {
                from: -100000,
                to: 0,
                color: '#0047AB',
              },
            ],
          },
        },
      },
      xaxis: {
        categories: [
         
         this.datepipe.transform(this.date,'YYYY-dd-MM')
        ],
      },

      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    };
    this.chartOptionsmonthlyappointment = {
      series: [
        {
          name: 'Appointment',
          color: 'red',
          data: [100],
        },

      ],
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        zoom: {
          enabled: true,
        },
      },

      responsive: {
        breakpoint: 280,
        options: {
          legend: {
            position: 'bottom',
            offsetY: 0,
          },
        },
      },
      plotOptions: {
        area: {
          fillTo: 'end',
        },
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 7,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          distributed: true,
          colors: {
            ranges: [
              {
                from: 0,
                to: 100000,
                color: '#0047AB',
              },
              {
                from: -100000,
                to: 0,
                color: '#0047AB',
              },
            ],
          },
        },
      },
      xaxis: {
        categories: [
         this.datepipe.transform(this.date,'YYYY-dd-MM')
         
        ],
      },

      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    };
    this.chartOptionsmonthlycollection = {
      series: [
        {
          name: 'Collection',
          color: 'red',
          data: [500],
        },

      ],
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        zoom: {
          enabled: true,
        },
      },

      responsive: {
        breakpoint: 280,
        options: {
          legend: {
            position: 'bottom',
            offsetY: 0,
          },
        },
      },
      plotOptions: {
        area: {
          fillTo: 'end',
        },
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 7,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          distributed: true,
          colors: {
            ranges: [
              {
                from: 0,
                to: 100000,
                color: '#0047AB',
              },
              {
                from: -100000,
                to: 0,
                color: '#0047AB',
              },
            ],
          },
        },
      },
      xaxis: {
        categories: [
         
          '2024-02-19T00:00:00.000Z',
          '2024-02-19T01:30:00.000Z',
          '2024-02-19T02:30:00.000Z',
          '2024-02-19T03:30:00.000Z',
          '2024-02-19T04:30:00.000Z',
          '2024-02-19T05:30:00.000Z',
          '2024-02-19T06:30:00.000Z',
        ],
      },

      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    };
  }



  public transparencyChartDataweek: ChartConfiguration<'bar'>['data'] = {
    labels: ['2024-03-09','2024-03-10','2024-03-11','2024-03-12','2024-03-13'],
    datasets: [
      {
        data: [1, 5, 3, 2, 4],
        label: 'Appointment',
        backgroundColor: 'rgba(40, 199, 111, 0.85);',
        borderColor: '#48CF84',
        borderWidth: 1,
      },
    ],
  };
  public transparencyChartDatayear: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July','Aug',"Sep","Oct","Nov","Dec"],
    datasets: [
      {
        data: [10, 50, 30,0,5,8,5,4, 20, 40],
        label: 'Appointment',
        backgroundColor: 'rgba(40, 199, 111, 0.85);',
        borderColor: '#48CF84',
        borderWidth: 1,
      },
    ],
  };
  public transparencyChartDataDoctor: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July','Aug',"Sep","Oct","Nov","Dec"],
    datasets: [
      {
        data: [10, 15, 20,0,5,8,5,4, 20,6],
        label: 'Registered Doctors',
        backgroundColor: 'rgba(40, 199, 111, 0.85);',
        borderColor: '#48CF84',
        borderWidth: 1,
      },
    ],
  };
  public transparencyChartDatamonth: ChartConfiguration<'bar'>['data'] = {
    labels: ['week1','week2','week3','week4','week5'],
    datasets: [
      {
        data: [10, 15, 32, 20, 14],
        label: 'Appointment',
        backgroundColor: 'rgba(40, 199, 111, 0.85);',
        borderColor: '#48CF84',
        borderWidth: 1,
      },
    ],
  };
  public transparencyChartDataweekcollection: ChartConfiguration<'bar'>['data'] = {
    labels: ['2024-03-09','2024-03-10','2024-03-11','2024-03-12','2024-03-13'],
    datasets: [
      {
        data: [1, 5, 3, 2, 4],
        label: 'Collection',
        backgroundColor: 'rgba(0, 71, 171, 0.85);',
        borderColor: '#0047AB',
        borderWidth: 1,
      },
    ],
  };
  public transparencyChartDatayearcollection: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July','Aug',"Sep","Oct","Nov","Dec"],
    datasets: [
      {
        data: [10, 50, 30,0,5,8,5,4, 20, 40],
        label: 'Collection',
        backgroundColor: 'rgba(0, 71, 171, 0.85)',
        borderColor: '#0047AB',
        borderWidth: 1,
      },
    ],
  };
  public transparencyChartDatamonthcollection: ChartConfiguration<'bar'>['data'] = {
    labels: ['week1','week2','week3','week4','week5'],
    datasets: [
      {
        data: [10, 15, 32, 20, 14],
        label: 'Collection',
        backgroundColor: 'rgba(0, 71, 171, 0.85)',
        borderColor: '#0047AB',
        borderWidth: 1,
      },
    ],
  };
  getpatient() {
    this.service.getAllPatient().subscribe({
      next: (res) => {
        this.patients = res;
        this.patient = res.length;
        console.log(this.patient)
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
  getdostors() {
    this.service.getDoctor().subscribe({
      next: (res) => {
        this.doctors = res;
        this.doctor = res.length;
        console.log(this.doctor)
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

  getAppointmentByPatient(){
    let client_id =  sessionStorage.getItem("client_id");
    this.service.getAppointmentByPatientId(client_id).subscribe({
      next: (res)=>{
        console.log(res)
        this.appointmentByPatient = res;
      }
    })
  }

  getAppointmentbyid() {
    this.doctor_id = sessionStorage.getItem("admin_id");
    this.service.getAppointmentbyid(this.doctor_id).subscribe(res => {
      this.appointmentData= res
      this.appointmentDatas= res.length;
      console.log(this.appointmentData)
    })
  }


  scrollToAbout(): void {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  openpatienthistory(id: any) {
    this.route.navigate(["/super-admin/allpatient/" + id])
  }
}
