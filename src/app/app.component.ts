import { Component } from '@angular/core';
import { LikedChangedEventArgs } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //we can apply style by an external file : styleUrls, by a styles component here or by applying a style balise in html
  //the styles will be applyed in order and will ignore all the styles before the last one, so we need to pick one approach
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'title';
  post = {
    title: 'Title',
    isLiked: true,
  };
  onLikedChanged(eventArgs: LikedChangedEventArgs) {
    console.log('Liked changed', eventArgs);
  }
  tweet = {
    body: 'body of the tweet.',
    isLoved: false,
    likesCount: 0,
  };
  courses = [1, 2];
  viewMode = 'map';

  courses2 = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  onAdd() {
    this.courses2.push({ id: 4, name: 'course4' });
  }

  onRemove(course) {
    let index = this.courses2.indexOf(course);
    this.courses2.splice(index, 1);
  }

  courses3;

  loadCourses() {
    this.courses3 = [
      //by default angular track object by identity
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }
  trackCourse(index, course){
    return course ? course.id : undefined;
  }

}
