import { NgModule } from '@angular/core';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import {LoginModule} from './login/login.module';
import { DetailNewsModule } from './news/detailnews/detailnews.module';
import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';
@NgModule({
    declarations: [],
    imports: [
        LoginModule,
        HomeModule,
        ContactModule,
        NewsModule,
        DetailNewsModule,
        UsersModule,
    ],
    exports: [
        LoginModule,
        HomeModule,
        ContactModule,
        NewsModule,
        DetailNewsModule,
        UsersModule
    ],
    providers: []
})

export class PagesModule {}