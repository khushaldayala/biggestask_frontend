import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Services } from '../user.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css'],
})
export class JourneyComponent implements OnInit, AfterViewInit, OnDestroy {
  journeyData: any = [];
  milestones: any = [];
  msg: any;
  subscription: Subscription = new Subscription();
  constructor(private http: HttpClient, private service: Services) {}

  ngOnInit() {
    const url = window.location.href;
    const url_split = url.split('/');
    const actual_url = url_split[4];
    this.journey(actual_url);
    this.subscription = this.service.currJourney.subscribe(
      (msg) => (this.msg = msg)
    );
  }
  ngOnDestroy(): void {
  }
  ngAfterViewInit(): void {
    let modal = document.querySelectorAll('.modal');
    document.addEventListener('click', (e: any) => {
      modal.forEach((curr: any) => {
        if (curr.classList.contains('show')) {
          curr.classList.remove('show');
          if (curr.id == 'exampleModalParent') {
            document.getElementById('parent')?.click();
          }
          if (curr.id == 'exampleModalPartner') {
            document.getElementById('partner')?.click();
          }
          if (curr.id == 'exampleModalSurrogate') {
            document.getElementById('surrogate')?.click();
          }
        }
      });
    });
  }
  journey(url: any) {
    this.http
      .get(`https://api.thebiggestask.org/api/journy_milestone/${url}`)
      .subscribe((res: any) => {
        this.journeyData = res;
        this.milestones = this.journeyData.milestone;
      });
  }
}
