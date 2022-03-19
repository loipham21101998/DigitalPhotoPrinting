import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Account1 } from 'src/app/entities/accountinsert.entity';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-root',
  templateUrl: './register.component.html',
  // styleUrls: ['./home.component.css'],
})
export class RegisterComponent implements OnInit{
  title = 'DigitalPhotoPrinting';
  registerForm : FormGroup;

  constructor(
    private emlementRef : ElementRef,
    private formBuilder : FormBuilder,
    private accountService : AccountService,
    private router: Router
  ){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      username : 'LoiPham',
      password : '',
      firstname : 'Loi',
      lastname: 'Pham',
      birthday: '21/10/1998',
      gender: 'male',
      email: 'loipham21101998@gmail.com',
      phone : '0938810240',
      roleid: 2,
      address: 'Toky'
    })
  }

  ngAfterViewInit(){
    var js= document.createElement('script');

    this.emlementRef.nativeElement.appendChild(js);

  }

  register(){
    var account : Account1 = this.registerForm.value;
    this.accountService.create(account).then(
      res => {
        var a = res as Account1
        console.log(a)
        alert("Success")
        this.router.navigate(['/login'])
      },
      err => {
        console.log(err)
      }
    );

    console.log(account)
  }
}
