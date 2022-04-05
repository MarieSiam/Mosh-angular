import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  isLiked= false;



  constructor() { }

  ngOnInit(){
  }
onClick(){
  this.isLiked=!this.isLiked;
}
}
