import { Component, Input, OnChanges } from "@angular/core";
import { AuthService } from "../../user/auth.service";
import { ISession } from "../shared/index";
import { VoterService } from "./voter.service";

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions:ISession[];
    @Input() filterByInp:string;
    @Input() sortByInp: string;
    @Input() eventId: number;

    visibleSessions:ISession[] = [];

    constructor ( public auth: AuthService, private voterService: VoterService ){
        
    }

    ngOnChanges(){
        if(this.sessions){
            this.filterSessions(this.filterByInp);
            this.sortByInp === 'name' 
            ? this.visibleSessions.sort(sortByNameAsc) 
            : this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    toggleVote(session: ISession){
        if(this.userHasVoted(session)){
            this.voterService.deleteVote(this.eventId, session, this.auth.currentUser.userName);
        }else{
            this.voterService.addVote(this.eventId, session, this.auth.currentUser.userName);
        }
        if(this.sortByInp == 'votes')
            this.visibleSessions.sort(sortByVotesDesc);
    }

    userHasVoted(session: ISession){
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }

    filterSessions(filter:string){
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0);
        }else{
            this.visibleSessions = this.sessions.filter( s => {
                return s.level.toLocaleLowerCase() === filter;
            })
        }
    }    
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if(s1.name > s2.name) return 1
    else if(s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}