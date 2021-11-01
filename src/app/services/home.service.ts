import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject} from 'rxjs';
import { AppEndPoints } from '../endpoints.component';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class HomeService {

    public arrayDatos: Array<any>;
    //Subject
    private listadoDatos$ = new Subject<Array<any>>(); 

    constructor(private _http: HttpClient){
        this.arrayDatos = [];   
    }

    public sendFormContact(form: any){
        console.log('El formulario ha sido enviado.');
        console.log(form);
    }

    //Comprobamos cuando ocurre algo en el evento
    agregarListado(elemento: string){
        this.arrayDatos.push(elemento);
        this.listadoDatos$.next(this.arrayDatos);
    }
    // Devolvemos los datos con los cambios en el observable
    getDatos(): Observable<any>{
        return this.listadoDatos$.asObservable();
    }
    
    public getDataPhotos(): Observable<any>{
        let url = AppEndPoints.ENDPOINTEJEMPLO;
        return this._http.get(url);
    }
}