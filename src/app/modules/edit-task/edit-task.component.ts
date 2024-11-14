import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ToastService } from 'src/app/toast-service.service';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  editTaskForm!: FormGroup;
  taskId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ServiceService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    // Initialize the form with default values
    this.editTaskForm = this.fb.group({
      title: ['', Validators.required],
      status: [false, Validators.required]  // Default status as false (Pending)
    });

    // Get the task ID from the route
    this.taskId = +this.route.snapshot.paramMap.get('id')!;
    this.getTaskDetails();
  }

  // Fetch task details by ID and populate the form
  getTaskDetails() {
    this.service.getTaskByIdData(this.taskId).subscribe((task: any) => {
      
      this.editTaskForm.patchValue({
        
        title: task.title,
        status: task.completed
      });
    });
  }

  // Update task
  updateTask() {
    const updatedTask = {
      id: this.taskId,
      ...this.editTaskForm.value
    };

    // Call the update API here (using a method in your service)
    this.service.updateTaskData(updatedTask).subscribe(() => {
      this.toastService.showSuccess('Task Updated!', 'Success');

      this.router.navigate(['/tasks']); // Navigate to task list page after update
    });
  }
}
