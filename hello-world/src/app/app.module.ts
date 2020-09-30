import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersModule } from './users/users.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { from } from 'rxjs';
import { NewUserComponent } from './new-user/new-user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotComponent } from './page-not/page-not.component';
import { CustomStyleDirective } from './custom-style.directive';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    NewUserComponent,
    AdminComponent,
    PageNotComponent,
    CustomStyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
