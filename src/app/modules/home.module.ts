import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatDividerModule } from '@angular/material/divider';


// Componentes
import { SharedModule } from '../components/shared.module';
import { ProjectsComponent } from './projects/projects.component';

// Pages

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
  ]
})
export class HomeModule { }
