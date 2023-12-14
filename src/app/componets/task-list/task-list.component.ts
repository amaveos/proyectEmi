import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DbService } from '../../_service/db.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule, MatSlideToggleModule],
  providers: [DbService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  displayedColumns: string[] = ['title', 'dueDate', 'status', 'actions'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private dbService: DbService) {

  }

  ngOnInit() {
    this.dbService.getTaskList().subscribe(task => this.dataSource.data = task);
    console.log(this.dataSource.data)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
