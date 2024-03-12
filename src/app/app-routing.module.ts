import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [ 
  {path:'home',component:HomeComponent},
  {path:'',component:ProfileComponent},
  {path:'about',component:AboutComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
