import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { MovieCompComponent } from './modules/movie-comp/movie-comp.component';
import { MovieService } from './service/Movie.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { UserPageComponent } from './modules/user-page/user-page.component';
import { AdminPageComponent } from './modules/admin-page/admin-page.component';
import { FooterComponent } from './modules/footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MovieCompComponent,
    NavbarComponent,
    UserPageComponent,
    AdminPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
