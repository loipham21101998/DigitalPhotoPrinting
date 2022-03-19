import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminModule } from './admin/admin.module';
import { AdminService } from './services/admin.service';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/registercomponent';
import { AccountService } from './services/account.service';
import { NotFoundComponent } from './component/404/NotFound.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './services/globals.service';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AdminModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [
    AdminService,
    AccountService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
