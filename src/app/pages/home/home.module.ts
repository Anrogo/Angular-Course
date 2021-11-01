import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [ 
        CommonModule,
        NavbarModule,
        RouterModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule {

}