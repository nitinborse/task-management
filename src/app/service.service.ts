import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllTasksData() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }

  getTaskByIdData(id: number): Observable<any> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  updateTaskData(task: any) {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task);
  }

  deleteTaskData(taskId: number): Observable<any> {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
  }
}
