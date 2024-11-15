import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ToastService } from 'src/app/toast-service.service';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css']
})
export class TaskListViewComponent implements OnInit {
  taskForm: FormGroup;
  getTaskInList: any = [];
  filteredTasks: any = [];
  showDeleteModal: boolean = false;
  taskIdToDelete: number | null = null;

  constructor(
    private router: Router,
    private service: ServiceService,
    private toastService: ToastService,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      searchId: [''],
      searchStatus: ['']
    });
  }

  ngOnInit(): void {
    this.getAllData();

    // Watch for form changes to update results dynamically
    this.taskForm.valueChanges.subscribe(() => {
      this.searchTasks();
    });
  }

  getAllData() {
    this.service.getAllTasksData().subscribe(
      (response: any) => {
        this.getTaskInList = response;
        this.filteredTasks = this.getTaskInList;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  searchTasks() {
    const { searchId, searchStatus } = this.taskForm.value;

    if (!searchId && !searchStatus) {
      // If no filters are applied, call the API to get all data
      this.getAllData();
    } else {
      // Filter tasks based on search criteria without calling the API
      this.filteredTasks = this.getTaskInList.filter((task: any) => {
        const matchesId = searchId ? task.id.toString().includes(searchId) : true;
        const matchesStatus = searchStatus ? (task.completed ? 'Completed' : 'Pending') === searchStatus : true;
        return matchesId && matchesStatus;
      });
    }
  }

  viewTask(taskId: number): void {
    this.router.navigate([`/task/${taskId}`]);
  }

  confirmDelete(taskId: number) {
    this.taskIdToDelete = taskId;
    this.showDeleteModal = true;
  }

  closeModal() {
    this.showDeleteModal = false;
    this.taskIdToDelete = null;
  }

  deleteTask() {
    if (this.taskIdToDelete !== null) {
      this.service.deleteTaskData(this.taskIdToDelete).subscribe(
        () => {
          this.getTaskInList = this.getTaskInList.filter((task: { id: number | null; }) => task.id !== this.taskIdToDelete);
          this.closeModal();
          this.toastService.showInfo('Task Deleted!', 'Info');
          this.getAllData();
          this.taskForm.reset();


        },
        (error) => {
          console.error('Error deleting task:', error);
          this.toastService.showError('Error deleting task!', 'Error');
        }
      );
    }
  }
}
