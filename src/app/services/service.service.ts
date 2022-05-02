import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseurl = 'https://api.openweathermap.org/data/2.5/weather?';

  apikey = '2942ee95022ff0741d20504bbd7cc64c';

  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  constructor(public http: HttpClient) { }

  


}
