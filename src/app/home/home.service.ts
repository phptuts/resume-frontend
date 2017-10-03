
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HomePage } from "../shared/models";


@Injectable()
export class HomeService {

	private homePage: HomePage = {
		pageName: 'home_page',
		title: 'Noah\'s Awesome Website',
		description: `<p>Thank you for visiting my website.  I am programmer that enjoys building cool projects for the web and physical world.  I also love to share knowledge with people.</p>
<p>My mission right now is to start a free school to help people in underserved communities get a job in tech.  Right 
now I teach free classes at my local hackerspace and I run the Austin Arduino Meetup club.  I have been teaching free classes for over 3 years and I love it.</p>
<p>I have been very blessed in this life.  I am very thankful for everyone I have gotten to meet and for all the love 
that I have received.  Thank you for being a part of my life. :)</p>
`,
		imageUrl: 'https://s3-us-west-2.amazonaws.com/noahglaser.net/94689d4c8c9905b1bba3ab65d596e086.jpg',
		createAt: new Date(),
		updatedAt: new Date()
	};

	private subject = new BehaviorSubject<HomePage|undefined>(this.homePage);

	public page$ = this.subject.asObservable();
}