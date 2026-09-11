import { Routes } from '@angular/router';

import { Actividades } from './components/actividades/actividades';
import { Inscripcion } from './components/inscripcion/inscripcion';
import { Inicio } from './components/inicio/inicio';
import { Contacto } from './components/contacto/contacto';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    component: Inicio
  },

  {
    path: 'actividades',
    component: Actividades
  },

  {
    path: 'inscripcion',
    component: Inscripcion
  },

  {
    path: 'contacto',
    component: Contacto
  }

];