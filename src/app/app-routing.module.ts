import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './modules/home.component';
import { SobreComponent } from './modules/pages/sobre/sobre.component';
import { ProjetosComponent } from './modules/pages/projetos/projetos.component';
import { TechComponent } from './modules/pages/tech/tech.component';
import { CertificadosPageComponent } from './modules/pages/certificados/certificados-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjetosComponent
  },
  {
    path: 'stack',
    component: TechComponent
  },
  {
    path: 'certificate',
    component: CertificadosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
