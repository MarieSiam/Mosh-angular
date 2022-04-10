import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors.component';
import { AuthorService } from './author.service';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star/star.component';
import { MovieComponent } from './movie/movie.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { HeartComponent } from './heart/heart.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorComponent,
    AuthorsComponent,
    SummaryPipe,
    StarComponent,
    MovieComponent,
    TitleCasePipe,
    PanelComponent,
    HeartComponent,
    ZippyComponent,
    ContactFormComponent,
    CoursesFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
