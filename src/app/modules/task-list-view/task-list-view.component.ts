// task-list-view.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css']
})
export class TaskListViewComponent implements OnInit {
  getTaskInList: any = [];

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.getAllData();
  }
  
  getAllData() {
    this.service.getAllTasksData().subscribe(
      (response: any) => {
        this.getTaskInList = response;  // Assuming the response is directly the list of tasks
      },
      (error) => {
        console.error(error);  // Log any errors
      }
    );
  }

  viewTask(taskId: number): void {
    this.router.navigate([`/task/${taskId}`]);
  }
}
