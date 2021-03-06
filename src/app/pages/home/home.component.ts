import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeService]
})

export class HomeComponent implements OnInit {

    public arrayDatosPhotos: Array<any>;

    constructor(
        private _homeService: HomeService,
    ) { 
        this.arrayDatosPhotos = [];
    }

    ngOnInit(): void {
        this._homeService.getDataPhotos().subscribe(
            response => {
                //Limito los datos recibidos en la respuesta a los 100 primeros
                this.arrayDatosPhotos = response.slice(0, 100);
            },
            error => {
                console.log('Error ' + JSON.stringify(error));                
            }
        )
    }

    
}