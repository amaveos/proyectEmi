import { Component } from '@angular/core';
import { DbService } from '../../_service/db.service';
import { ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  titleTask!:any;
  detailsOfTaskany!:any;

  constructor(private dbService: DbService, private router:Router, private activatedRoute: ActivatedRoute) {
    
    this.titleTask = this.activatedRoute.snapshot.paramMap.get('title');

    console.log("this.titleTask",this.titleTask)
  }


  ngOnInit(){
    this.detailsOfTaskany = this.dbService.getTaskDetailByTitle(this.titleTask)
    console.log("detailsOfTaskany", this.detailsOfTaskany)
  }
  
  deleteTask(){
    this.dbService.deleteTaskByTitle(this.titleTask);
    console.log("Elimino")
    this.router.navigate(['/taskList']);

  } 
  // deleteTaskByTitle

}
