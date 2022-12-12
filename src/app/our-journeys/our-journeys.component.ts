import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Services } from '../user.service';

@Component({
  selector: 'app-our-journeys',
  templateUrl: './our-journeys.component.html',
  styleUrls: ['./our-journeys.component.css'],
})
export class OurJourneysComponent implements OnInit, OnDestroy {
  msg: any;
  JourneyData: any;
  milestoneDate: any = [];
  milestoneTitle: any;
  searchText: any;
  formatDate: any;
  monthNames: any = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  d: any;
  m: any;
  y:any;
  date:any
  actualDate: any;
  actualMonth: any;
  formatTime: any;
  journeyLength:any
  booleanJourney : any = true

  constructor(private http: HttpClient, private service: Services) {}

  subscription: Subscription = new Subscription();

  ngOnInit() {
    this.fetchJourney();
    this.subscription = this.service.currJourney.subscribe(
      (msg) => (this.msg = msg)
    );
  }
  ngOnDestroy(): void {}

  newMsg(e: any) {
    this.service.changeJourney(e.target.childNodes[0].innerText);
  }

  fetchJourney() {
    this.http.get('https://api.thebiggestask.org/api/get_journy').subscribe(
      (res: any) => {
        this.JourneyData = res.journy;
        this.journeyLength = this.JourneyData.length;
        this.milestoneDate = res.date_array;
        this.milestoneTitle = res.title_array;
        res.date_array.forEach((element: any) => {
          this.formatDate = element?.date.split('T')[0];
          this.formatTime = element?.date.split('T')[1].split('.')[0];
          this.d = new Date(this.formatDate);
          this.m = this.d.getMonth();
          this.y = this.d.getFullYear();
          this.date = this.d.getDate();
          this.actualMonth = this.monthNames[this.m];
        });
      },
      (error) => {}
    );
  }
  sortJourney(e:any) {
    e.target.value == "ASC" ? this.booleanJourney = true : "" ;
    e.target.value == "DESC" ? this.booleanJourney = false : "" ;
  }

  getJourneyBySorting(e: any) {
    this.http
      .get(
        `https://api.thebiggestask.org/api/journy_sorting?sorting=${e.target.value}`
      )
      .subscribe((res: any) => {
        this.JourneyData = res.journy;
      });
  }
}
