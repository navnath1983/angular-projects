import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "../shared/index";

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding: 0 20px; }
        .event-image { height: 100px; }
        a { margin: 10px 0 0 0; cursor: pointer; }
    `]
})

export class EventDetailsComponet implements OnInit{
    event: IEvent
    addMode: boolean
    filterBy: string = 'all'
    sortBy:string = 'votes'

    constructor ( private eventService: EventService, private route: ActivatedRoute ){

    }

    ngOnInit(){
        this.route.data.forEach((data) => {
            this.event = data['event'];
                this.addMode = false;
        })
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map( s => s.id));

        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false
    }
}