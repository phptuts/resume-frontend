export interface Page {
	pageName: string;
	title: string;
	description: string;
	createAt: Date;
	updatedAt: Date;
}

export interface HomePage extends Page {
	imageUrl: string;
}

export interface ExperiencePage extends Page {
	jobs: Job[];
}

export interface Job {
	id: string;
	position: string;
	description: string;
	startDate: string;
	endDate: string;
}

export interface ProjectPage extends Page {
	projects: Project[];
	imageUrl: string;
}

export interface Project {
	name: string;
	description: string;
	imageUrl: string;
	codeUrl: string;
	website: string;
}