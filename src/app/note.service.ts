import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './Model/todo';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  link = 'http://localhost:3000/api/Notes';

  constructor(private http: HttpClient) {
  }

  getNotes(): Observable<Todo[]> {
    return this.http.get<Todo[]> (this.link);
  }

  filter(tab, proprety) {
    return tab.filter(
      (todo) => {
        return todo.status === proprety ;
      }
    );
}
  updateNotes(todo: Todo) {
    return this.http.put(this.link, todo);
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.link, todo);
  }
}
