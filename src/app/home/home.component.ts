import { Component, Inject } from '@angular/core';
import { HomeService } from "./home.service";
import { PageService } from "../shared/page.service";

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ],
	providers: [ HomeService ]
} )
export class HomeComponent {
	constructor(@Inject(HomeService) public pageService: PageService) { }
}
