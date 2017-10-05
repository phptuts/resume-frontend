import { Component } from '@angular/core';
import { HomeService } from "./home.service";

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ],
	providers: [ HomeService ]
} )
export class HomeComponent {
	constructor(public pageService: HomeService) {}


}
