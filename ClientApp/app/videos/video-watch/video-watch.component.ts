import {Component, Injectable, Input, OnInit} from '@angular/core';
import {IVideo, VideoDisplayMode, VideoOriginEnum} from '../video/video.interfaces';
import {VideoVimeoComponent} from '../video-vimeo/video-vimeo.component';
import {VideoYouTubeComponent} from '../video-youtube/video-youtube.component';
import {} from '../video/video.interfaces'

@Component(
    {
        selector: 'video-watch',
        template: require('./video-watch.component.html')
    })


export class VideoWatchComponent {
    videoDetails: IVideo;
    videoOrigins = VideoOriginEnum;
    displayMode: string;
    @Input() video: IVideo;

    constructor(){}      
}