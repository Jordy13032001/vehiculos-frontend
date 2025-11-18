import { Routes } from '@angular/router';

import { ListarComponent } from './modules/vehiculos/pages/listar/listar';
import { CrearComponent } from './modules/vehiculos/pages/crear/crear';
import { EditarComponent } from './modules/vehiculos/pages/editar/editar';
import { PromedioComponent } from './modules/vehiculos/pages/promedio/promedio';

export const routes: Routes = [

  { path: 'vehiculos', component: ListarComponent },
  { path: 'vehiculos/crear', component: CrearComponent },
  { path: 'vehiculos/editar/:id', component: EditarComponent },
  { path: 'vehiculos/promedio', component: PromedioComponent },

  { path: '', redirectTo: 'vehiculos', pathMatch: 'full' },
  { path: '**', redirectTo: 'vehiculos' }
];
