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
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit{

  @ViewChild('chart')
  chart!: ReportsComponent;
  public ColumnCharts: Partial<ChartOptions> | any;


  ngOnInit(): void {
  
    this.ColumnCharts = {
      series: [
        {
          name: 'Cash',
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
            return '$ ' + val + ' thousands';
          },
        },
      },
    };
  }
}