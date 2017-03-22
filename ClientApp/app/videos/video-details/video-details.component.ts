import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { IVideo } from '../video/video.interfaces';
import { VideoService } from '../video/video.services';

import { VideoOriginEnum } from './video-details.enums';
import {EnumKeysPipe} from '../../pipes/enum.keys.pipe';


//import {Component, Injectable, Input, OnInit} from '@angular/core';
// //import {FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Control, Validators} from '@angular/common';
// //import {RouteParams} from '@angular/router';
// import {VideoValidationService} from '../video/video.services';
// //import {IVideo, VideoDisplayMode, VideoOriginEnum} from '../../../../shared/data-models/video.model.interfaces';
// import {VideoWatchComponent} from '../video-watch/video-watch.component';
@Component(
    {
        //         directives: [VideoWatchComponent],
        selector: 'video-details',
       // pipes: [EnumKeysPipe],
        //         providers: [VideoService, VideoValidationService],
        template: require('./video-details.component.html')
    })
export class VideoDetailsComponent implements OnInit {
    private id: any;
    private video: IVideo;
    private videoOrigins = VideoOriginEnum;
    constructor(private route: ActivatedRoute, private videoService: VideoService) { }

    ngOnInit() {
        this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.videoService.GetVideo(params['id']))
      .subscribe((video: IVideo) => this.video = video);
    }

    onSubmit(form: NgForm) {
        console.log('model: ' + this.video);
        console.log('form: ' + form.value );
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