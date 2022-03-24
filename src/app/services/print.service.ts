import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Print } from "../entities/print.entity";

@Injectable()
export class PrintService{
  private BASE_URL :string = 'http://localhost:5242/api/image/';

  constructor(
    private httpClient:HttpClient
  ){}

  async create(prints: Print[]) {
    var value = this.httpClient.post(this.BASE_URL+"order",prints);
    return await lastValueFrom(value);
  }


}
