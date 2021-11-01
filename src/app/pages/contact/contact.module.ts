import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ContactComponent],
    imports: [ 
        CommonModule,
        FormsModule,
        RouterModule,
        NavbarModule
     ],
    exports: [ContactComponent],
    providers: [],
})
export class ContactModule {}