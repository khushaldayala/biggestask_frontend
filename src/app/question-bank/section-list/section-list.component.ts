import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['../question-bank.component.css'],
})
export class SectionListComponent implements OnInit {
  newquesArr: any;
  questionEditInput: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.callSection();
  }

  questions: any = [];
  disable: any = false;
  error: any = {
    cate: '',
    sect: '',
  };
  setError: any = {
    cate: false,
    sect: false,
  };
  sectionArr: any = [];
  sectionList: any = [];
  response: any;
  editList: any = [];
  editList1: any = [];
  quesShow: any = [];
  updateResponse: any;
  updateError: any = {
    sect_id: '',
    cate_id: '',
  };
  updateErrorStatus: any = {
    sect_id: undefined,
    cate_id: undefined,
  };
  continueBtn: any;
  createResponse: any;
  month = {
    monthone: '',
    monthtwo: '',
    monththree: '',
    monthfour: '',
    monthfive: '',
    monthsix: '',
    monthseven: '',
    montheight: '',
    monthnine: '',
    monthten: '',
    montheleven: '',
    monthtwelve: '',
    monththirteen: '',
    monthfourteen: '',
  };

  month_1: any = [];
  month_2: any = [];
  month_3: any = [];
  month_4: any = [];
  month_5: any = [];
  month_6: any = [];
  month_7: any = [];
  month_8: any = [];
  month_9: any = [];
  month_10: any = [];
  month_11: any = [];
  month_12: any = [];
  month_13: any = [];
  month_14: any = [];

  removePrevious: any = [];
  test: any;
  number1: any = false;
  number2: any = false;
  number3: any = false;
  number4: any = false;
  number5: any = false;
  number6: any = false;
  number7: any = false;
  number8: any = false;
  number9: any = false;
  number10: any = false;
  number11: any = false;
  number12: any = false;
  number13: any = false;
  number14: any = false;
  quesArr: any;
  newEditList: any;
  newEditListId: any;
  newEditListCateId: any;

  showQuestion(e: any) {
    this.callCate();
    this.http
      .get(`https://api.thebiggestask.org/api/question_get/${e.target.id}`)
      .subscribe(
        (res) => {
          this.removePrevious.push(e.target.id);

          if (e.target.id == 1) {
            this.month_1 = res;
            this.number1 = !this.number1;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;
            this.number5 = false;
            this.number6 = false;
            this.number7 = false;
            this.number8 = false;
            this.number9 = false;
            this.number10 = false;
            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 2) {
            this.month_2 = res;
            this.number1 = false;
            this.number2 = !this.number2;
            this.number1 = false;

            this.number3 = false;
            this.number4 = false;
            this.number5 = false;
            this.number6 = false;
            this.number7 = false;
            this.number8 = false;
            this.number9 = false;
            this.number10 = false;
            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 3) {
            this.month_3 = res;
            this.number3 = !this.number3;
            this.number1 = false;
            this.number2 = false;

            this.number4 = false;
            this.number5 = false;
            this.number6 = false;
            this.number7 = false;
            this.number8 = false;
            this.number9 = false;
            this.number10 = false;
            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 4) {
            this.month_4 = res;
            this.number4 = !this.number4;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;

            this.number5 = false;
            this.number6 = false;
            this.number7 = false;
            this.number8 = false;
            this.number9 = false;
            this.number10 = false;
            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 5) {
            this.month_5 = res;
            this.number5 = !this.number5;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;

            this.number6 = false;
            this.number7 = false;
            this.number8 = false;
            this.number9 = false;
            this.number10 = false;
            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 6) {
            this.month_6 = res;
            this.number6 = !this.number6;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;
            this.number5 = false;

            this.number7 = false;
            this.number8 = false;
            this.number9 = false;
            this.number10 = false;
            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 7) {
            this.month_7 = res;
            this.number7 = !this.number7;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;
            this.number5 = false;
            this.number6 = false;

            this.number8 = false;
            this.number9 = false;
            this.number10 = false;
            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 8) {
            this.month_8 = res;
            this.number8 = !this.number8;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;
            this.number5 = false;
            this.number6 = false;
            this.number7 = false;

            this.number9 = false;
            this.number10 = false;
            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 9) {
            this.month_9 = res;
            this.number9 = !this.number9;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;
            this.number5 = false;
            this.number6 = false;
            this.number7 = false;
            this.number8 = false;

            this.number10 = false;
            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 10) {
            this.month_10 = res;
            this.number10 = !this.number10;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;
            this.number5 = false;
            this.number6 = false;
            this.number7 = false;
            this.number8 = false;
            this.number9 = false;

            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 11) {
            this.month_11 = res;
            this.number11 = !this.number11;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;
            this.number5 = false;
            this.number6 = false;
            this.number7 = false;
            this.number8 = false;
            this.number9 = false;
            this.number10 = false;

            this.number12 = false;
            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 12) {
            this.month_12 = res;
            this.number12 = !this.number12;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;
            this.number5 = false;
            this.number6 = false;
            this.number7 = false;
            this.number8 = false;
            this.number9 = false;
            this.number10 = false;
            this.number11 = false;

            this.number13 = false;
            this.number14 = false;
          }
          if (e.target.id == 13) {
            this.month_13 = res;
            this.number13 = !this.number13;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;
            this.number5 = false;
            this.number6 = false;
            this.number7 = false;
            this.number8 = false;
            this.number9 = false;
            this.number10 = false;
            this.number11 = false;
            this.number12 = false;

            this.number14 = false;
          }
          if (e.target.id == 14) {
            this.month_14 = res;
            this.number14 = !this.number14;
            this.number1 = false;
            this.number2 = false;
            this.number3 = false;
            this.number4 = false;
            this.number5 = false;
            this.number6 = false;
            this.number7 = false;
            this.number8 = false;
            this.number9 = false;
            this.number10 = false;
            this.number11 = false;
            this.number12 = false;
            this.number13 = false;
          }

          if (this.removePrevious.length > 1) {
            if (this.removePrevious[0] == 1 && this.number1 == false) {
              this.month_1 = [];
            }
            if (this.removePrevious[0] == 2 && this.number2 == false) {
              this.month_2 = [];
            }
            if (this.removePrevious[0] == 3 && this.number3 == false) {
              this.month_3 = [];
            }
            if (this.removePrevious[0] == 4 && this.number4 == false) {
              this.month_4 = [];
            }
            if (this.removePrevious[0] == 5 && this.number5 == false) {
              this.month_5 = [];
            }
            if (this.removePrevious[0] == 6 && this.number6 == false) {
              this.month_6 = [];
            }
            if (this.removePrevious[0] == 7 && this.number7 == false) {
              this.month_7 = [];
            }
            if (this.removePrevious[0] == 8 && this.number8 == false) {
              this.month_8 = [];
            }
            if (this.removePrevious[0] == 9 && this.number9 == false) {
              this.month_9 = [];
            }
            if (this.removePrevious[0] == 10 && this.number10 == false) {
              this.month_10 = [];
            }
            if (this.removePrevious[0] == 11 && this.number11 == false) {
              this.month_11 = [];
            }
            if (this.removePrevious[0] == 12 && this.number12 == false) {
              this.month_12 = [];
            }
            if (this.removePrevious[0] == 13 && this.number13 == false) {
              this.month_13 = [];
            }
            if (this.removePrevious[0] == 14 && this.number14 == false) {
              this.month_14 = [];
            }
            this.test = this.removePrevious.shift();
          }
        },
        (error) => {}
      );
    //
  }

  newQuestion() {
    this.callCate();
    this.newEditList = undefined;
    this.newEditListId = undefined;
    this.newEditListCateId = undefined;
  }

  callCate() {
    this.http.get('https://api.thebiggestask.org/api/category').subscribe(
      (res) => {
        this.quesArr = res;
        this.newquesArr = res;
      },
      (error) => {}
    );
  }
  onSubmit(profileForm: { category_id: any; section: any }) {
    if (profileForm.section == '') {
      this.error.sect = "Field Cant't be Empty";
      this.setError.sect = true;
    } else {
      this.error.sect = '';
      this.setError.sect = false;
    }
    if (profileForm.category_id == '') {
      this.error.cate = "Field Cant't be Empty";
      this.setError.cate = true;
    } else {
      this.error.cate = '';
      this.setError.cate = false;
    }

    if (this.setError.sect == false && this.setError.cate == false) {
      this.http
        .post('https://api.thebiggestask.org/api/section_create', profileForm)
        .subscribe(
          (res) => {
            this.createResponse = res;
            window.location.reload();
          },
          (error) => {}
        );
    }
  }

  callSection() {
    this.http
      .get('https://api.thebiggestask.org/api/question_get_all')
      .subscribe(
        (res) => {
          this.sectionArr = res;
          this.sectionArr.forEach((curr: any) => {
            if (curr.category_id == 1) {
              this.month.monthone = '1';
            }
            if (curr.category_id == 2) {
              this.month.monthtwo = '2';
            }
            if (curr.category_id == 3) {
              this.month.monththree = '3';
            }
            if (curr.category_id == 4) {
              this.month.monthfour = '4';
            }
            if (curr.category_id == 5) {
              this.month.monthfive = '5';
            }
            if (curr.category_id == 6) {
              this.month.monthsix = '6';
            }
            if (curr.category_id == 7) {
              this.month.monthseven = '7';
            }
            if (curr.category_id == 8) {
              this.month.montheight = '8';
            }
            if (curr.category_id == 9) {
              this.month.monthnine = '9';
            }
            if (curr.category_id == 10) {
              this.month.monthten = '10';
            }
            if (curr.category_id == 11) {
              this.month.montheleven = '11';
            }
            if (curr.category_id == 12) {
              this.month.monthtwelve = '12';
            }
            if (curr.category_id == 13) {
              this.month.monththirteen = '13';
            }
            if (curr.category_id == 14) {
              this.month.monthfourteen = '14';
            }
          });
        },
        (error) => {}
      );
  }

  callsectionList() {
    this.http.get('https://api.thebiggestask.org/api/section_get').subscribe(
      (res) => {
        this.sectionList = res;
      },
      (erroir) => {}
    );
  }
  parentData(res: any) {
    this.newEditList = res.question;
    this.newEditListId = res.id;
    this.newEditListCateId = res.category_id;
  }
  updateQuestionList(profileFormss: {
    category_id: any;
    id: any;
    question: any;
  }) {
    if (profileFormss.category_id == '') {
      this.updateError.cate_id = true;
      this.updateErrorStatus.cate_id = "Field Can't be Empty";
    } else {
      this.updateError.cate_id = false;
      this.updateErrorStatus.cate_id = '';
    }
    if (profileFormss.question == '') {
      this.updateError.quest = true;
      this.updateErrorStatus.quest = "Field Can't be Empty";
    } else {
      this.updateError.quest = false;
      this.updateErrorStatus.quest = '';
    }

    if (
      this.updateErrorStatus.cate_id == false &&
      this.updateErrorStatus.quest == false
    ) {
      this.disable = true;
      this.http
        .post(
          `https://api.thebiggestask.org/api/question_update`,
          profileFormss
        )
        .subscribe(
          (res) => {
            this.disable = true;
            this.updateResponse = res;
            if (this.updateResponse.status == 1) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: true,
                timer: 1500,
              }).then(() => {
                location.reload();
              });
            }
          },
          (error) => {}
        );
    } else {
      this.disable = false;
    }
  }
}
