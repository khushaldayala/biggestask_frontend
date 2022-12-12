import { Injectable } from '@angular/core';
import {CanActivate , Router} from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  // s:any = !!localStorage.getItem('userId')
  s:any = !!sessionStorage.getItem('userId')

  canActivate(){
  // console.log(this.s);
      return this.s
  }
}
