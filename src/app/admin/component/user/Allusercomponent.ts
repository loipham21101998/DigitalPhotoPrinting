import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Account } from 'src/app/entities/account.entity';
import { AccountService } from 'src/app/services/account.service';

@Component({
  // selector: 'app-root',
  templateUrl: './Alluser.component.html',
})
export class AllUserComponent implements OnInit{
  public title :string;
  accounts: Account[]

  constructor(
    private accountService: AccountService
  ){}

  ngOnInit(){
    this.title = "User"
    this.accountService.findall().then(
      res =>{
        this.accounts = res as Account[]
      },
      err => {
        console.log(err)
      }
    )
  }
  ngAfterViewInit(){


  }

}
