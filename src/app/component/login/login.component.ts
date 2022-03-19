import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entities/account.entity';
import { AccountService } from 'src/app/services/account.service';

@Component({
  // selector: 'app-root',
  templateUrl: './login.component.html',
  // styleUrls: ['./home.component.css'],
})
export class LoginComponent implements OnInit{
  title = 'DigitalPhotoPrinting';

  username: string;
  password: string;
  account : Account;
  loginForm : FormGroup;
  checkaccount : boolean;

  constructor(
    private emlementRef : ElementRef,
    private formBuilder : FormBuilder,
    private accountService : AccountService,
    private router: Router
  ){}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({

    })
  }
  ngAfterViewInit(){
    // var js= document.createElement('script');

    // this.emlementRef.nativeElement.appendChild(js);

  }

  submit(){
    console.log(this.username);
    console.log(this.password);
    this.accountService.login(this.username,this.password).then(
      res => {
        this.checkaccount = res as boolean
        // this.reloadPage();
      },
      err => {
        console.log(err)
      }
    )
  }

  click1(){
    console.log(this.username);
    console.log(this.password);
    this.accountService.login(this.username,this.password).then(
      res => {
        this.checkaccount = res as boolean
        var c= this.checkaccount;
        console.log(c)
        // this.reloadPage();
        if(c){
          localStorage.setItem('session',String(this.checkaccount));
          // this.router.navigate(['/home',{check : this.checkaccount}])
          this.router.navigate(['/home']);
        }else{
          localStorage.setItem('session',String(this.checkaccount));
          this.router.navigate(['/login'])
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  reloadPage(){
    window.location.reload();
  }
}
