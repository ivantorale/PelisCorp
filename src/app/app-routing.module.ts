import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { FilmsComponent } from './list/films/films.component';
import { PrincipalComponent } from './principal/principal/principal.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'films', component: FilmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
