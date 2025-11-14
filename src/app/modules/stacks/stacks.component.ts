import { Component, OnInit } from '@angular/core';
import { DatabaseTechService } from 'src/app/services/database-tech.service';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss'],
  standalone: false
})
export class StacksComponent implements OnInit {

  dataStacks: any[] = []

  constructor(private techsService: DatabaseTechService) { }

  ngOnInit(): void {
    this.dataStacks = this.techsService.tech
  }

}
