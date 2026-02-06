import { Component, inject, OnInit, signal } from '@angular/core';
import { DatabaseViewService } from 'src/app/services/database-view.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: false
})
export class ProjectsComponent implements OnInit {
  // private productService = inject(ProductService);
  products = signal<any[]>([]);
  responsiveOptions: any[] | undefined;

  dataProjects: any = []

  constructor(private projectsService: DatabaseViewService) { }

  ngOnInit(): void {
    this.dataProjects = this.projectsService.view

    console.log(this.dataProjects)

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
