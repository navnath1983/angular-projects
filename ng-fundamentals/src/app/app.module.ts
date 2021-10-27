import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent} from './nav/navbar.component'
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent } from './common/index'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponet,
  CreateEventComponent,
  EventResolver,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './events/index'


@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponet,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    UpvoteComponent,
    SimpleModalComponent,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [ 
    EventService,
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    { 
      provide: JQ_TOKEN, useValue: jQuery
    },
    EventResolver,
    EventListResolver,
    VoterService,
    AuthService,
    { 
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
   ],
  bootstrap: [ EventsAppComponent ]
})
export class AppModule { }

export function checkDirtyState (component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}