import {
  Component, Input, EventEmitter, Output, OnInit,
  OnChanges, DoCheck,
  SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

/**
 * Represents a component for displaying a post.
 */
export class PostComponent implements OnInit, DoCheck, OnChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  /**
   * The URL of the post image.
   * In this specific line, @Input('img') postImgUrl = '';,
   *  the postImgUrl property in the PostComponent is being declared as an input property.
   *  The 'img' string passed to the @Input() decorator is an alias.
   *  This means that when you use this component in a parent component's template, you'll bind to this property using the name 'img' instead of 'postImgUrl'.
   * @remarks This property is decorated with `@Input('img')` to allow binding the value from the parent component.
   */
  @Input('img') postImgUrl: string = '';

  /**
   * Event emitter for when an image is selected.
   * @event imgSelected
   * @type {EventEmitter<string>}
   */
  @Output() imgSelected = new EventEmitter<string>();

  //lifeCycle Hooks
  constructor() {
    console.log('PostComponent created');
  }

  /**
   * Initializes the component.
   */
  ngOnInit(): void {
    console.log('PostComponent initialized');
  }

  /**
   * Performs change detection on the component.
   */
  ngDoCheck(): void {
    console.log('PostComponent checked');
  }

  /**
   * Called when the input properties of the component change.
   * @param changes - The changes object containing the updated values of the input properties.
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PostComponent changed', changes);
  }

  /**
   * Called after the content of the component is checked.
   */
  ngAfterContentChecked(): void {
    console.log('PostComponent content checked');
  }

  /**
   * Called after the content of the component is initialized.
   */
  ngAfterContentInit(): void {
    console.log('PostComponent content initialized');
  }

  /**
   * Called after the view of the component is checked.
   */
  ngAfterViewChecked(): void {
    console.log('PostComponent view checked');
  }

  /**
   * Called after the view of the component is initialized.
   */
  ngAfterViewInit(): void {
    console.log('PostComponent view initialized');
  }

  /**
   * Called when the component is about to be destroyed.
   */
  ngOnDestroy(): void {
    console.log('PostComponent destroyed');
  }
}
