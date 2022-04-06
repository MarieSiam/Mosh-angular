import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  
  @Input('is-liked') isLiked=false;
  @Output() change= new EventEmitter();
  
  constructor() { }

  ngOnInit(){
  }
onClick(){
  this.isLiked=!this.isLiked;
  this.change.emit(this.isLiked);
  this.change.emit({ newValue: this.isLiked })
}
}
export interface LikedChangedEventArgs{
  newValue:boolean
}
