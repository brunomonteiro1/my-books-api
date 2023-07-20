import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BooksRepositoy } from './repositories/books.repository';

@Module({
  providers: [PrismaService, BooksRepositoy],
  exports: [BooksRepositoy],
})
export class DatabaseModule {}
