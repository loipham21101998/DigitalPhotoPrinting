import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AllUserComponent} from './admin/component/user/Allusercomponent';
import { NotFoundComponent } from './component/404/NotFound.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PrintComponent } from './component/print/print.component';
import { RegisterComponent } from './component/register/registercomponent';
import { AdminService } from './services/admin.service';

const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'home',component: HomeComponent},
  // {path : 'admin',component: AdminComponent,canActivate: [AdminService],children: [
  //   {path: 'user', component: AllUserComponent}
  // ]},
  {path : 'login', component : LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'print', component: PrintComponent}
  // {path: '**', component: NotFoundComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
