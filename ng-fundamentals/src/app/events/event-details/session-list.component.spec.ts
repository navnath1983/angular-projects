import { SessionListComponent } from "./session-list.component";
import { ISession } from "../shared/event.model";

describe('SessionListComponent', ()=> {
    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(()=> {
        component = new SessionListComponent(mockAuthService, mockVoterService);        
    })

    describe('ngOnchanges', ()=>{
        it('should filter the session correctly', ()=>{
            component.sessions = <ISession[]>[
                {name: 'Session 1', level: 'intermediate'},
                {name: 'Session 2', level: 'intermediate'},
                {name: 'Session 3', level: 'beginner'}
            ]
            component.filterByInp = 'intermediate';
            component.sortByInp = 'name';
            component.eventId = 3;
        
            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(2);
        })

        it('should sort the session correctly', ()=>{
            component.sessions = <ISession[]>[
                {name: 'Session 1', level: 'intermediate'},
                {name: 'Session 3', level: 'beginner'},
                {name: 'Session 2', level: 'intermediate'}
            ]
            component.filterByInp = 'all';
            component.sortByInp = 'name';
            component.eventId = 3;
        
            component.ngOnChanges();

            expect(component.visibleSessions[2].name).toBe("Session 3");
        })
    })
})