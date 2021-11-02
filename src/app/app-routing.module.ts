import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailNewsComponent } from './pages/news/detailnews/detailnews.component';
import { NewsComponent } from './pages/news/news.component';
import { UserDeleteComponent } from './pages/users/user-delete/user-delete.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: NewsComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'detailnews/:id',
        component: DetailNewsComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent
  },
  {
    path: 'user-delete/:id',
    component: UserDeleteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
