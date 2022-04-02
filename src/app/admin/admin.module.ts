import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminComponent } from './admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from '../component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllUserComponent } from './component/user/Allusercomponent';
import { AccountService } from '../services/account.service';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import { MateritalComponent } from './component/materital/Materital.component';

import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AdminComponent,
    AllUserComponent,
    MateritalComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    DialogModule

  ],
  providers: [
    AccountService,
  ],
  bootstrap: []
})
export class AdminModule { }
