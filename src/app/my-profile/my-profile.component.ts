import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  constructor(private http: HttpClient) {}

  data: any;
  disable: any = false;
  error: any = {
    name: '',
    email: '',
    insta: '',
    forum: '',
    bio: '',
  };
  status: any = false;
  errorPass: any = {
    old: '',
    new: '',
    confirmed: '',
  };
  statusPass: any = {
    old: false,
    new: false,
    confirm: false,
  };
  test: any;
  imgs: any;
  image: any;

  onCreatePost() {
    this.http
      .get('https://api.thebiggestask.org/api/profile')
      .pipe(
        map((res: any) => {
          const postsArray = [];
          postsArray.push({ ...res });
          this.data = postsArray;
          this.imgs = this.data[0]['image'];
        })
      )
      .subscribe((res: any) => {});
  }
  ngOnInit(): void {
    this.onCreatePost();
  }

  upload(e: any) {
    this.image = e.target.files[0];
  }

  onSubmit(profileForm: {
    email: any;
    name: any;
    forum: any;
    insta: any;
    bio: any;
    image: File;
  }) {
    const uploadData = new FormData();
    if (this.image) {
      uploadData.append('image', this.image, this.image.name);
    }
    uploadData.append('email', profileForm.email);
    uploadData.append('name', profileForm.name);
    uploadData.append('forum', profileForm.forum);
    uploadData.append('insta', profileForm.insta);
    uploadData.append('bio', profileForm.bio);
    this.disable = true;

    this.http
      .post('https://api.thebiggestask.org/api/profile_update', uploadData)
      .subscribe(
        (res: any) => {
          if (res) {
            this.disable = true;
            if (res.status == 1) {
              Swal.fire(
                'Good job!',
                'Your Profile has been updated!',
                'success'
              ).then(() => {
                window.location.reload();
              });
            } else {
              this.disable = false;
              Swal.fire(
                "Your Profile didn't updated!",
                'Please Try Again!',
                'error'
              );
            }
          }
        },
        (error) => {}
      );
  }

  changePassword(changePass: {
    old_password: any;
    new_password: any;
    confirm_password: any;
  }) {
    if (changePass.old_password == '') {
      this.errorPass.old = 'Field Required';
      this.statusPass.old = true;
    } else {
      this.errorPass.old = '';
      this.statusPass.old = false;
    }
    if (changePass.new_password == '') {
      this.errorPass.new = 'Field Required';
      this.statusPass.new = true;
    } else {
      this.errorPass.new = '';
      this.statusPass.new = false;
    }

    if (changePass.new_password != changePass.confirm_password) {
      this.errorPass.confirmed = 'Password dont match';
      this.statusPass.confirm = true;
    } else {
      this.errorPass.confirmed = '';
      this.statusPass.confirm = false;
    }

    if (
      this.statusPass.new == false &&
      this.statusPass.old == false &&
      this.statusPass.confirm == false
    ) {
      this.disable = true;
      this.http
        .post('https://api.thebiggestask.org/api/change_password', changePass)
        .subscribe(
          (res: any) => {
            if (res) {
              this.disable = true;
              this.test = res;
              if (res.status == 1) {
                Swal.fire(
                  'Good job!',
                  'Your Password has been changed!',
                  'success'
                ).then(() => {
                  window.location.reload();
                });
              } else {
                this.disable = false;
                Swal.fire(
                  'Old Password dont match!',
                  'PLease Try Again!',
                  'error'
                );
              }
            }
          },
          (error) => {}
        );
    }
  }
}
