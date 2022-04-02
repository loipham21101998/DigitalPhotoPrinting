import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Material } from 'src/app/entities/material.entity';
import { Size1 } from 'src/app/entities/size1.entity';
import { PrintService } from 'src/app/services/print.service';

@Component({
  // selector: 'app-root',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  title = 'DigitalPhotoPrinting';
  accCheck : boolean;
  accName : string;
  materials : Material[];
  sizes : Size1[]

  constructor(
    private emlementRef : ElementRef,
    private activatedRoute : ActivatedRoute,
    private printService: PrintService
  ){}

  ngOnInit(){
    this.accCheck = localStorage.getItem('session') != null;
    this.accName = 'LoiPham'
    // this.activatedRoute.paramMap.subscribe(p => {
    //   this.accCheck = JSON.parse(p.get('check'));
    // });
    // this.accCheck = localStorage.getItem('session') =='true';
    // localStorage.setItem('session','true');
    this.printService.allMaterial().then(
      res => {
        this.materials = res as Material[]
      },
      err => {
        console.log(err)
      }
    )

    this.printService.allSize().then(
      res => {
        this.sizes = res as Size1[]
        console.log(this.sizes.length)
      },
      err => {
        console.log(err)
      }
    )

    // console.log(this.material?.length)
  }

  ngAfterViewInit(){
    // var js , bootstrap, bootstrap1  = document.createElement('script');
    var js= document.createElement('script');
    var bootstrap = document.createElement('script');
    var fontawesome = document.createElement('script');
    var bundlebootsrap = document.createElement('script');
    js.src = './assets/client/js/scripts.js';
    bootstrap.src = 'https://cdn.startbootstrap.com/sb-forms-latest.js';
    // fontawesome.src = 'https://use.fontawesome.com/releases/v5.15.4/js/all.js';
    fontawesome.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js'
    bundlebootsrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
    var fontawesomestyle = document.createElement('link');
    fontawesomestyle.type = 'text/css';
    fontawesomestyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    fontawesomestyle.rel = 'stylesheet';

    this.emlementRef.nativeElement.appendChild(js);
    this.emlementRef.nativeElement.appendChild(bootstrap);
    this.emlementRef.nativeElement.appendChild(fontawesome);
    this.emlementRef.nativeElement.appendChild(bundlebootsrap);
    this.emlementRef.nativeElement.appendChild(fontawesomestyle);
  }

  logout(){
    localStorage.removeItem('session');
    localStorage.removeItem('accountId');
    window.location.reload();
  }
}
