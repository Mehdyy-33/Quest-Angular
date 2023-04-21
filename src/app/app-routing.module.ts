import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilComponent } from './user-profil/user-profil.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [ 
  { path: 'menu', component: MenuComponent },
  { path: 'user-profil', component: UserProfilComponent },
{ path: 'sign-up', component: SignUpComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
