import { oEmbed } from './video-oembed.interfaces';

export class oEmbedYouTube implements oEmbed {
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

    public providerName = "YouTube";

    public matchProviderByUrl(url: string): boolean {

        //http://stackoverflow.com/questions/5830387/how-to-find-all-youtube-video-ids-in-a-string-using-a-regex/5831191#5831191
        let ytUrlRegExp: RegExp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;

        return (url.match(ytUrlRegExp)) ? true : false;
    }

    public getContentUrl(url: string): string {
        var oEmbedBaseUrl = "http://www.youtube.com/oembed?url=";
        var finalUrl = oEmbedBaseUrl + url + "&format=json";
        return finalUrl;
    }
}