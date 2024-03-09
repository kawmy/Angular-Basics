import { Component } from "@angular/core";



@Component({
  selector: 'app-root',
  // template: '<p>My App</p>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles:[]
})
export class AppComponent {
  name = 'Angular';

  getName(): string {
    return this.name;
  }
}
