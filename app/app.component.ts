import { Component } from '@angular/core';
import { EventService } from './events/event.service';
/*
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService] // add HTTP_PROVIDERS
})
export class AppComponent {
  title = 'LocalEvent App!';
}
