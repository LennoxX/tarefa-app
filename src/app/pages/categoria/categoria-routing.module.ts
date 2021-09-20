import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CategoriaListComponent},
  { path: 'new', component: CategoriaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
