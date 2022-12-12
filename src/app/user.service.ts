import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Services {
  data: any

  private journey = new BehaviorSubject('')
  currJourney = this.journey.asObservable()

  changeJourney(msg: any) {
    this.journey.next(msg)
  }

  constructor(private http: HttpClient) { }
  editQuestionList(e: any) {
    return this.http.get(
      `https://api.thebiggestask.org/api/question_edit/${e.target.id}`
    );
  }

}
