import { ReverseStr } from './../../pipes/reverse.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CardModule } from 'src/app/components/card/card.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    CardModule,
    FormsModule
  ],
  exports: [LoginComponent],
  declarations: [
    LoginComponent,
    ReverseStr
  ],
  providers: [],
})
export class LoginModule {}
