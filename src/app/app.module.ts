import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { OurJourneysComponent } from './our-journeys/our-journeys.component';
import { JourneyComponent } from './journey/journey.component';
import { Error404Component } from './error404/error404.component';
import { AppRoutingModule } from './app-routing';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from '../app/question-bank/category-list/category-list.component';
import { SectionListComponent } from '../app/question-bank/section-list/section-list.component';
import { QuestionListComponent } from '../app/question-bank/question-list/question-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Services } from './user.service';
import { CmsComponent } from './cms/cms.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavbarComponent,
    MyProfileComponent,
    QuestionBankComponent,
    OurJourneysComponent,
    JourneyComponent,
    Error404Component,
    CategoryListComponent,
    SectionListComponent,
    QuestionListComponent,
    CmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
