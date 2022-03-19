import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { Account1 } from "../entities/accountinsert.entity";

@Injectable()
export class AccountService
{
  private BASE_URL :string = 'http://localhost:5242/api/account/';

  constructor(
    private httpClient:HttpClient
  ){}

  async login(username : string , password: string) {
    var value = this.httpClient.get(this.BASE_URL+"login/"+username+"/"+password);
    return await lastValueFrom(value);
  }

  async findall() {
    var value = this.httpClient.get(this.BASE_URL+"findall");
    return await lastValueFrom(value);
  }

  async create(account: Account1) {
    var value = this.httpClient.post(this.BASE_URL+"create",account);
    return await lastValueFrom(value);
  }

}
