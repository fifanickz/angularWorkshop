import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: String = '';
  userPassWord: String = '';

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(_form: NgForm) {
    console.log(_form.value);
  }
}
