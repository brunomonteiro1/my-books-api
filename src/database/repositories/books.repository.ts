import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BookDTO } from 'src/books/book.dto';

@Injectable()
export class BooksRepositoy {
  constructor(private prisma: PrismaService) {}

  async create(data: BookDTO) {
    const book = await this.prisma.book.create({
      data,
    });

    return book;
  }

  async getBooks() {
    const books = await this.prisma.book.findMany({
      orderBy: {
        dateStart: 'desc',
      },
    });

    return books;
  }

  async updateBook(data) {
    const { id, rating, dateStart, dateEnd } = data;

    await this.prisma.book.update({
      where: {
        id: id,
      },
      data: {
        rating,
        dateEnd,
        dateStart,
      },
    });
  }

  async deleteBook(id: string) {
    await this.prisma.book.delete({
      where: {
        id: id,
      },
    });
  }
}
