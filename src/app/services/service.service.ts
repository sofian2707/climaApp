import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseurl = 'https://api.openweathermap.org/data/2.5/weather?';

  apikey = '&appid=2942ee95022ff0741d20504bbd7cc64c';

  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&lang={lang}

  constructor(public http: HttpClient) { }

  public getWeather(lat: number, lon: number): Observable<any>{
    return this.http.get(this.baseurl+"lat="+lat+"&lon="+lon+this.apikey+"&lang=sp");
  }


}
