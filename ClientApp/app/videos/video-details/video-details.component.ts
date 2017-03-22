import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';

import { IVideo } from '../video/video.interfaces';
import { VideoService } from '../video/video.services';

import { VideoOriginEnum } from './video-details.enums';
import { EnumKeysPipe } from '../../pipes/enum.keys.pipe';
import { SafePipe } from '../../pipes/safe.html.pipe';


//import {Component, Injectable, Input, OnInit} from '@angular/core';
// //import {FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Control, Validators} from '@angular/common';
// //import {RouteParams} from '@angular/router';
// import {VideoValidationService} from '../video/video.services';
// //import {IVideo, VideoDisplayMode, VideoOriginEnum} from '../../../../shared/data-models/video.model.interfaces';

@Component(
    {
        selector: 'video-details',
        template: require('./video-details.component.html')
    })
export class VideoDetailsComponent implements OnInit {
    private id: any;
    private video: IVideo;
    private videoOrigins = VideoOriginEnum;
    private videoUrl = new Subject<string>();
    private preview: oEmbed;
    constructor(private route: ActivatedRoute, private videoService: VideoService) {
    }

    verifyVideo(form: NgForm) {
        console.log('verifyVideo: ' + form.value);

    }

    validateVideoUrl(event: any) {
        this.videoUrl.next(event);
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.videoService.GetVideo(params['id']))
            .subscribe((video: IVideo) => {
                this.video = video;
                this.previewVideo(video.url);
            });
        this.videoUrl
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(url => this.previewVideo(url));

    }

    previewVideo(url){
        this.video.url = url;
        this.videoService.checkVideoOEmbed(url)
        
        .subscribe(res => {
            this.preview = res;
            console.log(this.preview);
        });
    }

    onSubmit(form: NgForm) {
        console.log('model: ' + this.video);
        console.log('form: ' + form.value);
        if (this.video.id != null && this.video.id != "0") {
            this.videoService.updateVideo(this.video).subscribe(
                (res) => {
                    this.video = res;
                    console.log('successfully saved video with ID: ' + this.video.id)
                },
                (error) => console.log('error on saving video'));
        } else {
            this.videoService.createVideo(this.video).subscribe(
                (res) => {
                    this.video = res;
                    console.log('successfully saved video with ID: ' + this.video.id)
                },
                (error) => console.log('error on saving video'));
        }




    }






}

export class oEmbed{
    type: any;
version: any;
provider_name: any;
provider_url: any;
title: any;
author_name: any;
author_url: any;
is_plus: any;
html: any;
width: any;
height: any;
duration: any;
description: any;
thumbnail_url: any;
thumbnail_width: any;
thumbnail_height: any;
thumbnail_url_with_play_button: any;
upload_date: any;
video_id: any;
uri: any;

}
//     videoForm: ControlGroup;
//     //formBuilder: FormBuilder;
//     displayMode: string;


//     constructor(
//         private fb: FormBuilder,
//         private _params: RouteParams,
//         public videoService: VideoService,
//         public validationService: VideoValidationService) {
//         let id = this._params.get('id');
//         let mode = this._params.get('mode');
//         this.displayMode = mode;

//         if (!mode || mode === '') {
//             //no mode? heck?
//             console.log('no mode selected');
//         }
//         else if (mode === 'watch' || mode === 'edit') {
//             console.log('mode: ' + mode);
//             this.getVideo(id);
//         }
//         else { //add
//             console.log('new video');
//             this.videoDetails = this.videoService.getEmptyVideo();
//         }

//         if (mode && mode !== 'watch'){
//             console.log('prepare form (not watching)');
//             this.videoForm = this.getVideoForm(fb);
//         }

//     }

//     getVideo(id: string): void {
//         if (id && id !== '') {
//             this.videoService.getVideo(id).subscribe((res) => {
//                 this.videoDetails = res;
//                 console.log('got video: ' + res);
//             });
//         }
//     }

//     public saveVideo(value: any) {
//         console.log('videoDetails on submit: ' + this.videoDetails);
//         this.videoService.createVideo(this.videoDetails).subscribe(
//             (res) => {
//                 this.videoDetails = res;
//                 console.log('successfully saved video with ID: ' + this.videoDetails.id)
//             },
//             (error) => console.log('error on saving video'));
//     }

//     //where to put this?
//     getVideoForm(fb: FormBuilder): ControlGroup {
//         //that would be our form we need to build
//         let result: ControlGroup = fb.group({
//             //control for the movie title, required value
//             'title': ['', Validators.required],
//             //control for rating. Specific validator
//             'rating': ['', VideoValidationService.ratingValidator],
//             //video origin/source (YouTube, Vimeo, Channel9)
//             'videoOrigin': [''],
//             //url of the video, required value
//             'url': ['', VideoValidationService.urlValidator]
//         });

//         result.controls['title'].valueChanges.subscribe(
//             (value: string) => console.log('title changed to: ' + value)
//         )

//         result.controls['url'].valueChanges.subscribe(
//             (value: string) => {
//                 var origin = VideoValidationService.recognizeVideoByUrl(value);
//                 this.videoDetails.videoOrigin = origin;
//             });

//         result.valueChanges.subscribe(
//             (value: ControlGroup) => {

//                 console.log('form changed to: ' + value.value);
//             });
//         return result;
//     }
// }