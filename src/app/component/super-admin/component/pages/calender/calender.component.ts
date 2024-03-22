import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
  AfterContentChecked,
  AfterViewInit,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

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
  selector: 'app-calender',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  providers: [
    CompanyService,
    {
      provide: CalendarDateFormatter,
    }
  ]
})

export class CalenderComponent implements OnInit{
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;
  calenderData: any = []
  viewDate: Date = new Date();
  start: any
  title: any
  name:any
  gender:any
  age:any   
  mobile:any
  slot:any
  _id:any
  ids:any
  doctor_id:any
  modalData!: {
    action: string;
    event: CalendarEvent;
  };
  show:boolean = false
  events: any = []
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService,
    private modal: NgbModal
  ) {
    this.doctor_id = sessionStorage.getItem("admin_id");

  }
 
  refresh: any = new Subject();

  ngOnInit(): void {
    this.refresh.next();
    this.getall()
  }
  getall(){
    this.service.getCalender(this.doctor_id).subscribe(res => {
      this.calenderData = res
      this.calenderData = res.map((e: any) => ({ 
        title: e.title,
        gender:e.gender,
        age:e.age,
        mobile:e.phone,
        slot:e.slot,
        ids:e._id,
        start: subDays(startOfDay(new Date(e.start)), 0),
        allDay: true,
      }))
      this.events = this.calenderData
      if (this.events.length > 0) {
        this.show = !this.show
      }
      
      console.log(this.show)
      console.log(this.events);
    })
    this.refresh.next();
  }
  activeDayIsOpen: boolean = false;
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if(events.length === 0){
      this.route.navigate(["super-admin/addappoiment"])
      console.log('deepak', events);
      this.activeDayIsOpen = false;
    }
    else{
      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        
        ) {
          this.activeDayIsOpen = true;
        } else {
          this.activeDayIsOpen = true;
        }
        this.viewDate = date;
        
      }
    }
   
  }
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent: any) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];
  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent: any) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }


  handleEvent(action: string, event: CalendarEvent): void {
    this.name=event.title,
    this.age=event.age,
    this.mobile=event.mobile,
    this.start=event.start,
    this.slot=event.slot,
    this._id=event.ids,
    (event.gender=='Male'? this.gender="M": this.gender="F")
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
  this.route.navigate(["super-admin/addappoiment"])
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event: any) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  addPatient(e:any){
    console.log(e);
  }
  startpage(_id:any){
    console.log(_id);
    this.route.navigate(["super-admin/generateprescrption/"+_id]),
    this.activeDayIsOpen = false;
  }
  checkpage(_id:any){
    console.log(_id);
    this.route.navigate(["super-admin/allpatient/"+_id]),
    this.activeDayIsOpen = false;
  }
}