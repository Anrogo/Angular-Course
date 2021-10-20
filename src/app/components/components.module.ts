import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';

@NgModule({
    imports: [
        CommonModule,
        CardModule
    ],
    exports: [
        CardModule
    ],
    declarations: [],
    providers: [],
})
export class ComponentsModule { }
