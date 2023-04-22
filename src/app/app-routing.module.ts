import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilComponent } from './user-profil/user-profil.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ 
  { path: '', component: UserProfilComponent },
  { path: 'user-profil', component: UserProfilComponent },
{ path: 'sign-up', component: SignUpComponent },
{ path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
