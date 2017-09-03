import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { VideoListComponent,
        VideoDetailsComponent,
        VideoDisplayComponent,
        VideoWatchComponent,
        VideoVimeoComponent,
        VideoYouTubeComponent } from './video/videos.components';
import { VideosRoutingModule } from './videos-routing.module';
import { VideoService, oEmbedService } from './video/video.services';
import { SafePipe } from '../pipes/safe.html.pipe';
import { EnumKeysPipe } from '../pipes/enum.keys.pipe';

@NgModule({
    imports: [
        CommonModule,
        VideosRoutingModule,
        FormsModule
    ]
    ,
declarations: [
    SafePipe, EnumKeysPipe,
    VideoListComponent,
    VideoDetailsComponent,
    VideoDisplayComponent,
    VideoWatchComponent,
    VideoYouTubeComponent,
    VideoVimeoComponent
],
providers: [VideoService, oEmbedService]
})
export class VideosModule {
}