import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Account } from 'src/app/entities/account.entity';
import { Order } from 'src/app/entities/order.entity';
import { OrderDetails } from 'src/app/entities/orderdetails.entity';
import { AccountService } from 'src/app/services/account.service';
import { OrdertService } from 'src/app/services/order.service';

@Component({
  // selector: 'app-root',
  templateUrl: './Order.component.html',
})
export class OrderComponent implements OnInit{

  orders: Order[]
  orderDetails : OrderDetails[]
  display :boolean = false

  constructor(
    private orderService: OrdertService
  ){}

  ngOnInit(){
    this.orderService.findallorder().then(
      res => {
        this.orders = res as Order[]
      },
      err =>{
        console.log(err)
      }
    )

  }

  selectOrder(id: number){
    console.log(id)
    this.display = true;
    this.orderService.findorderdetails(id).then(
      res => {
        this.orderDetails = res as OrderDetails[]
      },
      err => {
        console.log(err)
      }
    )
  }

  ngAfterViewInit(){


  }

}
