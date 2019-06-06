import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray , transferArrayItem } from '@angular/cdk/drag-drop' ;
import {Todo} from '../Model/todo';
import {NoteService} from '../note.service';
import {strictEqual} from 'assert';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
 todos: Todo[] = [];
 doing: Todo[] = [];
 done: Todo[] = [];
 show = false;
  displayValue = 'none';
  name = '';
  content = '';
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(
      (todos) => {
        this.todos = this.noteService.filter(todos, 'todo');
        this.doing = this.noteService.filter(todos, 'doing');
        this.done = this.noteService.filter(todos, 'done');
      }
      );
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray (event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem (event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      const todo = event.item.data;
      todo.status = event.container.element.nativeElement.classList[0];
      this.noteService.updateNotes(todo).subscribe(
        (response) => {
          console.log(response);
        }
      );
    }
  }
  display() {
    this.show = ! this.show;
    this.displayValue = 'block';
  }
  hide() {
    this.displayValue = 'none';
    this.show = ! this.show;
    this.name = '';
    this.content = '';
  }
  addTodo() {
    const todo = new Todo(this.name, this.content, 'todo');
    this.noteService.addTodo(todo).subscribe(
      (response) => {
        this.todos.push(response);
        this.hide();
      }
    );
  }
}
