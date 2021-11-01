import { ReverseStr } from './../../pipes/reverse.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CardModule } from 'src/app/components/card/card.module';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    CardModule,
    FormsModule,
    RouterModule,
    NavbarModule
  ],
  exports: [LoginComponent],
  declarations: [
    LoginComponent,
    ReverseStr
  ],
  providers: [],
})
export class LoginModule {}
