import { Component, NgModule } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

const routes: Routes = 
[
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'movie-info/:imdbID',
    component:MovieInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
