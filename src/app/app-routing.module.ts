import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {PlayPageComponent} from './play-page/play-page.component';
import {ResultPageComponent} from './result-page/result-page.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'start'},
  {path: 'start', component: StartPageComponent},
  {path: 'play', component: PlayPageComponent},
  {path: 'result', component: ResultPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
