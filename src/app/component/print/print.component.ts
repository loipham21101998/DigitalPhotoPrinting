import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entities/account.entity';
import { Print } from 'src/app/entities/print.entity';
import { Size } from 'src/app/entities/size.entity';
import { AccountService } from 'src/app/services/account.service';
import { PrintService } from 'src/app/services/print.service';
import { formatDate } from '@angular/common';
import { GlobalService } from 'src/app/services/globals.service';

@Component({
  // selector: 'app-root',
  templateUrl: './print.component.html',
  // styleUrls: ['./home.component.css'],
})
export class PrintComponent implements OnInit{
  uploadedFiles : any[] = [];
  quantity4x4 : number;
  quantity4x6 : number;
  quantity5x7 : number;
  quantity8x10 : number;
  quantity8x8 : number;
  material : string;
  // sizes : number[] = [];
  print : Print;
  prints : Print[] = []
  checkbtnAdd : boolean
  sizes: Size[] = [];

  constructor(
    private elementRef: ElementRef,
    private http : HttpClient,
    private printService :PrintService,
    private globalService: GlobalService

  ){}

  ngOnInit(){
    this.material= 'glossy'
    this.quantity4x4 = 0;
    this.quantity4x6 = 0;
    this.quantity5x7 = 0;
    this.quantity8x8 = 0;
    this.quantity8x10 = 0;
    this.checkbtnAdd = true
  }
  ngAfterViewInit(){
    // var js= document.createElement('script');

    // this.elementRef.nativeElement.appendChild(js);

  }
  file  : any;

  onUpload(event){
    for(let file of event.files){
      // console.log(file.name);
      this.file = file;
    }
    this.checkbtnAdd = false

  }

  addToCart(){
    if(this.quantity4x4 > 0){
      // console.log(this.quantity4x4);
      // this.sizes.push(1)
      this.sizes.push({id: 1 , name: '4x4' , quantity: this.quantity4x4})
    }

    if(this.quantity4x6 > 0){
      // console.log(this.quantity4x6);
      // this.sizes.push(2)
      this.sizes.push({id: 2 , name: '4x6' , quantity: this.quantity4x6})
    }

    if(this.quantity5x7 > 0){
      // console.log(this.quantity5x7);
      // this.sizes.push(3)
      this.sizes.push({id: 3 , name: '5x7' , quantity: this.quantity5x7})
    }

    if(this.quantity8x10 > 0){
      // console.log(this.quantity8x10);
      // this.sizes.push(4)
      this.sizes.push({id: 4 , name: '8x10' , quantity: this.quantity8x10})
    }

    if(this.quantity8x8 > 0){
      // console.log(this.quantity8x8);
      // this.sizes.push(5)
      this.sizes.push({id: 5 , name: '8x8' , quantity: this.quantity8x8})
    }
    // console.log(this.size)
    // console.log(this.material)
    // for(let size of this.sizes){
    //   this.print.accountId = parseInt(localStorage.getItem('accountId'))
    //   this.print.materialName = this.material;
    //   this.print.imageName = this.file.name;
    //   this.print.sizeName = String(size)
    //   console.log(this.print);
    //   console.log(this.sizess)
    // }

    for(let size of this.sizes){
      this.print = new Print()
      this.print.accountId = parseInt(localStorage.getItem('accountId'))
      this.print.materialName = this.material;
      this.print.imageName = this.file.name;
      this.print.sizeName = String(size.name)
      this.print.quantity = size.quantity
      this.print.date = formatDate(new Date(),'dd/MM/yyyy','en-US');
      // console.log(this.print);
      this.prints.push(this.print);
    }
    //  let  formData = new FormData();
    // formData.set("file",this.file,this.file.name)
    // this.http.post('http://localhost:5242/api/image/upload/'+sessionStorage.getItem('accountName'),formData).subscribe(res => {
    //   console.log(res)
    // });
    for(let p of this.prints){
      console.log(p)
    }

    this.printService.create(this.prints).then(
      res => {
        console.log(res)
      },
      err =>{
        console.log(err)
      }
    )
    this.globalService.PrintOrders = this.prints;
    console.log(this.globalService.PrintOrders.length)
    this.prints=[]
    this.sizes = []

  }



  reloadPage(){
    window.location.reload();
  }
}
