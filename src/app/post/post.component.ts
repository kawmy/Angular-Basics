import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

/**
 * Represents a component for displaying a post.
 */
export class PostComponent {

  /**
   * The URL of the post image.
   * In this specific line, @Input('img') postImgUrl = '';,
   *  the postImgUrl property in the PostComponent is being declared as an input property.
   *  The 'img' string passed to the @Input() decorator is an alias.
   *  This means that when you use this component in a parent component's template, you'll bind to this property using the name 'img' instead of 'postImgUrl'.
   * @remarks This property is decorated with `@Input('img')` to allow binding the value from the parent component.
   */
  @Input('img') postImgUrl = '';
}
