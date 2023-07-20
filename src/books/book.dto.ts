export type BookDTO = {
  title: string;
  author: string;
  pages: number;
  dateStart?: Date;
  dateEnd?: Date;
  description?: string;
  imageUrl: string;
  rating?: number;
};
