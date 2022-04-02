import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { Account1 } from "../entities/accountinsert.entity";

@Injectable()
export class OrdertService
{
  private BASE_URL :string = 'http://localhost:5242/api/admin/';

  constructor(
    private httpClient:HttpClient
  ){}

  async findallorder() {
    var value = this.httpClient.get(this.BASE_URL+"findallorder");
    return await lastValueFrom(value);
  }

  async findorderdetails(orderid :number) {
    var value = this.httpClient.get(this.BASE_URL+"findorderdetails/"+orderid);
    return await lastValueFrom(value);
  }

}
