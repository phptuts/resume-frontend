import { Component } from '@angular/core';
import { ExperienceService } from "./experience.service";


@Component( {
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: [ './experience.component.css' ],
	providers: [ ExperienceService ]
} )
export class ExperienceComponent  {
	constructor(public pageService: ExperienceService) { }
}
