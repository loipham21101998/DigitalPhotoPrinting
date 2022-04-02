import { Injectable } from "@angular/core";
import { Print } from "../entities/print.entity";

@Injectable()
export class GlobalService
{
  titleUserpage = 'User';
  titleOrderpage = 'Order'
  titleMaterialpage = 'Material'
  PrintOrders : Print[];

}
