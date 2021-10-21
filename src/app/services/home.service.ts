import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    public sendFormContact(form: any){
        console.log('El formulario ha sido enviado.');
        console.log(form);
    }
}