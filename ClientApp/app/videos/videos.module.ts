import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { RouterModule } from '@angular/router';

import { UniversalModule } from 'angular2-universal';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

@NgModule({
    imports: [
        UniversalModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'video-list', component: VideoListComponent},
            { path: 'video-details', component: VideoDetailsComponent},
            { path: 'video-details/:id', component: VideoDetailsComponent}

        ])
    ]
    ,
declarations: [
    VideoListComponent,
    VideoDetailsComponent
]//,     exports: [RouterModule]
})
export class VideosModule {
}