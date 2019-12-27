import { HttpService } from './services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmexioWidgetModule, AmexioEnterpriseModule} from 'amexio-ng-extensions';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { RouteGuardService } from './services/route.guard.service';
import { ActivityPanelComponent } from './component/activity-panel/activity-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ActivityPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmexioEnterpriseModule,
    BrowserAnimationsModule,
    AmexioWidgetModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService, CookieService, RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
