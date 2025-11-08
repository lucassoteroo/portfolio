import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: false
})
export class NavComponent implements OnInit {
  public valor: boolean = false;
  availableForWork: boolean = false;

  isMenuOpen = false;

  menuItems = [
    { name: 'About', link: '/', image: 'item-user', home: 'home' },
    { name: 'Projects', link: '/projects', image: 'item-projects' },
    { name: 'Stack', link: '/stack', image: 'item-stack' },
    { name: 'Certificates', link: '/certificate', image: 'item-certificate' },
    { name: 'Contact', link: '/contact', image: 'item-contact', home: 'contact' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

}
