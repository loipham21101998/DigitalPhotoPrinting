import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../component/404/NotFound.component';
import { LoginComponent } from '../component/login/login.component';
import { AdminService } from '../services/admin.service';
import { AdminComponent } from './admin.component';
import { MateritalComponent } from './component/materital/Materital.component';
import { OrderComponent } from './component/order/Order.component';
import { AllUserComponent } from './component/user/Allusercomponent';


const routes: Routes = [
  {path:'admin',component:AdminComponent, canActivate: [AdminService], children: [
    {path: 'user', component: AllUserComponent},
    {path: 'order',component: OrderComponent},
    {path: 'material' ,component: MateritalComponent}
  ]},
  {path: '**', component: NotFoundComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
