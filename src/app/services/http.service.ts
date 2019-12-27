import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private cookieService: CookieService) {

  }

  fetch(serviceUrl: string, methodType: string): Observable<any> {
      const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8').append('tokenid',
       this.cookieService.get('tokenId'));

      if (methodType === 'post') {
          return this.http.post(serviceUrl, methodType);
      } else if (methodType === 'get') {
          return this.http.get(serviceUrl, { headers});
      }
  }


  post(serviceUrl: string, methodType: string, requestJson: any): Observable<any> {
      const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8').append('tokenid',
       this.cookieService.get('tokenId'));
      if (methodType === 'post') {
          return this.http.post(serviceUrl, requestJson, {headers});
      } else if (methodType === 'get') {
          return this.http.get(serviceUrl);
      }

  }

}
