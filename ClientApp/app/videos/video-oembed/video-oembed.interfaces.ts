export interface oEmbed{
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

    //used to check if url matches our provider
    matchProviderByUrl(url: string) : string;
}