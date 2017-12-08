import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';

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
import { RatingComponent } from './rating/rating.component';

@NgModule({
    imports: [
        CommonModule,
        VideosRoutingModule,
        FormsModule,
        ReactiveFormsModule, 
        StarRatingModule.forRoot()
    ]
    , exports: [
        VideoListComponent
    ]
    ,
declarations: [
    SafePipe, EnumKeysPipe,
    VideoListComponent,
    VideoDetailsComponent,
    VideoDisplayComponent,
    VideoWatchComponent,
    VideoYouTubeComponent,
    VideoVimeoComponent,
    RatingComponent
],
providers: [VideoService, oEmbedService]
})
export class VideosModule {
}