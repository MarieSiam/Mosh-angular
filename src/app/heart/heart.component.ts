import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {

  @Input() isLoved=false;
  @Output() click= new EventEmitter();
  @Input() likesCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.isLoved) this.likesCount--;
    else this.likesCount++;
    
    this.isLoved=!this.isLoved;
    
    
  }
}
