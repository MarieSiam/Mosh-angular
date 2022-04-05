import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onKeyUp(movie){
    let movieTitle = movie.toLowerCase().split(" ");
    movieTitle[0] = movieTitle[0][0].toUpperCase() + movieTitle[0].slice(1);
    for (let index = 1; index < movieTitle.length; index++) {
      if(movieTitle[index] != "the" && movieTitle[index] != "of"){
      movieTitle[index] = movieTitle[index][0].toUpperCase() + movieTitle[index].slice(1);
      }
    }
    return movieTitle.join(" ");
  }
}
