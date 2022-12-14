import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// Angular Material
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

// Components
import { NavComponent } from './home/nav/nav.component';
import { ApresentacaoComponent } from './home/apresentacao/apresentacao.component';
import { DadosComponent } from './sobre/dados/dados.component';
import { FormacaoComponent } from './sobre/formacao/formacao.component';
import { TabsComponent } from './projetos/tabs/tabs.component';
import { AplicacoesModule } from './projetos/aplicacoes/aplicacoes.module';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    NavComponent,
    ApresentacaoComponent,
    DadosComponent,
    FormacaoComponent,
    TabsComponent,
    TecnologiasComponent,
    CertificadosComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTabsModule,
    MatExpansionModule,
    AplicacoesModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  exports: [
    NavComponent,
    ApresentacaoComponent,
    DadosComponent,
    FormacaoComponent,
    TabsComponent,
    MatTabsModule,
    MatExpansionModule,
    AplicacoesModule,
    TecnologiasComponent,
    CertificadosComponent,
  ]
})
export class SharedModule { }
