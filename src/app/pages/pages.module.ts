import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import {LoginModule} from './login/login.module';
@NgModule({
    declarations: [],
    imports: [
        LoginModule,
        HomeModule
    ],
    exports: [
        LoginModule,
        HomeModule
    ],
    providers: []
})

export class PagesModule {}