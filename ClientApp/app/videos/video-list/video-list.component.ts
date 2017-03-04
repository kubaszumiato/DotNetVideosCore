//ng2
import {Component, Injectable, OnInit} from '@angular/core'; //View
import {NgFor} from '@angular/common';
import {Router} from '@angular/router';

//import {VideoService} from '../video/video.services';
import {IVideo} from '../video/video.interfaces';
//import {VideoDetailsComponent} from '../video-details/video-details.component';
@Component(
    {
        selector: 'video-list',
        //providers: [... HTTP_PROVIDERS, VideoService, VideoDetailsComponent],
        //directives: [VideoDetailsComponent],
        template: require('./video-list.component.html')
    })
//implements OnInit 
export class VideoListComponent {
    // ngOnInit(): void { }
    public videos: Array<IVideo> = [];
    public selectedVideo: IVideo;
    

    constructor(
        private _router: Router//,
      //  private _videoService: VideoService
        ) { 
            
            // this._videoService.getVideos()
            // .subscribe(
            // res => this.videos.push(res),
            // error => console.log(error)
            // );
        }

    //from-code approach
    onVideoSelected(selection: IVideo) {
        this.selectedVideo = selection;
        console.log('selected video with id: ' + selection.id);
        this._router.navigate(['Video', { mode: 'watch', id: selection.id }]);
    }


}