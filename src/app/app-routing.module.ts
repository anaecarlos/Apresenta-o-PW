import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaComponent } from './ana/ana.component';
import { CarlosComponent } from './carlos/carlos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Ana', component: AnaComponent},
  { path: 'Carlos', component: CarlosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
