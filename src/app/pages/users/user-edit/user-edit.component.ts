import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(parms => {
      console.log('El id del usuario que vamos a editar es ' + parms.get('id'));
  });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
