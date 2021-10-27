import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'

import { 
    EventDetailsComponet,
    EventsListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    EventListResolver,
    EventResolver
} from './events/index'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: [ 'canDeactivateCreateEvent' ] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponet, resolve: {event: EventResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { 
        path: 'user', 
        loadChildren: () => import('./user/user.module')
        .then( m => m.UserModule) 
    }
]
