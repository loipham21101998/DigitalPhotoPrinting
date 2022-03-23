import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entities/account.entity';
import { AccountService } from 'src/app/services/account.service';

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
  size : number[] = [];

  constructor(
    private elementRef: ElementRef
  ){}

  ngOnInit(){
    this.material= 'glossy'
    this.quantity4x4 = 0;
    this.quantity4x6 = 0;
    this.quantity5x7 = 0;
    this.quantity8x8 = 0;
    this.quantity8x10 = 0;
  }
  ngAfterViewInit(){
    // var js= document.createElement('script');

    // this.elementRef.nativeElement.appendChild(js);

  }
  file  : any;

  onUpload(event){
    for(let file of event.files){
      console.log(file.name);
    }
    // let  formData = new FormData();
    // formData.set("files",event.files)
  }

  addToCart(){
    if(this.quantity4x4 > 0){
      console.log(this.quantity4x4);
      this.size.push(1)
    }

    if(this.quantity4x6 > 0){
      console.log(this.quantity4x6);
      this.size.push(2)
    }

    if(this.quantity5x7 > 0){
      console.log(this.quantity5x7);
      this.size.push(3)
    }

    if(this.quantity8x10 > 0){
      console.log(this.quantity8x10);
      this.size.push(4)
    }

    if(this.quantity8x8 > 0){
      console.log(this.quantity8x8);
      this.size.push(5)
    }
    console.log(this.size)
    console.log(this.material)
  }



  reloadPage(){
    window.location.reload();
  }
}
