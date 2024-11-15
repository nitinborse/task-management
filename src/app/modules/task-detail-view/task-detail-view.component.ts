import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-task-detail-view',
  templateUrl: './task-detail-view.component.html',
  styleUrls: ['./task-detail-view.component.css']
})
export class TaskDetailViewComponent implements OnInit {
  taskId: number | null = null;
  getTask: any;
  description: any;
  status: any;
  userId: any;

  constructor(private route: ActivatedRoute , private router: Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.taskId)

    if (this.taskId) {
      this.service.getTaskByIdData(this.taskId).subscribe(
        (data) => {
          this.getTask = data;
          this.description = this.getTask.title
          this.userId = this.getTask.userId
          this.status = this.getTask.completed

          console.log(this.getTask)
          
        },
        (error) => {
          console.error('Error fetching task data:', error);
        }
      );
  }
  }
  viewTask(){
    this.router.navigate([`/task/${this.taskId}/edit`]);
  }
  
}
