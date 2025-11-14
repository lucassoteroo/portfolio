import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// Components
import { NavComponent } from './nav/nav.component';

// PrimeNG
import { DrawerModule } from 'primeng/drawer';

@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    DrawerModule
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
