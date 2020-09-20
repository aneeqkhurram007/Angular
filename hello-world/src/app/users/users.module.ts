import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signuo/signuo.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule],
  exports: [LoginComponent, SignupComponent],
})
export class UsersModule {}
