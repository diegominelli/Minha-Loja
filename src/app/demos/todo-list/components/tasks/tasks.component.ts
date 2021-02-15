import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { TasksService } from './../../todo.service';
import { Store } from '../../todo.store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$ : Observable<any[]>;
  subscription: Subscription;

  constructor(private taskservice: TasksService, private store: Store) { }

  ngOnInit(): void {
    this.todolist$ = this.store.getTodoList()
    .pipe(
      map(todolist => todolist.filter(task => task.iniciado && !task.finalizado)));

      this.subscription = this.taskservice.getTodoList$.subscribe();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
