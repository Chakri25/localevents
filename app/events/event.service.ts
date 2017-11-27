import { Injectable } from '@angular/core';
import { IEvent } from './events';

@Injectable()
export class EventService {

	getEvents(): IEvent[] {
		return [
		{
			"name": "Event-1",
			"code": "Evt100",
			"description": "the first event",
			"date": "2016.01.01",
			"time": "12:00",
			"duration": "1 Hour",
			"fee": 1,
			"rating": 3,
			"imageURL": 'Book.jpg',
			"capacity": 100
			},
			{
			"name": "Event-1",
			"code": "Evt100",
			"description": "the first event",
			"date": "2016.01.01",
			"time": "12:00",
			"duration": "1 Hour",
			"fee": 1,
			"rating": 2,
			"imageURL": 'Book.jpg',
			"capacity": 100
			},
			{
			"name": "Event-1",
			"code": "Evt100",
			"description": "the first event",
			"date": "2016.01.01",
			"time": "11:00",
			"duration": "1 Hour",
			"fee": 1,
			"rating": 4,
			"imageURL": 'Book.jpg',
			"capacity": 100
			}

		];

	}

}