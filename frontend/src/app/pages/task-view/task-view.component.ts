import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import List from 'src/app/models/list';
import Task from 'src/app/models/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  lists: List[] = [];
  tasks: Task[] = [];
  listId: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskService.getLists().subscribe((lists: any) => this.lists = lists);
    // console.log('[+]Task list ',this.taskService);
    this.route.params.subscribe((params: Params) => {
      console.log('[+]Task ',this.listId)
      this.listId = params.listId;
      // if (!this.listId) return;
      this.taskService
        // .getTasks(this.listId)
        .getAllTask()
        .subscribe((tasks: any) => this.tasks = tasks);
        console.log(this.listId);
        
    });
  } 


  onTaskClick(task: Task){
      this.taskService.setCompleted(task._listId,task).subscribe(() => task.completed = !task.completed);
  }
}
