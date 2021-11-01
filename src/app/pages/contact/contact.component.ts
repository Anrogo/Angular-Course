import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from 'src/app/models/contactForm';
import { HomeService } from 'src/app/services/home.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    providers: [HomeService]
})
export class ContactComponent implements OnInit {

    ContactModel = new ContactForm();

    listadoDatos = new Observable<Array<any>>();
    listadoDatosArray: Array<any>;

    asincroniaCallbacks = (list: any, callback: any) => {
        if(list instanceof Array && list.length > 0) {
            const suma = list.map(valor => Math.pow(valor, 2));
            return callback(null, suma);
        } else {
            const error = new Error('Error de ejecución...');
            return callback(error, null);
        }
    }

    asincroniaPromesa = (list: any) => {
        const promise = new Promise((resolve, reject) => {
            if(list instanceof Array && list.length > 0) {
                const suma = list.map(valor => Math.pow(valor, 2));
                resolve(suma);
            } else {
                const error = new Error('Error de ejecución...');
                reject(error);
            }
        });
        return promise;
    }

    
    constructor(
        private _homeService: HomeService,
        private router: Router
    ) {
        this.listadoDatosArray = [];
     }

    ngOnInit(): void {
        //this.asincroniaCallbacks([1,2,3,4,5], (error: any, result: any) => {(error) ? console.log(error) : console.log(result)});
        /*this.asincroniaPromesa([1,2,3,4,5])
            .then(result => console.log(result))
            .catch(error => console.log(error));
            */
        // Llamamos al observable
        this.listadoDatos = this._homeService.getDatos();
        // Nos suscribimos para que ver los cambios en el almacenamiento de datos (Array)
        this.listadoDatos.subscribe(datos => this.listadoDatosArray = datos);
    }

    onSubmit(f: NgForm): void {
        this._homeService.sendFormContact(f);
        f.reset();
    }

    public goToLogin(): void {
        this.router.navigate(['/login']);
    }
}
