import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
    declarations: [NewsComponent],
    imports: [ 
        CommonModule,
        RouterModule,
        NavbarModule
    ],
    exports: [ NewsComponent ],
    providers: [],
})
export class NewsModule {}