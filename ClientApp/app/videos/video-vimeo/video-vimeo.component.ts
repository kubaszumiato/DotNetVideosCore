import {Component, Injectable, Input, OnInit, OnChanges, SimpleChange} from '@angular/core';
//import {RouteParams} from '@angular/router';
//import {EnumKeysPipe} from '../../pipes/enum.keys.pipe';
import {VideoService, oEmbedService, VideoValidationService} from '../video/video.services';
import { IVideo, VideoDisplayMode, VideoOriginEnum, oEmbed } from '../video/video.interfaces';

@Component(
    {
        selector: 'video-vimeo',
        providers: [VideoService, VideoValidationService],
        template: require('./video-vimeo.component.html')
    })


export class VideoVimeoComponent implements OnInit {
    //videoDetails: IVideo;
    //videoOrigins = VideoOriginEnum;
    displayMode: string;
   // iframeSource: string;
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
        console.log("hello from video-vimeo OnInit");
       // this.previewVideo(this.video.url, this.video.videoOrigin.toString() );
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

// // API:

// // https://developer.vimeo.com/

// // Embed:

// // Universal Player

// // The Universal Embed Code allows you to embed our player in a way that will work on many different devices. We will automatically choose the correct player based on the user’s device.

// // If your site will contain a Universal Player embed, but won’t show it right away, it’s best to wait to add the embed code to the page until the video is ready to be displayed. There are bugs in some browsers that prevent the proper initialization of the player if it is initially hidden.

// // Embed Code

// // Here’s what the embed code for the Universal Player looks like:

// // <iframe src="//player.vimeo.com/video/VIDEO_ID" width="WIDTH" height="HEIGHT" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
// // Parameters

// // Here is a list of all the parameters that can be used with the Universal Player. They should be added as query parameters to the src of the iframe.

// // autopause	Enables or disables pausing this video when another video is played. Defaults to 1.
// // autoplay	Play the video automatically on load. Defaults to 0. Note that this won’t work on some devices.
// // badge	Enables or disables the badge on the video. Defaults to 1.
// // byline	Show the user’s byline on the video. Defaults to 1.
// // color	Specify the color of the video controls. Defaults to 00adef. Make sure that you don’t include the #.
// // loop	Play the video again when it reaches the end. Defaults to 0.
// // player_id	A unique id for the player that will be passed back with all Javascript API responses.
// // portrait	Show the user’s portrait on the video. Defaults to 1.
// // title	Show the title on the video. Defaults to 1.
// // If the owner of a video is a Plus member, some of these settings may be overridden by their preferences.

// // For example, if you’d like to change the color and hide the portrait, this is what the embed code would look like:

// // <iframe src="//player.vimeo.com/video/VIDEO_ID?portrait=0&color=333" width="WIDTH" height