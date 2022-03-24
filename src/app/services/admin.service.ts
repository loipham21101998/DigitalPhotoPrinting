import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { HomeComponent } from "../component/home/home.component";

@Injectable()
export class AdminService implements CanActivate
{

  constructor(private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // this.check();
    if(localStorage.getItem('session') == 'Admin'){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
    // return this.userSession;
  }
}
