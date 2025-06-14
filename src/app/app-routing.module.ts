import { Component, NgModule } from '@angular/core';
import { NavigationCancel, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ListadoComponent } from './servidores/listado/listado.component';
import { FormularioComponent } from './servidores/formulario/formulario.component';

const routes: Routes = [
  {path:'',redirectTo:'/iniciar-sesion',pathMatch:'full'},
  {path:'inicio',component:DashboardComponent},
  {path:'iniciar-sesion',component:LoginComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'servidores',component:ListadoComponent},
  {path:'crear-servidor',component:FormularioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
