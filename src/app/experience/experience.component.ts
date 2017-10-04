import { Component, Inject } from '@angular/core';
import { ExperienceService } from "./experience.service";
import { PageService } from "../shared/page.service";


@Component( {
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: [ './experience.component.css' ],
	providers: [ ExperienceService ]
} )
export class ExperienceComponent  {
	constructor(@Inject(ExperienceService) public pageService: PageService) { }
}
