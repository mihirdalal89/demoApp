import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundCarouselComponent } from './components/background-carousel/background-carousel.component';
import { ImageOverlayComponent } from './components/image-overlay/image-overlay.component';
import { RegisterComponent } from './components/register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterInfoComponent } from './components/register-info/register-info.component';
import { RouterModule, Routes } from '@angular/router';
// import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const appRoutes: Routes = [
  {path:'home', component: HeaderComponent},
  {path:'register-info', component:RegisterInfoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundCarouselComponent,
    ImageOverlayComponent,
    RegisterComponent,
    AboutUsComponent,
    JobsComponent,
    FooterComponent,
    UserRegistrationComponent,
    RegisterInfoComponent,
    // EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SwiperModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
