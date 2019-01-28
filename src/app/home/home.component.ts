import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  apod: Apod;
  constructor(private nasaApi: NasaApiService) { }

  ngOnInit() {
    //consumiendo del httpCliente de nasa-api
    this.nasaApi.getDATOSapod()
      .subscribe((data: Apod) => {
        this.apod = data; //acá el dato retornado ya no es un any sino de T Apod
      });
  }

}
