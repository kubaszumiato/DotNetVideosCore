import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../auth/user/user.component';
import { AuthComponent } from '../auth/auth/auth.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginBarComponent } from '../auth/login-bar/login-bar.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
         //   { path: 'register-user', component: RegisterUserComponent}
        ])
    ],
declarations: [
    
UserComponent,
    
AuthComponent,
    
LoginComponent,
    
RegisterComponent,
    
LoginBarComponent],
    exports: [RouterModule]
})
export class AuthModule {
}