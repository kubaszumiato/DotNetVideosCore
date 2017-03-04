import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { RouterModule } from '@angular/router';

import { UniversalModule } from 'angular2-universal';
import {VideoListComponent} from './video-list/video-list.component';

@NgModule({
declarations: [
    VideoListComponent
],
    imports: [
        UniversalModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'video-list', component: VideoListComponent}
        ])
    ],
    exports: [RouterModule],
    entryComponents: [VideoListComponent]
})
export class VideosModule {
}