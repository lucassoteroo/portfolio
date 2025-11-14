import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseCertificatesService {
  private certificatesView: any = [
    {
      about: 'Javascript',
      certificates: [
        { image: './assets/images/certificates/programacaoParaInternetComJs.jpg' },
        { image: './assets/images/certificates/jsEs6Essencial.jpg' },
        { image: './assets/images/certificates/JavaScriptFuncionalEReativo.jpg' }
      ],
    },
    {
      about: 'Typescript',
      certificates: [
        { image: './assets/images/certificates/dominandoTypescript.jpg' }
      ],
    },
    {
      about: 'Angular',
      certificates: [
        { image: './assets/images/certificates/angularAvancado(v13)typescriptAvancado.jpg' }
      ],
    },
    {
      about: 'Git',
      certificates: [
        { image: './assets/images/certificates/gitCompleto.jpg' },
      ],
    },
    {
      about: 'Docker',
      certificates: [
        { image: './assets/images/certificates/dockerFerramentaEssencialParaDesenvolvedores.jpg' },
      ],
    },
    {
      about: 'MySQL',
      certificates: [
        { image: './assets/images/certificates/bancoDeDadosSqlDoBasicoAoAvancado.jpg', }
      ],
    },
  ]

  constructor() { }

  public certificates: any = this.certificatesView
}
