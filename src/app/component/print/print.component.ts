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

  constructor(
    private elementRef: ElementRef
  ){}

  ngOnInit(){

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
    let  formData = new FormData();
    formData.set("files",event.files)
  }

  reloadPage(){
    window.location.reload();
  }
}
