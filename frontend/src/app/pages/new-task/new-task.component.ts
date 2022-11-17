import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
 
 
  listId: string;
  
  
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      (params: Params) => (this.listId = params.listId)
    );
    console.log(this.listId);
  }

  ngOnInit(): void {}
  addTask(value: string) {
    this.taskService
      .createTasks(value,this.listId)
      .subscribe(() =>
        this.router.navigate(['../'], { relativeTo: this.route })
      );
      console.log(value);
      console.log(this.listId);
      
      
  }
}
