import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Account } from 'src/app/entities/account.entity';
import { Material } from 'src/app/entities/material.entity';
import { Order } from 'src/app/entities/order.entity';
import { OrderDetails } from 'src/app/entities/orderdetails.entity';
import { AccountService } from 'src/app/services/account.service';
import { AdminService } from 'src/app/services/admin.service';
import { OrdertService } from 'src/app/services/order.service';
import { PrintService } from 'src/app/services/print.service';

@Component({
  // selector: 'app-root',
  templateUrl: './Materital.component.html',
})
export class MateritalComponent implements OnInit{

  materials : Material[]
  display : boolean = false
  matertial :  Material

  materialForm : FormGroup;

  constructor(
    private printService : PrintService,
    private formBuilder : FormBuilder,
    private adminService : AdminService
  ){}

  ngOnInit(){
    this.printService.allMaterial().then(
      res => {
        this.materials = res as Material[]
      },
      err => {
        console.log(err)
      }
    )
    this.materialForm = this.formBuilder.group({
      id : '',
      name: '',
      price: ''
    })
  }

  updateMaterial(){
    var m : Material = this.materialForm.value;
    this.adminService.updateMaterial(m).then(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
    this.display = false
    this.relaodPage();
  }

  openDialog(materialId : number){
    this.display = true
    this.matertial = this.findMatertial(materialId)
    this.materialForm = this.formBuilder.group({
      id : this.matertial.id,
      name: this.matertial.name,
      price: this.matertial.price
    })
  }

  findMatertial(id : number) : Material{
    for(let a of this.materials){
      if(a.id == id){
        return a
      }
    }
    return null
  }

  relaodPage(){
    window.location.reload();
  }

}
