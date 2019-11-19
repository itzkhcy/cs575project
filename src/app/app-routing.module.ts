import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManufacturesComponent } from './manufactures/manufactures.component';
import { TrendingComponent } from './trending/trending.component';
import { UploadComponent } from './upload/upload.component';



const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent},
    {path:'manufactures',component:ManufacturesComponent},
    {path:'trending',component:TrendingComponent},
    {path:'upload',component:UploadComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
