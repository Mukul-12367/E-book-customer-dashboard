import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReaderComponent } from './book-reader.component';

describe('BookReaderComponent', () => {
  let component: BookReaderComponent;
  let fixture: ComponentFixture<BookReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookReaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
