import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'event-list',
	templateUrl: './event-list.component.html',
})

export class EventListComponent implements OnInit{
	pageTitle: string = 'Event List';
	showImageButton = "Hide Image";
	showImage: boolean = true;
	searchCriteria: string = 'beach';
	events: any[] = [{
			"name": "Event-1",
			"code": "Evt100",
			"description": "the first event",
			"date": "2016.01.01",
			"duration": "1 Hour",
			"fee": 1,
			"rating": 3,
			"imageURL": 'Book.jpg',
			"location": {
				"streetAddr": "101 main st",
				"city": "los angeles",
				"state": "CA",
				"zip": "34324",
				"lon": 0,
				"lat": 0
			},
			"capacity": 100
	},
	{
			"name": "Event-1",
			"code": "Evt100",
			"description": "the first event",
			"date": "2016.01.01",
			"duration": "1 Hour",
			"fee": 1,
			"rating": 2,
			"imageURL": 'Book.jpg',
			"location": {
				"streetAddr": "101 main st",
				"city": "los angeles",
				"state": "CA",
				"zip": "34324",
				"lon": 0,
				"lat": 0
			},
			"capacity": 100
	},
	{
			"name": "Event-1",
			"code": "Evt100",
			"description": "the first event",
			"date": "2016.01.01",
			"duration": "1 Hour",
			"fee": 1,
			"rating": 4,
			"imageURL": 'Book.jpg',
			"location": {
				"streetAddr": "101 main st",
				"city": "los angeles",
				"state": "CA",
				"zip": "34324",
				"lon": 0,
				"lat": 0
			},
			"capacity": 100
	}

	];

	toggleImage(): void {
		this.showImage = !this.showImage;
		if(this.showImage == false)
			this.showImageButton = "Show Image";
		else
			this.showImageButton = "Hide Image";
	}

	ngOnInit(): void{
		console.log('In ngOnInit');
	}
}