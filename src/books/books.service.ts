import { Injectable } from '@nestjs/common';
import { BookDTO } from './book.dto';
import { BooksRepositoy } from 'src/database/repositories/books.repository';

@Injectable()
export class BooksService {
  constructor(private booksRepository: BooksRepositoy) {}

  async create(data: BookDTO) {
    return await this.booksRepository.create(data);
  }

  async getBooks() {
    const books = await this.booksRepository.getBooks();

    return books;
  }

  async deleteBook(id: string) {
    await this.booksRepository.deleteBook(id);
  }

  async updateBook(data) {
    return await this.booksRepository.updateBook(data);
  }
}
