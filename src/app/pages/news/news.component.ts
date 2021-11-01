import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-news',
    templateUrl: 'news.component.html',
    styleUrls: ['./news.component.css'],
    providers: [HomeService]
})

export class NewsComponent implements OnInit {
    public arrayDatosPhotos: Array<any>;

    constructor(
        private _homeService: HomeService,
        private router : Router
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

    public goToViewDetail(id: number): void {
        this.router.navigate(['/home/detailnews/', id]);
    }
}