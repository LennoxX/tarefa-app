import { CategoriaListComponent } from './pages/categoria/categoria-list/categoria-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'categorias', loadChildren:() => import('./pages/categoria/categoria.module').then (module => module.CategoriaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
