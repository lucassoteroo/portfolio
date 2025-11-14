import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './modules/home.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { StacksComponent } from './modules/stacks/stacks.component';
import { CertificatesComponent } from './modules/certificates/certificates.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'stack',
    component: StacksComponent
  },
  {
    path: 'certificate',
    component: CertificatesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
