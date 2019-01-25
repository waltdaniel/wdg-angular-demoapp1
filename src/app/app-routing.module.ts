import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component';

const routes: Routes = [
  //definicion de rutas y a qué apunta, ej un componente dentro de x modulo
  {
    path: 'material-demo',
    component: MaterialDemoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
