import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  // selector: 'app-root',
  templateUrl: './register.component.html',
  // styleUrls: ['./home.component.css'],
})
export class RegisterComponent implements OnInit{
  title = 'DigitalPhotoPrinting';


  constructor(
    private emlementRef : ElementRef
  ){}

  ngOnInit(){

  }

  ngAfterViewInit(){
    var js= document.createElement('script');

    this.emlementRef.nativeElement.appendChild(js);

  }
}
