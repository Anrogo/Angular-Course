import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

import { DetailNewsComponent } from './detailnews.component';

@NgModule({
    imports: [
        NavbarModule,
        RouterModule
    ],
    exports: [],
    declarations: [DetailNewsComponent],
    providers: [],
})
export class DetailNewsModule { }
