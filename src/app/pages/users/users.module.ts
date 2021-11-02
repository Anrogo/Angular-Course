import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/components/card/card.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
    declarations: [UsersComponent, UserDetailsComponent, UserEditComponent, UserDeleteComponent],
    imports: [ 
        CommonModule,
        CardModule,
        RouterModule,
        NavbarModule
    ],
    exports: [UsersComponent],
    providers: [],
})
export class UsersModule {}