import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './modules/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'projects',
  //   component: ProjetosComponent
  // },
  // {
  //   path: 'stack',
  //   component: TechComponent
  // },
  // {
  //   path: 'certificate',
  //   component: CertificadosPageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
