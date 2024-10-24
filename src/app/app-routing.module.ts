import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogcomponentComponent } from './catalogcomponent/catalogcomponent.component';
import { PaintingcomponentComponent } from './paintingcomponent/paintingcomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

const routes: Routes = [
  {path: '', component: HomecomponentComponent},
  {path: 'page1', component: CatalogcomponentComponent},
  {path: 'page2', component: PaintingcomponentComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
