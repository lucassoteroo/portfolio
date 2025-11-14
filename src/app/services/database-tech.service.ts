import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseTechService {
  private techView: any = [
    {
      image: './assets/images/icons/ico-html.svg',
      name: 'HTML 5',
      years: 5,
      field: 'Front End',
      courses: [
        'Densenvolvimento Front-End do Zero ao Pro',
        'Curso em Vídeo'
      ],
      text: 'HTML5 was the first technology I learned. It is used to structure web pages, ensuring that sites are semantically meaningful and accessible. It generates the visual body of a web project'
    },
    {
      image: './assets/images/icons/ico-css.svg',
      name: 'CSS 3',
      years: 5,
      field: 'Front End',
      courses: [
        'Densenvolvimento Front-End do Zero ao Pro',
        'Curso em Vídeo'
      ],
      text: 'CSS3 i learned along with HTML5. I learned how to use it with HTML5 to create more stylish and responsive websites for all screens, by stylizing the project body'
    },
    {
      image: './assets/images/icons/ico-javascript.svg',
      name: 'Javascript',
      years: 5,
      field: 'Front End',
      courses: [
        'Programação para Internet com Javascipt',
        'Introdução a Biblioteca JQuery',
        'Javascipt ES6 Essencial',
        'Curso em Vídeo',
        'Densenvolvimento Front-End do Zero ao Pro'
      ],
      text: 'JavaScript was my first programming language, and it ended up becoming an essential language for me, allowing me to work with web development, facilitating the creation of dynamism and interactivity for websites and web pages.'
    },
    {
      image: './assets/images/icons/ico-angular.svg',
      name: 'Angular',
      years: 3,
      field: 'Framework',
      courses: [
        'Instalando e Preparando o Ambiente Angular',
        'Introdução Ao Angular 8',
        'Curso de Angular 2 (v14+) Typescript do Básico ao Avançado'
      ],
      text: 'I learned how to use Angular 1 year before getting my first job as a developer, allowing me to facilitate my development in SPA by using modular structures and reusable components, it also includes integrated tools for state management, routing and communication with APIs'
    },
    {
      image: './assets/images/icons/ico-typescript.svg',
      name: 'Typescript',
      years: 4,
      field: 'Front End',
      courses: [
        'Dominando Typescript'
      ],
      text: 'When I started to specialize in Javascript, I discovered TypeScript which helped me detect errors during compilation, improve code readability and facilitate the maintenance of large code bases. And being used as a base for angular only helped me more'
    },
    {
      image: './assets/images/icons/ico-mysql.svg',
      name: 'MySQL',
      years: 2,
      field: 'Back End',
      courses: [
        'Banco de Dados SQL do Zero ao Avançado 2022'
      ],
      text: 'As my desire has always been to become a fullstack developer I decided to start studying back end, thats where I discovered SQL. With him I learned to manage and manipulate relational databases, teaching me a way to perform queries and organize information'
    },
  ]

  constructor() { }

  public tech: any = this.techView

}
