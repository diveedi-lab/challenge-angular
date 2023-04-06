import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'shows', component: ListComponent},
  {path: 'profile', component: NotFoundComponent},
  {path: 'detail', component: NotFoundComponent},
  {path: '', redirectTo: '/shows', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
