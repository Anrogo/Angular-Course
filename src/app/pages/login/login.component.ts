import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})

export class LoginComponent implements OnInit, OnDestroy {

    constructor(){}
    
    ngOnInit(): void {
        //Al acceder al componente la primera vez
        console.log('El componente se ha iniciado');
    }
    
    ngOnDestroy(): void {
        //Al cerrar o cambiar de componente
        console.log('El componente se ha cerrado');
    }

}