import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  test:any
  user :any

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getUserName()
  }
  onLogout() {
    this.http.get('https://api.thebiggestask.org/api/logout').subscribe(
      (res) => {
        if (res) {
          this.test = res;
          if (this.test.status == 1) {
            sessionStorage.removeItem('userId');
            Swal.fire('Good job!', 'You have beenLLogout!', 'success').then(
              () => {
                window.location.href = '/';
              }
            );
          }
        }
      },
      (err) => {}
    );
  }

  getUserName() {
    this.http
      .get('https://api.thebiggestask.org/api/profile')
      .subscribe((res: any) => {
        this.user = res.name;
      });
  }
}
