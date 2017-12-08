import { Http } from '@angular/http';

import {Component, Injectable, OnInit} from '@angular/core';
// import {NgFor} from '@angular/common';
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

 // styleUrls: ['./video-list.component.css']
  

export class VideoListComponent implements OnInit {
    ngOnInit(): void { 
        this.videos = this.videoService.GetVideos();
    }

    //value used with custom icons demo above
    private rateValueExample1:number = 5;
    //value used with custom icons demo above
    private rateValueExample2:number = 2;
    //the maximum allowed value
    private maxRateValue:number = 10;
    //contains the current value entred by the user
    private currentRate:number = 7;
    //make the rating component readonly
    private isRatingReadonly:boolean = false;
    private overStar:number | any;
    private ratingPercent:number;

    private ratingStatesItems:any = [
        {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-star-empty'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'}
    ];
    //reset the rating value to null
    private resetRatingStar() {
        this.overStar = null;
    }
    //call this method when over a star
    private overStarDoSomething(value:number):void {
        this.overStar = value;
        this.ratingPercent = 100 * (value / this.maxRateValue);
    };

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