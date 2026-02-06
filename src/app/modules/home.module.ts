import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatDividerModule } from '@angular/material/divider';


// Componentes
import { SharedModule } from '../components/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { StacksComponent } from './stacks/stacks.component';
import { CertificatesComponent } from './certificates/certificates.component';

// modulos do primeNg
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ContactComponent } from './contact/contact.component';
import { InputMaskModule } from 'primeng/inputmask';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    StacksComponent,
    CertificatesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
    AccordionModule,
    ButtonModule,
    DividerModule,
    CardModule,
    InputMaskModule,
    CarouselModule,
  ]
})
export class HomeModule { }
