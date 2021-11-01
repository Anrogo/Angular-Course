import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'detail-news',
    templateUrl: './detailnews.component.html',
    styleUrls: ['./detailnews.component.css']
})

export class DetailNewsComponent implements OnInit {

    public sub: any;    

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() { 
        
        //Nos suscribimos a un observable que estará escuchando todo el rato
        this.sub = this.route.paramMap.subscribe(parms => {
            console.log('El id de la noticia es ' + parms.get('id'));
        });
    }

    ngOnDestroy() {
        //Quitamos las suscripción a ese observable
        this.sub.unsubscribe();
    }
}