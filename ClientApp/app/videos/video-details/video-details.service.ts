import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {VideoValidationService} from './video.validation.service';
//import {Observable} from 'rxjs/Observable';
import {IVideo} from './video-details.interfaces';
import {VideoOriginEnum} from './video-details.enums';
import {Observable} from 'rxjs/Rx';
import { oEmbed } from '../video-oembed/video-oembed.interfaces';

@Injectable()
export class VideoService implements IVideoService
{
    private videoApiUrl : string = '/api/videos';
    constructor(public http: Http) 
    {
    }

    GetVideos() : Observable<IVideo>
    {
        return this.http.get(this.videoApiUrl)
        .map((res: Response)  => res.json());
    }

    GetVideo(id: string) : Observable<IVideo> 
    {
        if (id == null || id == "0")
        {
            return this.http.get(this.videoApiUrl + "/Empty")
            .map((res:Response) => res.json())            
            .do(res => console.log('Retrieved video: ' + JSON.stringify(res)));
        }
        return this.http.get(this.videoApiUrl + "/" + id)
            .map((res: Response) => res.json())
            .do(res => console.log('Retrieved video: ' + JSON.stringify(res)));
            // .catch(this.handleGetVideoError);
    }    

    createVideo(data: IVideo) : Observable<IVideo> {
        // if (!VideoValidationService.validateVideo(data))
        //     return;

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        var jsoned = JSON.stringify(data);
        console.log('service, create video.Video json: ' + jsoned);

        return this.http.post('/api/videos/postvideo', jsoned,
            { headers: headers })
            .map(res => res.json());
    }

    updateVideo(data: IVideo) : Observable<IVideo> {
        // if (!VideoValidationService.validateVideo(data))
        //     return;

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        var jsoned = JSON.stringify(data);
        console.log('service, create video.Video json: ' + jsoned);

        return this.http.put('/api/videos/editvideo', jsoned,
            { headers: headers })
            .map(res => res.json());
    }



    //var source = Rx.Observable.from(array).flatMap(x => Rx.Observable.from(x).filter(z => z>1));
    // getVideos() : Observable<IVideo>
    
    // {
    //     return this.http.get('/api/video')
    //         .map<IVideo[]>((res: Response)  => res.json())
    //         .flatMap(vids =>  Observable.from(vids, _ => _)
    //         // .map<IVideo>(v1 => {
    //         //  //   v1.id = v1._id;
    //         //     return v1;
    //         // })
    //         )
    //        .filter(VideoValidationService.validateVideo)
    //              //{
    //                                     //for(let video of vids)
    //               //  {
    //               //      video.id = video._id;
    //               //  }
    //              //   return vids;
    //             //})
                

    //         .do(res => console.log('All: ' + JSON.stringify(res)))
    //         .catch(this.handleGetVideosError);
    //     // .flatMapTo<IVideo>(vidArr => Observable.fromArray(vidArr)
    //     // //Observable.map<IVideo>(t => Observable.fromArray(vidArr))
    //     // .filter(vid => this.validateVideo(vid));

    //     //     res.json()
    //     //     .map(resJson => Observable.from(res)
    //     //         .map(x => Observable
    //     //             .from(x)
    //     //             .filter<IVideo>(z => this.validateVideo(z))
    //     //             .map<IVideo>(vid => vid.json));

    //     // });
    // }
    
    // handleGetVideosError(error: Response)
    // {
    //     console.error (error);
    //     return Observable.throw(error || 'Server error occurred when retrieving list of videos');
    // }

    // getVideo(id: string) : Observable<IVideo> 
    // {
    //     return this.http.get('/api/video/' + id)
    //         .map<IVideo>((res: Response) => res.json())
    //         // .map(video => {
    //         //     video.id = video._id;
    //         //     return video;
    //         // })
    //          .do(res => console.log('Retrieved video: ' + JSON.stringify(res)))
    //          .catch(this.handleGetVideoError);
    // }
    
    // private handleGetVideoError(error: Response)
    // {
    //     console.error(error);
    //     return Observable.throw(error.json() || 'Server error occurred when retrieving video details');

    // }

    // getEmptyVideo() {
    //     var result: IVideo = {
    //        // _id: '',
    //         id: '',
    //         title: '',
    //         url: '',
    //         localUrl: '',
    //         code: '',
    //         mediaType: '',
    //         videoLength: 0,
    //         videoOrigin: VideoOriginEnum.YouTube,
    //         tags: [],
    //         rating: 0,
    //         watchedCount: 0
    //     }

    //     return result;
    // }

   

    // validateVideo(entity: IVideo): boolean {
    //     let result: boolean = true;
    //     //non-empty fields validation
        
    //     if (!entity.id)
    //     {
    //         console.log('validation: id is empty for video');
    //         console.log(entity);
    //         result=false;
    //     }
    //     if (!entity.title)// || !entity.url || !entity.videoLength) {
    //     {
    //         console.log('validation: title is empty for video: ' + entity);
    //         result = false;
    //     }

    //     //rating must be an integer between 0 and 5
    //     if (!entity || entity.rating < 0 || entity.rating > 5) {
    //         result = false;
    //         console.log('validation: wrong rating for video: ' + entity);
    //     }

    //     return result;
    // }
    
    
    // recognizeVideoByUrl(url: string) : VideoOriginEnum
    // {
    //     //http://stackoverflow.com/questions/5830387/how-to-find-all-youtube-video-ids-in-a-string-using-a-regex/5831191#5831191
    //     let ytUrlRegExp: RegExp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;

    //     //http://stackoverflow.com/questions/13286785/get-video-id-from-vimeo-url
    //     let vmUrlRegExp: RegExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
        
    //     //#todo
    //     let ch9UrlRegExp: RegExp = /http?/;
        
    //     if (url.match(ytUrlRegExp))
    //     {
    //         return VideoOriginEnum.YouTube;
    //     }
    //     if (url.match(vmUrlRegExp))
    //     {
    //         return VideoOriginEnum.Vimeo;            
    //     }
    //     if (url.match(ch9UrlRegExp)){
    //         return VideoOriginEnum.Channel9;
    //     }
    //     return VideoOriginEnum.Unknown;        
    // }
}

interface IVideoService
{
    GetVideos() : Observable<IVideo>;
}

