import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Params } from '@angular/router';

//mine
import { VideoService } from '../video/video.services';
import { IVideo, VideoOriginEnum } from '../video/video.interfaces';

import { VideoVimeoComponent } from '../video/videos.components';

@Component({
  selector: 'video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css']
})

export class VideoDisplayComponent implements OnInit {

  videoOrigins = VideoOriginEnum;
  private video: IVideo;
  constructor(private route: ActivatedRoute,
    private videoService: VideoService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.videoService.GetVideo(params['id']))
      .subscribe((video: IVideo) => {
        this.video = video;
      });
  }

}


// import {Component, Injectable, Input, OnInit} from '@angular/core';
// import {RouteParams} from 'angular2/router';
// import {EnumKeysPipe} from '../../shared/pipes/enum.keys.pipe';
// import {VideoService, VideoValidationService} from '../video/video.services';
// import {IVideo, VideoDisplayMode, VideoOriginEnum} from '../../../../shared/data-models/video.model.interfaces';
// 
// import {VideoYouTubeComponent} from '../video-youtube/video-youtube.component';


// @Component(
//     {
//         directives: [VideoVimeoComponent, VideoYouTubeComponent],
//         selector: 'video-watch',
//         pipes: [EnumKeysPipe],
//         providers: [VideoService, VideoValidationService],
//         template: require('./video-watch.component.html')
//     })


// export class VideoWatchComponent {
//     videoDetails: IVideo;
//     videoOrigins = VideoOriginEnum;
//     displayMode: string;
//     @Input()
//     video: IVideo;

//     constructor(){}      
// }