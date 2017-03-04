import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { RouterModule } from '@angular/router';

@NgModule({

    imports: [CommonModule,
        RouterModule.forChild([
            { path: 'video-list', component: VideosModule}
        ])
    ],
    exports: [RouterModule]
})
export class VideosModule {
}