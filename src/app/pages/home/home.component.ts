import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from 'src/app/models/contactForm';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeService]
})

export class HomeComponent implements OnInit {

    ContactModel = new ContactForm();

    constructor(
        private _homeService: HomeService,
    ) { }

    ngOnInit(): void { }

    onSubmit(f: NgForm): void {
        this._homeService.sendFormContact(f);
        f.reset();
    }
}