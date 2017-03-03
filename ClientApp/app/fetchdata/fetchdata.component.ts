import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public videos: Video[];

    constructor(http: Http) {
        http.get('/api/Videos/VideosSample').subscribe(result => {
            this.videos = result.json() as Video[];
        });
    }
}

interface Video {
    createdDate: string;
    category: string;
    name: string;
}
