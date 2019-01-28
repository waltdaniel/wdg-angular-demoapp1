import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//url API nasa
const URL_NASA_APOD = 'https://api.nasa.gov/planetary/apod';
const API_KEY_NASA = 'DEMO_KEY';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  //DI de HttpClient
  constructor(private httpClient: HttpClient) { }

  getDATOSapod(): Observable<Apod> {
    return this.httpClient.get<Apod>(URL_NASA_APOD + '?api_key=' + API_KEY_NASA);
  }
}
