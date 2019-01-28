import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [MaterialDemoComponent],
  imports: [
    CommonModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule
  ],
  exports: [
    MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule
  ]
})
export class MaterialModule { }
