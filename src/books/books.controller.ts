import { Body, Controller, Post, Get, Delete, Patch } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDTO } from './book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() data: BookDTO): Promise<BookDTO> {
    try {
      return this.booksService.create(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get()
  async getBooks(): Promise<BookDTO[]> {
    try {
      const books = await this.booksService.getBooks();

      return books;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Delete()
  async deleteBook(@Body() data: { id: string }): Promise<void> {
    try {
      const { id } = data;

      return await this.booksService.deleteBook(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Patch()
  async updateBook(@Body() data): Promise<void> {
    try {
      return await this.booksService.updateBook(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
