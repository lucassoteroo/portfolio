import { Component, OnInit } from '@angular/core';
import { DatabaseViewService } from 'src/app/services/database-view.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent implements OnInit {

  dataProjects: any = []

  constructor(private projectsService: DatabaseViewService) { }

  ngOnInit(): void {
    this.dataProjects = this.projectsService.view

    console.log(this.dataProjects)
  }



}
