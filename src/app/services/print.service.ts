import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { lastValueFrom, Observable } from "rxjs";
import { Print } from "../entities/print.entity";

@Injectable()
export class PrintService implements CanActivate{
  private BASE_URL :string = 'http://localhost:5242/api/image/';

  constructor(
    private httpClient:HttpClient,
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // this.check();
    if(localStorage.getItem('accountId') != null){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }


  async create(prints: Print[],accountId : number, total : number) {
    var value = this.httpClient.post(this.BASE_URL+"order/"+accountId+"/"+total,prints);
    return await lastValueFrom(value);
  }

  async allMaterial() {
    var value = this.httpClient.get(this.BASE_URL+"allmaterial");
    return await lastValueFrom(value);
  }

  async allSize() {
    var value = this.httpClient.get(this.BASE_URL+"allsize");
    return await lastValueFrom(value);
  }
}
