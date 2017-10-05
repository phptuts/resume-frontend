import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {

  public collapse = true;

  public toggle() {
    this.collapse = !this.collapse;
  }

}
