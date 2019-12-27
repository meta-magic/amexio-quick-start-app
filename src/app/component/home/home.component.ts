import { HttpService } from './../../services/http.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menus: any[] = [];
  subnavmenus: any[] = [];
  title: string;
  @ViewChild('nav', {static: true}) tab: ElementRef;
  usermenu: any;

  constructor(private _route: Router,
              private hService: HttpService,
              private cookieService: CookieService) {
    this.getMenuList();

    this.subnavmenus =
      [
        {
          'text': 'My Profile',
        },
        {
          'text': 'Logout',
        }
      ];
  }

  ngOnInit() {

    // Need to change --- Doubt
    this.title = 'Hello,' + ' ' + 'John Doe';
  }

  onMenuClick(node: any) {
    if (node.hasOwnProperty('link') && node.link != null && node.link != '') {
      this._route.navigate([node.link]);
    }
  }

  userAction(data: any) {
    if (data.name == 'Logout') {
      this._route.navigate(['login']);
      this.cookieService.delete('tokenId');
    }
  }


  getMenuList() {

    let responseData: any;
    this.hService.fetch('assets/data/navmenu.json', 'get').subscribe(
      (res: any) => {
        responseData = res;

      },
      (error: any) => {
      },
      () => {
        if (responseData) {
          this.menus = responseData;
        }
      }
    );

    this.hService.fetch('assets/data/navusermenu.json', 'get').subscribe(
      (res: any) => {
        responseData = res;

      },
      (error: any) => {
      },
      () => {
        if (responseData) {
          this.usermenu = responseData;
        }
      }
    );
  }
}
