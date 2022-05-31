import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmainComponent } from './componentes/agmain/agmain.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { InscripcionComponent } from './componentes/inscripcion/inscripcion.component';
import { LoginComponent } from './componentes/login/login.component';
import { AngularFireAuthGuard ,redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'agregar-cliente', component: AgregarClienteComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'clientes', component: ClientesComponent,
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'inscripcion', component: InscripcionComponent
  },
  {
    path: 'main', component: AgmainComponent,
     canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
