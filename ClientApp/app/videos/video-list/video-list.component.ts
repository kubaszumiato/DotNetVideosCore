import { Http } from '@angular/http';

import {Component, Injectable, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {Router} from '@angular/router';

import {VideoService} from '../video/video.services';
import {oEmbedService} from '../video-oembed/video-oembed.service';
import { IVideo } from '../video/video.interfaces';
import { Observable } from "rxjs/Observable";

@Component(
    {
        selector: 'video-list',
        templateUrl: './video-list.component.html',
        styleUrls: ['./video-list.component.css']
    })

export class VideoListComponent implements OnInit {
    ngOnInit(): void { 
        this.videos = this.videoService.GetVideos();
    }

    public selectedVideo: IVideo;
    public videos: Observable<IVideo>;

    constructor(private http: Http,
                private router : Router, 
                private videoService: VideoService, 
                private oembedService: oEmbedService) {
    }

    //from-code approach
    onVideoSelected(videoId: string) {
        
        console.log('selected video with id: ' + videoId);
        
        this.router.navigate(['/video-display/', videoId])
            .then(_ => console.log('navigated to video with id: ' + videoId));

    }
}