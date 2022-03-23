import { Component, ElementRef, OnInit } from '@angular/core';
import { GlobalService } from '../services/globals.service';
import { AllUserComponent } from './component/user/Allusercomponent';


@Component({
  selector: 'app-root',
  templateUrl: './admin.component.html',
})


export class AdminComponent implements OnInit {
  titlePage:string;


  constructor(
    private emlementRef : ElementRef,
    private globals: GlobalService
  ){}

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    //Js
    var jquery= document.createElement('script');
    jquery.src = '/assets/admin/plugins/jquery/jquery.min.js'

    var bootstrap= document.createElement('script');
    bootstrap.src = '/assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js'

    var overlayScrollbarsJs= document.createElement('script');
    overlayScrollbarsJs.src = '/assets/admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js'

    var adminlteJs= document.createElement('script');
    adminlteJs.src = '/assets/admin/dist/js/adminlte.js'

    var mousewheel= document.createElement('script');
    mousewheel.src = '/assets/admin/plugins/jquery-mousewheel/jquery.mousewheel.js'

    var raphael= document.createElement('script');
    raphael.src = '/assets/admin/plugins/raphael/raphael.min.js'

    var jqueryraphael= document.createElement('script');
    jqueryraphael.src = '/assets/admin/plugins/jquery-mapael/jquery.mapael.min.js'

    var usa_states= document.createElement('script');
    usa_states.src = '/assets/admin/plugins/jquery-mapael/maps/usa_states.min.js'

    var Chart= document.createElement('script');
    Chart.src = '/assets/admin/plugins/chart.js/Chart.min.js'

    var dashboard2Js= document.createElement('script');
    dashboard2Js.src = '/assets/admin/dist/js/pages/dashboard2.js'

    var demoJs= document.createElement('script');
    demoJs.src = '/assets/admin/dist/js/demo.js'

    var fontawesome = document.createElement('script');
    fontawesome.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js'

    // this.emlementRef.nativeElement.appendChild(jquery);
    // this.emlementRef.nativeElement.appendChild(jqueryraphael);
    // this.emlementRef.nativeElement.appendChild(raphael);
    // this.emlementRef.nativeElement.appendChild(overlayScrollbarsJs);
    // this.emlementRef.nativeElement.appendChild(bootstrap);
    // this.emlementRef.nativeElement.appendChild(overlayScrollbarsJs);
    // this.emlementRef.nativeElement.appendChild(mousewheel);
    // this.emlementRef.nativeElement.appendChild(usa_states);
    // this.emlementRef.nativeElement.appendChild(Chart);
    // this.emlementRef.nativeElement.appendChild(demoJs);
    this.emlementRef.nativeElement.appendChild(fontawesome);

  }

  userpage(){
    this.titlePage = this.globals.titleUserpage
    console.log( this.titlePage);
  }

}
