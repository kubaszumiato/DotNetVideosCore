import {Component, Injectable, Input, OnInit, OnChanges, SimpleChange} from '@angular/core';
import {VideoService, oEmbedService, VideoValidationService} from '../video/video.services';
import { IVideo, VideoDisplayMode, VideoOriginEnum, oEmbed } from '../video/video.interfaces';

@Component(
    {
        selector: 'video-youtube',
        providers: [VideoService, VideoValidationService],
        template: require('./video-youtube.component.html')
    })


export class VideoYouTubeComponent implements OnInit {
    private preview: oEmbed;
    
    @Input() video : IVideo;
    changeLog: string [] = [];

    ngOnChanges (changes: {[propKey: string]: SimpleChange}) {
        let changedProp = changes['video'];
        if (changedProp.currentValue === undefined){
            console.log("video set to undefined");
        }
        else if (this.preview === undefined){
            this.previewVideo(this.video.url, this.video.videoOrigin.toString());            
        }
    }
    ngOnInit(): void {
    }  
    constructor(private oEmbedService: oEmbedService){

        console.log ("constructor");
        // this.previewVideo(this.video.url, this.video.videoOrigin.toString() );
    }
    previewVideo(url : string, providerName: string){
        console.log("Preview video, url= " + url + ", provider=" + providerName);
        if (url === undefined || url === "") {
            return;
        }
        this.video.url = url;
        this.oEmbedService.checkVideoOEmbed(url)
        
        .subscribe(res => {
            this.preview = res;
            this.video.thumbUrl = res.thumbnail_url as string;
            this.video.originalTitle = res.title as string;
            this.video.originalDescription = res.description as string;
            console.log(this.preview);
            },
            err => {
                console.log(err);
            }
        );
    }
}