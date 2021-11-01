import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaService } from 'src/app/services/prueba.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PruebaService]
})

export class LoginComponent implements OnInit, OnDestroy {

    public title: string;
    public titleLogin: boolean;
    public msgUsuario: string;

    public usuario: string;
    public password: string;
    public validatePass: boolean;

    public arrayCars: Array<string>;

    public dataCurrency: number = 456;
    public dataDate = new Date(1991, 3, 29);
    public dataDecimal: any = 456.5456;
    public dataJson = {foo: 'foo', goo: {too: 'too'}};
    public dataString: string = 'Prueba';
    public dataPercent: number = 456;
    public dataSlice: Array<number> = [1, 2, 3, 4, 5, 6];

    public entorno: string = environment.API_KEY;

    constructor(
        private pruebaService: PruebaService,
        private router: Router,
    ){
        this.title = 'Este es nuestro login';
        this.titleLogin = true;
        this.msgUsuario = '';
        this.usuario = '';
        this.password = '';
        this.validatePass = false;
        this.arrayCars = ['Ferrari', 'Seat', 'Peugeot', 'Renault', 'Ford', 'Hyundai']
    }
    
    ngOnInit(): void {
        //Al acceder al componente la primera vez
        console.log('El componente se ha iniciado');
        this.getUsersService();
    }
    
    ngOnDestroy(): void {
        //Al cerrar o cambiar de componente
        console.log('El componente se ha cerrado');
    }

    public sendLogin():void {
        if(this.password.length > 5){
            this.validatePass = false;
        } else {
            this.validatePass = true;
        }
    }

    public validateEmail(event:any):void {
        const valueInput:string = event.target.value;
        this.msgUsuario = valueInput.trim();
    }

    public getUsersService():void{
        //console.log('Usuarios: ' + JSON.stringify(this.pruebaService.getUsers()));
    }

    public goToContact(): void {
        this.router.navigate(['/contact']);
    }

}