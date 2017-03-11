import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { UniversalModule } from 'angular2-universal';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideosRoutingModule } from './videos-routing.module';

@NgModule({
    imports: [
        UniversalModule,
        CommonModule,
        VideosRoutingModule,
        FormsModule
    ]
    ,
declarations: [
    VideoListComponent,
    VideoDetailsComponent
]//,     exports: [RouterModule]
})
export class VideosModule {
}