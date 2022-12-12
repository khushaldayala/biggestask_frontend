import { SignInComponent } from "./sign-in/sign-in.component";
import { QuestionBankComponent } from "./question-bank/question-bank.component";
import { OurJourneysComponent } from "./our-journeys/our-journeys.component";
import { JourneyComponent } from "./journey/journey.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { Error404Component } from "./error404/error404.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth.guard";
import { CmsComponent } from "./cms/cms.component";


var userId = sessionStorage.getItem('userId');

const appRoutes: Routes = [
  { path: 'signin', component: userId ? QuestionBankComponent : SignInComponent },
  { path: '', component: userId ? QuestionBankComponent : SignInComponent },
  { path: 'questionbank', component: QuestionBankComponent, canActivate: [AuthGuard] },
  { path: 'myprofile', component: MyProfileComponent, canActivate: [AuthGuard] },
  { path: 'ourjourneys', component: OurJourneysComponent, canActivate: [AuthGuard] },
  { path: 'journey/:id', component: JourneyComponent, canActivate: [AuthGuard] },
  { path: 'cms', component: CmsComponent, canActivate: [AuthGuard] },
  { path: 'error404', component: Error404Component },
  { path: '**', redirectTo: '/error404' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

