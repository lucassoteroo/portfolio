import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './modules/home.component';
import { SobreComponent } from './modules/pages/sobre/sobre.component';
import { ProjetosComponent } from './modules/pages/projetos/projetos.component';
import { TechComponent } from './modules/pages/tech/tech.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  },
  {
    path: 'tecnologias',
    component: TechComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
