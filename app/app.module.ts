import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { ThumbComponent } from './thumbs/thumbs.component';

//import { EventFilterPipe } from './events/event-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    ThumbComponent
    //EventFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
