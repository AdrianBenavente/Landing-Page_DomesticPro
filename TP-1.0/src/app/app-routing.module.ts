import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/landing/home/home.component';
import { UsuarioFormComponent } from './component/usuario-form/usuario-form.component';
import { CatComponent } from './component/cat/cat.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'registro', component: UsuarioFormComponent},
  {path:'users', component: CatComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




