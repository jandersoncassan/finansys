import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoyFormComponent } from './categoy-form/categoy-form.component';
import { CategoyListComponent } from './categoy-list/categoy-list.component';

const routes: Routes = [
  {path:'', component: CategoyListComponent},
  {path:':new', component: CategoyFormComponent}, 
  {path:':id/edit', component: CategoyFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
