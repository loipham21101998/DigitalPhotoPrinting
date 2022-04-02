import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { lastValueFrom, Observable } from "rxjs";
import { HomeComponent } from "../component/home/home.component";
import { Material } from "../entities/material.entity";

@Injectable()
export class AdminService implements CanActivate
{
  private BASE_URL :string = 'http://localhost:5242/api/admin/';

  constructor(
    private router: Router,
    private httpClient:HttpClient
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // this.check();
    if(localStorage.getItem('session') == 'Admin')
    {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }


  async updateMaterial(material : Material) {
    var value = this.httpClient.post(this.BASE_URL+"update/",material);
    return await lastValueFrom(value);
  }
}
