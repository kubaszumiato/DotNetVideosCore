//import {Tag} from '../../app/models/video/video.tag';
import {VideoOriginEnum} from './video-details.enums';
//import {IUser} from './user.model.interfaces';
export class Tag {
    name: String;
    popularity: Number;
}

export interface IVideo {

  //id for the entity
  id?: string;
  //each video has some title which is displayed first ot the user
  title: string;
  //each video must have an Url, whatever the place of publication
  url: string;
  //each video will have also it's url on dotnetvideos website
  //localUrl?: string;
  //code defines the unique identifier of a movie within a given website; usually it's a part of URL
  //code: string;
  //mediaType describes what kind of movie is that (what type of file preciesly speaking)
  //mediaType: string;  
  //length in seconds
  thumbUrl: string;
  //videoLength: number;  
  //videoType declares the website the movie is coming from; eg. YouTube
  videoOrigin: VideoOriginEnum
  //tags for movies; assigned by movie creator/importer
  //tags: Tag | Array<Tag>;    
  //internal rating by dotnet-videos users
  rating: number;  
  //who uploaded the movie [optional]
  //owner?: User;
  //we'd also like to know the watch count
  //watchedCount:  number;
  //createdDate : string;
  uploadedDate : string;
  //category : number;


};
