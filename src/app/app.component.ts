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
  name: string = 'Angular';

  /**
   * The URL of the image.
   */
  imgUrl: string = 'https://picsum.photos/id/237/500/500';

  imgs: string[] = ['https://picsum.photos/id/237/500/500', 'https://picsum.photos/id/237/500/500', 'https://picsum.photos/id/237/500/500'];

  currentDate: Date = new Date();
  cost: number = 2000;
  temprature = 26.3;

  pizza = {
    toppings: ['cheese', 'pepperoni', 'pineapple', 'sausage'],
    size: 'large'
  }

  blueClass: boolean = false;
  fontSize: number = 16;

  buttonStyles = {
    'background-color': 'red',
    'color': 'white',
  };
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

  /**
   * Logs the given event to the console.
   *
   * @param event - The event to be logged.
   */
  logImg(event: string) {
    console.log(event);
  }
}
