import { Component } from "@angular/core";



/**
 * The root component of the application.
 */
@Component({
  selector: 'app-root',
  // template: '<p>My App</p>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles:[]
})
export class AppComponent {
  /**
   * The name of the application.
   */
  name = 'Angular';

  /**
   * The URL of the image.
   */
  imgUrl = 'https://picsum.photos/id/237/500/500';

  /**
   * Returns the name of the application.
   * @returns The name of the application.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Changes the image URL based on the input value.
   * @param event - The keyboard event.
   */
  changeImage(event: KeyboardEvent) {
    this.imgUrl = (event.target as HTMLInputElement).value;
  }
}
