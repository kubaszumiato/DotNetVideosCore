import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './app/app.component'
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetchdata/fetchdata.component';
import { CounterComponent } from './counter/counter.component';
import { VideoListComponent } from './video/video-list/video-list.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'video-list', component: VideoListComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
