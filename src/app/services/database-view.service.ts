import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseViewService {
  private pokedexView: any = {
    imageHome: 'pokedex-home',
    imageIndex: 'pokedex-index',
    text: 'Pokedex Website',
  }


  private pokedexTech: any = [
    {
      tech: 'HTML',
      image: './assets/images/icons/ico-html.svg'
    },
    {
      tech: 'Angular',
      image: './assets/images/icons/ico-angular.svg'
    },
    {
      tech: 'Typescript',
      image: './assets/images/icons/ico-typescript.svg'
    },
    {
      tech: 'Sass',
      image: './assets/images/icons/ico-sass.svg'
    }
  ]

  private devflixView: any = {
    imageHome: 'devflix-home',
    imageIndex: 'devflix-index',
    text: 'Copy Netflix Website',
  }


  private devflixTech: any = [
    {
      image: './assets/images/icons/ico-html.svg'
    },
    {
      tech: 'Javascript',
      image: './assets/images/icons/ico-javascript.svg'
    },
    {
      tech: 'Sass',
      image: './assets/images/icons/ico-sass.svg'
    }
  ]

  private langingPageView: any = {
    imageHome: 'landingPage-home',
    imageIndex: 'landingPage-index',
    text: 'LandingPage to Websites',
  }

  private langingPageTech: any = [
    {
      tech: 'HTML',
      image: './assets/images/icons/ico-html.svg'
    },
    {
      tech: 'Angular',
      image: './assets/images/icons/ico-angular.svg'
    },
    {
      tech: 'Typescript',
      image: './assets/images/icons/ico-typescript.svg'
    },
    {
      tech: 'Sass',
      image: './assets/images/icons/ico-sass.svg'
    }
  ]

  public view: any = [
    this.pokedexView,
    this.devflixView,
    this.langingPageView
  ]

  public tech: any = [
    this.pokedexTech,
    this.devflixTech,
    this.langingPageTech
  ]

  constructor() { }

}
