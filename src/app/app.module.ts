import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

/**
 * The root module of the application.
 *
 * @remarks
 * This module is responsible for importing the necessary dependencies, declaring the components, and bootstrapping the application.
 */
@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PostComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {

}
