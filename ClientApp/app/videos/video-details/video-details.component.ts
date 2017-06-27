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

import { IVideo, oEmbed } from '../video/video.interfaces';
import { VideoService, oEmbedService } from '../video/video.services';

import { VideoOriginEnum } from './video-details.enums';
import { EnumKeysPipe } from '../../pipes/enum.keys.pipe';
import { SafePipe } from '../../pipes/safe.html.pipe';


@Component(
    {
        selector: 'video-details',
        template: require('./video-details.component.html')
    })
export class VideoDetailsComponent implements OnInit {

    private video: IVideo;
    private videoOrigins = VideoOriginEnum;
    private videoUrl = new Subject<string>();
    private preview: oEmbed;


    constructor(private route: ActivatedRoute, private videoService: VideoService, private oEmbedService: oEmbedService) { } 


    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.videoService.GetVideo(params['id']))
            .subscribe((video: IVideo) => {
                this.video = video;
                this.previewVideo(video.url, video.videoOrigin.toString());
            });
        this.videoUrl
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(url => this.previewVideo(url, ""));

    }

    //using Subject<string> to debounce url validation/video preview
    validateVideoUrl(event: any) {
        this.videoUrl.next(event);
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