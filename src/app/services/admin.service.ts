import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { HomeComponent } from "../component/home/home.component";

@Injectable()
export class AdminService implements CanActivate
{
  userSession : boolean

  constructor(private router: Router) { }

  check(){
    if(1 < 2){
      this.userSession = true;
    }else{
      this.userSession = false;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // this.check();
    if(localStorage.getItem('session') == 'true'){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
    // return this.userSession;
  }
}
