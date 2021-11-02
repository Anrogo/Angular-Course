import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [HomeService]
})
export class UserDetailsComponent implements OnInit {

  public sub: any;
  public id: any;
  user!: User;

  constructor(
    private _homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.id = 0;
  }

  ngOnInit(): void {
    user: User;
    //Nos suscribimos a un observable que estará escuchando todo el rato
    this.sub = this.route.paramMap.subscribe(parms => {
      console.log('ID usuario: ' + parms.get('id'));
      this.id = parms.get('id');
      this._homeService.getDataUsers().subscribe(
        response => {
          this.user = new User(
            response[this.id-1].id,
            response[this.id-1].name,
            response[this.id-1].username,
            response[this.id-1].email,
            response[this.id-1].address,
            response[this.id-1].phone,
            response[this.id-1].website,
            response[this.id-1].company
           );
          console.log(response[this.id-1].name);
        },
        error => {
          console.log('Error ' + JSON.stringify(error));
        }
      )
    });
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goToUserEdit(id: number): void {
    this.router.navigate(['/user-edit', id]);
  }

}
