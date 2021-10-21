import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [HomeComponent],
    imports: [ 
        CommonModule,
        FormsModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule {

}