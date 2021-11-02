import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  public sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(parms => {
      console.log('El id del usuario a eliminar es ' + parms.get('id'));
  });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
