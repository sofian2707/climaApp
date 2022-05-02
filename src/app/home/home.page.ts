import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  datos = new FormGroup({
   latitud : new FormControl('', Validators.required),
   longitud : new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.datos.value);
    
  }

  get latitud() { return this.datos.get('latitud'); }
  get longitud() { return this.datos.get('longitud'); }



}

 


