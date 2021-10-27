import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';
import { EventService } from './shared/event.service';

@Component({  
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail [event]="event"></event-thumbnail>
      </div>
    </div>

    </div>
  `
})
export class EventsListComponent implements OnInit{
    events: IEvent[]

    constructor ( private eventSerice: EventService, private route: ActivatedRoute  ){  
      
    }

    ngOnInit(){
      this.events = this.route.snapshot.data['events']
    }
}
