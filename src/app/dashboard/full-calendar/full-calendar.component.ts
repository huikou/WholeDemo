
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
 

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {
  calendarOptions: Options;
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor() {}
  ngOnInit() {
    const dateObj = new Date();
const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    let data = [{
    title: 'All Day Event',
    start: yearMonth + '-01',
    color: "red"
},
{
    title: 'Long Event',
    start: yearMonth + '-07',
    end: yearMonth + '-10'
},
{
    id: 999,
    title: 'Repeating Event',
    start: yearMonth + '-09T16:00:00'
},
{
    id: 999,
    title: 'Repeating Event',
    start: yearMonth + '-16T16:00:00'
},
{
    title: 'Conference',
    start: yearMonth + '-11',
    end: yearMonth + '-13'
},
{
    title: 'Meeting',
    start: yearMonth + '-12T10:30:00',
    end: yearMonth + '-12T12:30:00'
},
{
    title: 'Lunch',
    start: yearMonth + '-12T12:00:00'
},
{
    title: 'Meeting',
    start: yearMonth + '-12T14:30:00'
},
{
    title: 'Happy Hour',
    start: yearMonth + '-12T17:30:00'
},
{
    title: 'Dinner',
    start: yearMonth + '-12T20:00:00'
},
{
    title: 'Birthday Party',
    start: yearMonth + '-13T07:00:00'
},
{
    title: 'Click for Google',
    url: 'http://google.com/',
    start: yearMonth + '-28'
}];
     this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data,
        height: 'parent',
        //  contentHeight: 500,
      };
  }
 
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
}
