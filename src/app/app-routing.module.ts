import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilComponent } from './user-profil/user-profil.component'
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [ 
  {path: 'sign-up', component: SignUpComponent},
  {path: 'user-profil', component: UserProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
