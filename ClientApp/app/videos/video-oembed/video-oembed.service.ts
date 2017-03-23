import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { oEmbed } from '../video-oembed/video-oembed.interfaces';

@Injectable()
export class oEmbedService
{
    
    constructor(private http: Http) {}

    checkVideoOEmbed(url: string): Observable<oEmbed> {

        var oEmbedUrl = "https://vimeo.com/api/oembed.json?url=" + url;
        return this.http.get(oEmbedUrl)
        .map((res: Response) => res.json());
       // .do(res => res => console.log('Retrieved oEmbed content: ' + JSON.stringify(res)));

    }
}