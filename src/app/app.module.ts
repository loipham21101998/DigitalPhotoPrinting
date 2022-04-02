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
import { PrintComponent } from './component/print/print.component';
import {FileUploadModule} from 'primeng/fileupload';
import {InputNumberModule} from 'primeng/inputnumber';
import { PrintService } from './services/print.service';
import {RadioButtonModule} from 'primeng/radiobutton';
import { OrdertService } from './services/order.service';
import { OrderComponent } from './admin/component/order/Order.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    PrintComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AdminModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    FileUploadModule,
    InputNumberModule,
    RadioButtonModule,
    DialogModule
  ],
  providers: [
    AdminService,
    AccountService,
    GlobalService,
    PrintService,
    OrdertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
