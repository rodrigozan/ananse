import { BaseService } from './BaseService';
import { IBook } from '../interfaces/IBook';
import { Book } from '../models/BookModel';

export class BookService extends BaseService<IBook> {
    constructor() {
        super(Book);
    }
}

export const bookServiceInstance = new BookService();