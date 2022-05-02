import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


lat: any;
lon: any;

clima: any = [];
active: boolean;

  constructor(private router: Router, private service: ServiceService) {}

  datos = new FormGroup({
   latitud : new FormControl('',[
    Validators.required,
    Validators.max(900),
  ]),
   longitud : new FormControl('', [
    Validators.required,
    Validators.max(900),
  ]),
  });

  get latitud() { return this.datos.get('latitud'); }
  get longitud() { return this.datos.get('longitud'); }

  onSubmit() {
    
    this.lat= this.latitud.value;
    this.lon= this.longitud.value;

    this.obtener();  
    this.active= true
  }


  obtener(){
    this.service.getWeather(this.lat, this.lon).subscribe(data =>{
      this.clima=data;
      console.log(this.clima);
    })

  }






}

 


