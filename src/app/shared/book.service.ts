import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks() {
    return of([
      { id: 1, title: 'Java', author: 'James Gosling' },
      { id: 2, title: 'Angular', author: 'Google' },
    ]);
  }
}
