import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _router : Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }
  username = new FormControl('');
  password = new FormControl('');
  handleLogin() {
    let name = this.username.value;
    let password = this.password.value;
    // store the name in the sessionStorage, actually, you need to check in the DB first
    sessionStorage.setItem('un', name);
    sessionStorage.setItem('pw', password);
    this._router.navigate(['success', name]);
    this._router.navigate(['success', password]);  // success/:name
  }

}