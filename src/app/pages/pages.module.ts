import { NgModule } from '@angular/core';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import {LoginModule} from './login/login.module';
import { DetailNewsModule } from './news/detailnews/detailnews.module';
import { NewsModule } from './news/news.module';
@NgModule({
    declarations: [],
    imports: [
        LoginModule,
        HomeModule,
        ContactModule,
        NewsModule,
        DetailNewsModule
    ],
    exports: [
        LoginModule,
        HomeModule,
        ContactModule,
        NewsModule,
        DetailNewsModule
    ],
    providers: []
})

export class PagesModule {}