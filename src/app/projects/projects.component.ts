import { Component } from '@angular/core';
import { ProjectService } from "./project.service";

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: [ './projects.component.css' ],
	providers: [ ProjectService ]
})
export class ProjectsComponent {
	constructor(public pageService: ProjectService) {}
}
