import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './projects/project/project.component';


const appRoutes: Routes = [
	{ path: 'experience', component: ExperienceComponent },
	{
		path: 'projects', component: ProjectsComponent, children: [
		{ path: ':id', component: ProjectComponent }
	]
	},
	{ path: 'contact', component: ContactComponent },
	{ path: '', component: HomeComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule( {
	declarations: [
		AppComponent,
		NavComponent,
		HomeComponent,
		ExperienceComponent,
		ProjectsComponent,
		ContactComponent,
		NotFoundComponent,
		ProjectComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		NgbModule.forRoot()
	],
	providers: [
	],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
