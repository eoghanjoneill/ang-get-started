import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'inv-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']  
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(e: MouseEvent) {
    //clientX: number, clientY: number
    this.ratingClicked.emit(`clicked here: x= ${e.clientX}, y= ${e.clientY}`);
    // this.notify.emit(e.toString());
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  } 
}