import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoDetailsComponent, VideoListComponent } from './video/videos.components';

const routes: Routes = [
    { path: 'video-list', component: VideoListComponent },
    { path: 'video-details', component: VideoDetailsComponent },
    { path: 'video-details/:id', component: VideoDetailsComponent }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    
})

export class VideosRoutingModule {}