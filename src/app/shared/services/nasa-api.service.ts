import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private readonly DATOS: Apod = {
    title: "Titulo del día",
    date: "27/01/19",
    explanation: 'Desde sim Nasa API apli dep injec. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy.',
    url: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4T2BXBFBdqNTe0AhXb1bEAHaHT%26pid%3D15.1&f=1',
    hdurl: 'http://hdurl.test/',
    media_type: 'Image',
    service_version: '1.5',
  }
  constructor() { }

  getDATOSapod(): Apod {
    return this.DATOS;
  }
}
