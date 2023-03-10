import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from '../shared/components/view-profile/view-profile.component';
import { AlquilarVehiculoComponent } from './components/alquilar-vehiculo/alquilar-vehiculo.component';
import { CardAlquiladosComponent } from './components/card-alquilados/card-alquilados.component';
import { CardVehiculoComponent } from './components/card-vehiculo/card-vehiculo.component';
import { FormVehiculoComponent } from './components/form-vehiculo/form-vehiculo.component';
import { TableVehiculoAdminComponent } from './components/table-vehiculo-admin/table-vehiculo-admin.component';
import { TableVehiculoComponent } from './components/table-vehiculo/table-vehiculo.component';
import { VehiculoClienteGuard } from './guards/vehiculo-cliente.guard';
import { VehiculoGuardGuard } from './guards/vehiculo-guard.guard';

const routes: Routes = [
  {
    path: '',pathMatch:'full',
    redirectTo:'vehiculos'
  },
  {
    path: 'vehiculos',pathMatch:'full',
    component:CardVehiculoComponent
  },
  {
    path:'view-profile',
    component:ViewProfileComponent,
  },
  {
    path: 'vehiculos/create',pathMatch:'full',
    component:FormVehiculoComponent,
    canActivate:[VehiculoGuardGuard]
  },
  {
    path: 'vehiculos/alquilar/:id',
    component:AlquilarVehiculoComponent,
    canActivate:[VehiculoClienteGuard]
  },
  {
    path: 'vehiculos/edit/:vehiculo',
    component:FormVehiculoComponent,
    canActivate:[VehiculoGuardGuard]
  },
  {
    path:'mis-vehiculos',
    component:TableVehiculoComponent,
    canActivate:[VehiculoClienteGuard],
  },
  {
    path:'vehiculos-alquilados',
    component:CardAlquiladosComponent,
    canActivate:[VehiculoGuardGuard],
  },
  {
    path:'datos-alquilados',
    component:TableVehiculoAdminComponent,
    canActivate:[VehiculoGuardGuard],
  },

  {
    path:'**',
    redirectTo:'/dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosRouting {}
