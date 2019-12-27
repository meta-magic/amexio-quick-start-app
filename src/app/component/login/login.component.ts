import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInGroup: any;
  showLoader =  false;
  constructor(private fb: FormBuilder, private route: Router,
              private cookieService: CookieService) {

  }

  ngOnInit() {
    this.validateSigninform();
  }

  validateSigninform() {
    this.signInGroup = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  loginHandle() {
    this.cookieService.set('tokenId', new Date().getTime() + '');
    this.route.navigate(['home']);
  }

}
