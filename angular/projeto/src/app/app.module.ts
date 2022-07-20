import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourselistComponent } from './course/courselist.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CourselistComponent,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
