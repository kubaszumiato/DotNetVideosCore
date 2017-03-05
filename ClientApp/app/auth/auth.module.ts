import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { RouterModule } from '@angular/router';

import { UniversalModule } from 'angular2-universal';

@NgModule({
    imports: [
        UniversalModule,
        CommonModule,
        RouterModule.forChild([
         //   { path: 'register-user', component: RegisterUserComponent}
        ])
    ],
declarations: [
    
],
    exports: [RouterModule]
})
export class AuthModule {
}