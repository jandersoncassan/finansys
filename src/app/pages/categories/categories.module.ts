import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoyListComponent } from './categoy-list/categoy-list.component';
import { CategoyFormComponent } from './categoy-form/categoy-form.component';


@NgModule({
  declarations: [
    CategoyListComponent,
    CategoyFormComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
