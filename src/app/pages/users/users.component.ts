import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [HomeService]
})
export class UsersComponent implements OnInit {

  public arrayDataUsers: Array<any>;

  constructor(
    private _homeService: HomeService,
    private router: Router
  ) {
    this.arrayDataUsers = [];
  }

  ngOnInit(): void {
    this._homeService.getDataUsers().subscribe(
      response => {
        this.arrayDataUsers = response;
      },
      error => {
        console.log('Error ' + JSON.stringify(error));
      }
    )
  }

  public goToUserDetail(id: number): void {
    this.router.navigate(['/user-details/', id]);
  }

  public goToUserEdit(id: number): void {
    this.router.navigate(['/user-edit/', id]);
  }

  public goToUserDelete(id: number): void {
    this.router.navigate(['/user-delete/', id]);
  }
}
