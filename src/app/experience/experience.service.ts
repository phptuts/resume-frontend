import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ExperiencePage } from "../shared/models";
import { PageService } from "../shared/page.service";

@Injectable()
export class ExperienceService implements PageService {

  private experience: ExperiencePage = {
    pageName: 'experience_page',
    title: 'Experience',
    description: `Aenean vel enim risus. Integer efficitur volutpat mauris ac hendrerit. Duis imperdiet vitae dolor sit amet auctor. Aenean a ultricies dolor, non tristique tortor. Integer tincidunt a lectus id blandit. Donec porttitor malesuada lorem id interdum. Ut quis maximus mauris. Donec in arcu eu sapien convallis convallis. Ut eu sollicitudin purus, et suscipit mi. Ut justo tellus, vulputate ut risus sit amet, gravida imperdiet tellus. Nullam suscipit tempus semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in odio auctor, lobortis ligula eget, sodales felis. Nullam iaculis lacus nisi, et tincidunt arcu vulputate eget. Maecenas arcu purus, pellentesque et dolor quis, scelerisque tincidunt mauris. Maecenas sit amet rutrum quam, id efficitur lacus.`,
    createAt: new Date(),
    updatedAt: new Date(),
    jobs: [
      {
        id: '333',
        position: 'Senior Engineer',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae nisi et sem mattis bibendum ut eu est. Etiam a tellus eget purus faucibus pellentesque quis in turpis. Donec feugiat sodales nulla, ut dictum tortor hendrerit eget. Donec eleifend nisi in lectus euismod gravida sed eu nibh. Sed at lacus turpis. Fusce sed lacus massa. In et tellus in tortor porttitor pulvinar. Sed ut aliquet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed bibendum interdum nisi, eget luctus quam sollicitudin id.`,
        startDate: '09/13',
        endDate: '09/15'
      },
      {
        id: '334343',
        position: 'Senior Engineer',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae nisi et sem mattis bibendum ut eu est. Etiam a tellus eget purus faucibus pellentesque quis in turpis. Donec feugiat sodales nulla, ut dictum tortor hendrerit eget. Donec eleifend nisi in lectus euismod gravida sed eu nibh. Sed at lacus turpis. Fusce sed lacus massa. In et tellus in tortor porttitor pulvinar. Sed ut aliquet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed bibendum interdum nisi, eget luctus quam sollicitudin id.`,
        startDate: '09/15',
        endDate: '09/17'
      },
    ]
  };

  public getPage() {
      return Observable.of(this.experience);
  }
}