import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import Task from './models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webService: WebService) {}

  getLists() {
    return this.webService.get('lists');
  }
  createList(title: string) {
    return this.webService.post('lists', { title });
  }
  getTasks(listId: string) {
    return this.webService.get(`lists/${listId}/tasks`);
  }
  getAllTask(){
    return this.webService.get("getAllTask")
  }
  createTasks(title: string, listId: string) {
    return this.webService.post(`lists/${listId}/tasks`, { title });
  }

  deleteList(listId: string) {
    return this.webService.delete(`lists/${listId}`);
  }
  deleteTask(listId: string, taskId: string) {
    return this.webService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  setCompleted(listId: string, task: Task) {
    return this.webService.patch(`lists/${listId}/task/${task._id}`, {
      completed: !task.completed,
    });
  }

}