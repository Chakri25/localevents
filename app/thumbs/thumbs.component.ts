import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'thumbs',
	templateUrl: './thumb.component.html',
	//styleUrls: ['./thumb.component.css']
})
export class ThumbComponent {
	//rating: number = 4; //this is hardcoded
	//to use the input from the event-list component 
	//which parent for the thumbe component, we need 
	//to declare this as input parameter.
	@Input() rating: number;
	thumbWidth: number;
	@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
	ngOnChanges(): void{
		this.thumbWidth = this.rating;
	}

	onClick(){
		this.ratingClicked.emit('the rating '+this.rating+' was clicked');
	}
}