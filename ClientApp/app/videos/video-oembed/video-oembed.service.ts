import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { oEmbed, oEmbedDictionary } from '../video-oembed/video-oembed.interfaces';
import { oEmbedVimeo } from './oembed-vimeo';
import { oEmbedYouTube } from './oembed-youtube';

@Injectable()
export class oEmbedService
{
    private providers : oEmbedDictionary = {}
    constructor(private http: Http ) {
        this.providers["Vimeo"] = new oEmbedVimeo();;
        this.providers["YouTube"] = new oEmbedYouTube();
    }

    recognizeProvider(url: string) : string {
        var providerName = '';

        for (var key in this.providers) {

            let oEmbedProvider : oEmbed = this.providers[key];
            var x = typeof(oEmbedProvider);

            if (oEmbedProvider.matchProviderByUrl(url)) {
                
                providerName = oEmbedProvider.providerName;
                return providerName
            }
        }
        
        return providerName;
    }

    checkVideoOEmbed(url: string, providerName = ""): Observable<oEmbed> {
        if (url == "" || url == null || url == undefined)
        {
            throw new RangeError("Url cannot be empty");
        }
        if (providerName == "")
        {
            providerName = this.recognizeProvider(url);
        }
        if (providerName == "")
        {
            throw new RangeError("Couldn't match the video provider by URL");
        }
        console.log("calling get content by url, for: " + url);

        let oEmbedUrl = this.providers[providerName].getContentUrl(url);

        return this.http.get(oEmbedUrl)
        .map((res: Response) => res.json());
       // .do(res => res => console.log('Retrieved oEmbed content: ' + JSON.stringify(res)));

    }
}