import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css'],
})
export class CmsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  // All Variables

  getCmsData: any;
  getAboutAppData: any;
  getTermsServiceData: any;
  getPrivacyPolicyData: any;
  getQuestionBank: any;
  disable: any = false;
  deleteResponse: any;
  screen: any;
  title: any;
  title_App: any;
  info_type: any;
  info: any;
  info_App: any;
  editId: any;
  status: any;
  select: any = true;
  error = {
    screen: false,
    title: false,
    info: false,
  };

  errorResponse = {
    screen: '',
    title: '',
    info: '',
  };
  aboutError = {
    select: false,
    title: false,
    info: false,
  };
  aboutErrorResponse = {
    select: '',
    title: '',
    info: '',
  };

  // Variables End
  ngOnInit(): void {
    this.getCMS();
  }

  // Get all data of CMS
  getCMS() {
    this.http
      .get('https://api.thebiggestask.org/api/get_introscreen_info')
      .subscribe((res: any) => {
        this.getCmsData = res.intro_screen;
        this.getAboutAppData = res.about_app;
        this.getTermsServiceData = res.terms_of_service;
        this.getPrivacyPolicyData = res.privacy_policy;
        this.getQuestionBank = res.question_bank;
      });
  }
  // Deleting Data
  delete(e: any) {
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
            `https://api.thebiggestask.org/api/introscreen_info_delete/${e.target.id}`
          )
          .subscribe((res: any) => {
            if (res.status == 1) {
              location.reload();
            }
          });
      }
    });
  }
  // CMS Data upload form
  handleForm(form: {
    screen: any;
    title: any;
    info: any;
    id: any;
    info_type: any;
  }) {
    if (form.screen == '') {
      this.error.screen = false;
      this.errorResponse.screen = "Field Can't be Empty";
    } else {
      this.error.screen = true;
      this.errorResponse.screen = '';
    }
    if (form.title == '') {
      this.error.title = false;
      this.errorResponse.title = "Field Can't be Empty";
    } else {
      this.error.title = true;
      this.errorResponse.title = '';
    }
    if (form.info == '') {
      this.error.info = false;
      this.errorResponse.info = "Field Can't be Empty";
    } else {
      this.error.info = true;
      this.errorResponse.info = '';
    }

    if (this.error.screen && this.error.title && this.error.info) {
      this.disable = true;
      this.http
        .post(
          `https://api.thebiggestask.org/api/store_introscreen_info/${form.id}`,
          form
        )
        .subscribe((res: any) => {
          this.disable = true;
          if (res.status == 1) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: true,
              timer: 1500,
            }).then(() => {
              location.reload();
            });
          } else {
            this.disable = false;
          }
        });
    }
  }
  // Edit Form
  edit(e: any) {
    this.http
      .get(
        `https://api.thebiggestask.org/api/introscreen_info_edit/${e.target.id}`
      )
      .subscribe((res: any) => {
        this.screen = res.data.screen;
        this.title = res.data.title;
        this.info = res.data.info;
        this.editId = res.data.id;
        this.title_App = res.data.title;
        this.info_App = res.data.info;
        this.info_type = res.data.info_type;
        if (res.data.info_type == 'question_bank') {
          this.select = false;
        } else {
          this.select = true;
        }
      });
  }
  // CMS add Function
  add() {
    this.screen = undefined;
    this.title = undefined;
    this.info = undefined;
    this.editId = 0;
  }
  // About app add funtion
  addAboutApp() {
    this.title_App = '';
    this.info_App = '';
    this.info_type = '';
    this.editId = 0;
  }
  // about app post form
  handleAboutAppForm(forms: {
    title: any;
    info: any;
    info_type: any;
    id: any;
  }) {
    if (forms.info == '') {
      this.aboutError.info = false;
      this.aboutErrorResponse.info = "Field Can't be Empty";
    } else {
      this.aboutError.info = true;
      this.aboutErrorResponse.info = '';
    }
    if (forms.title == '') {
      this.aboutError.title = false;
      this.aboutErrorResponse.title = "Field Can't be Empty";
    } else {
      this.aboutError.title = true;
      this.aboutErrorResponse.title = '';
    }
    if (forms.info_type == '') {
      this.aboutError.select = false;
      this.aboutErrorResponse.select = "Field Can't be Empty";
    } else {
      this.aboutError.select = true;
      this.aboutErrorResponse.select = '';
    }
    if (
      this.aboutError.info &&
      this.aboutError.title &&
      this.aboutError.select
    ) {
      this.disable = true;
      this.http
        .post(
          `https://api.thebiggestask.org/api/store_introscreen_info/${forms.id}`,
          forms
        )
        .subscribe((res: any) => {
          this.disable = true;
          if (res.status == 1) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: true,
              timer: 1500,
            }).then(() => {
              location.reload();
            });
          } else {
            this.disable = false;
          }
        });
    }
  }
// Hide input base on select
  changeSelect(e: any) {
    if (e.target.value == 'question_bank') {
      this.select = false;
    } else {
      this.select = true;
    }
  }
}
