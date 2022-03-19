import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  // selector: 'app-root',
  templateUrl: './NotFound.component.html',
})
export class NotFoundComponent implements OnInit{
  title = 'DigitalPhotoPrinting';

  constructor(
    private emlementRef : ElementRef,
    private formBuilder : FormBuilder
  ){}

  ngOnInit(){
  }
  ngAfterViewInit(){


  }

}
