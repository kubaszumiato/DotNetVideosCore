// import { oEmbed } from '../video-oembed/video-oembed.interfaces';

// export class VideoVimeo implements oEmbed {

//     type: any;
//     version: any;
//     provider_name: any;
//     provider_url: any;
//     title: any;
//     author_name: any;
//     author_url: any;
//     is_plus: any;
//     html: any;
//     width: any;
//     height: any;
//     duration: any;
//     description: any;
//     thumbnail_url: any;
//     thumbnail_width: any;
//     thumbnail_height: any;
//     thumbnail_url_with_play_button: any;
//     upload_date: any;
//     video_id: any;
//     uri: any;

//     matchProviderByUrl(url: string): string {
//         //http://stackoverflow.com/questions/13286785/get-video-id-from-vimeo-url
//         let vmUrlRegExp: RegExp = /(https?:\/\/)?(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
        
//         if (url && url.match(vmUrlRegExp)) {
//             console.log('vimeo url matched');
//             return "Vimeo";
//         }
//     }


// }