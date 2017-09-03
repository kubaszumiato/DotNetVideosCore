import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
    VideoDetailsComponent, 
    VideoListComponent,
    VideoDisplayComponent } from './video/videos.components';

const routes: Routes = [
    { path: '', redirectTo: 'video-list', pathMatch: 'full' },  
    { path: 'video-list', component: VideoListComponent },
    { path: 'video-details', component: VideoDetailsComponent },
    { path: 'video-details/:id', component: VideoDetailsComponent },
    { path: 'video-display/:id', component: VideoDisplayComponent }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    
})

export class VideosRoutingModule {}