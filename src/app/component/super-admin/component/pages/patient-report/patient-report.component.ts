import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  Event as RouterEvent,
} from '@angular/router';
// import { SettingsService, SidebarService } from '../core/core.index';
import { SettingsService ,SidebarService } from 'src/app/core/core.index';
// import { WebstorgeService } from '../shared/webstorge.service';
import { WebstorgeService } from 'src/app/shared/webstorge.service';
// import { url } from '../shared/model/sidebar.model';
import { url } from 'src/app/shared/model/sidebar.model';
import { ChartOptions } from 'chart.js';
export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.scss']
})
export class PatientReportComponent implements OnInit{

  @ViewChild('chart')
  chart!: PatientReportComponent;
  public ColumnCharts: Partial<ChartOptions> | any;
  public ColumnCharts1: Partial<ChartOptions> | any;


  ngOnInit(): void {
  
    this.ColumnCharts = {
      series: [
        {
          name: 'Patient',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return ' ' + val + '';
          },
        },
      },
    };
    this.ColumnCharts1 = {
      series: [
        {
          name: 'Appointment',
          data: [5, 4, 6, 26, 5, 48, 2, 53, 11],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return ' ' + val + '';
          },
        },
      },
    };
  }
    

}