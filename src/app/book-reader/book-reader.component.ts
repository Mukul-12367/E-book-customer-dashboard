import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/book.service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-reader',
  imports: [NgxExtendedPdfViewerModule, CommonModule],
  templateUrl: './book-reader.component.html',
  styleUrl: './book-reader.component.css'
})
export class BookReaderComponent {
  bookId!: number;
  pdfSrc: string = '';
  currentPage: number = 1;

  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.bookId = +(this.route.snapshot.paramMap.get('id') ?? '0');
    this.pdfSrc = `/assets/ebooks/book-${this.bookId}.pdf`;
    this.loadProgress();
  }

  saveProgress(page: number) {
    localStorage.setItem(`book-${this.bookId}-progress`, page.toString());
  }

  loadProgress() {
    const savedPage = localStorage.getItem(`book-${this.bookId}-progress`);
    if (savedPage) {
      this.currentPage = +savedPage;
    }
  }

  onPageChange(event: any) {
    this.currentPage = event;
    this.saveProgress(this.currentPage);
  }

  goBackToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
