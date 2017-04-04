import { oEmbed } from './video-oembed.interfaces';

export class oEmbedVimeo implements oEmbed {
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
    
    public providerName : string = "Vimeo";

    public matchProviderByUrl(url: string): boolean {

        //http://stackoverflow.com/questions/13286785/get-video-id-from-vimeo-url
        let vmUrlRegExp: RegExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;

        return url.match(vmUrlRegExp)?true:false;
    }

    public getContentUrl(url: string) : string{
        var oEmbedBaseUrl = "https://vimeo.com/api/oembed.json?url=";
        var finalUrl = oEmbedBaseUrl + url;
        return finalUrl;
    }
}