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
  imgUrl = 'https://picsum.photos/id/237/500/500';

  getName(): string {
    return this.name;
  }


  changeImage(event: KeyboardEvent) {
    this.imgUrl = (event.target as HTMLInputElement).value;
  }
}
