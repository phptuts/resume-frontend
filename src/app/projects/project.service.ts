import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ProjectPage } from "../shared/models";
import { PageService } from "../shared/page.service";

@Injectable()
export class ProjectService implements PageService {

	private projectPage: ProjectPage = {
		pageName: 'project_page',
		title: 'Project Page',
		description: `<p>Thank you for visiting my website.  I am programmer that enjoys building cool projects for the web and physical world.  I also love to share knowledge with people.</p>`,
		createAt: new Date(),
		updatedAt: new Date(),
		imageUrl: 'https://s3-us-west-2.amazonaws.com/noahglaser.net/94689d4c8c9905b1bba3ab65d596e086.jpg',
		projects: [
			{
				name: 'Project Name 1',
				description: `<p>Thank you for visiting my website.  I am programmer that enjoys building cool projects for the web and physical world.  I also love to share knowledge with people.</p>`,
				imageUrl: 'https://s3-us-west-2.amazonaws.com/noahglaser.net/94689d4c8c9905b1bba3ab65d596e086.jpg',
				codeUrl: 'www.google.com',
				website: 'www.yahoo.com',
			},
			{
				name: 'Project Name 2',
				description: `<p>Thank you for visiting my website.  I am programmer that enjoys building cool projects for the web and physical world.  I also love to share knowledge with people.</p>`,
				imageUrl: 'https://s3-us-west-2.amazonaws.com/noahglaser.net/94689d4c8c9905b1bba3ab65d596e086.jpg',
				codeUrl: 'www.google.com',
				website: 'www.yahoo.com',
			}
		]
	};

	public getPage() {
		return Observable.of( this.projectPage );
	}
}