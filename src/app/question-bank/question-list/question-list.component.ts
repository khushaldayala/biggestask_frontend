import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import 'animate.css';
import Swal from 'sweetalert2';
import {Services} from '../../user.service'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: [
    '../question-bank.component.css',
    '../../../../node_modules/animate.css/animate.min.css',
  ],
})
export class QuestionListComponent implements OnInit {
  constructor(public http: HttpClient , private serviceApi :Services) { }
  ngOnInit(): void {
  }
  @Output() parentData = new EventEmitter<any>()
  error: any = {
    ques: '',
    cate: '',
    sect: '',
  };
  setError: any = {
    ques: false,
    cate: false,
    sect: false,
  };
  quesArr: any = [];
  secArr: any = [];
  response: any;
  questions: any = [];
  editList: any = {};
  updateResponse: any;
  updateError: any = {
    sect_id: '',
    cate_id: '',
    quest: '',
  };
  updateErrorStatus: any = {
    sect_id: undefined,
    cate_id: undefined,
    quest: undefined,
  };
  createQuesRes: any;
  quesHide: any;
  @Input() data: any;
  @Input() cateMonth: any;
  newEditList:any

  callEdits(e: any) {
    this.serviceApi.editQuestionList(e).subscribe((res:any) => {
      this.newEditList = ''
      this.newEditList = res.question
      this.parentData.emit(res)
    })
  }
  callCate() {
    this.http.get('https://api.thebiggestask.org/api/category').subscribe(
      (res) => {
        this.quesArr = res;
      },
      (error) => {}
    );
  }
  callSection() {
    this.http.get('https://api.thebiggestask.org/api/section_get').subscribe(
      (res) => {
        this.secArr = res;
      },
      (error) => {}
    );
  }

  deleted(e: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it !',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.http
          .get(
            `https://api.thebiggestask.org/api/question_destroy/${e.target.id}`
          )
          .subscribe(
            (res) => {
              this.response = res;
              if (this.response.status == 1) {
                // this.callsectionList();
                location.reload();
                // this.quesList;
              }
            },
            (error) => {}
          );
      }
    });
  }

}
