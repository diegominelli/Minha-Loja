import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styles: [
  ]
})
export class TasksFinalizadasComponent implements OnInit {

  todolist$ : Observable<any[]>

  constructor(private taskservice: TasksService) { }

  ngOnInit(): void {
    this.todolist$ = this.taskservice.getTodoList$;
  }

}
