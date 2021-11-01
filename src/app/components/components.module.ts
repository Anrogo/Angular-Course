import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        NavbarModule
    ],
    exports: [
        CardModule,
        NavbarModule
    ],
    declarations: [],
    providers: [],
})
export class ComponentsModule { }
