import { BookService, bookServiceInstance } from '../services/BookService';
import { BaseController } from './BaseController';
import { IBook } from '../interfaces/IBook';

class BookController extends BaseController<IBook> {
    public bookService: BookService;

    constructor(service: BookService) {
        super(service);
        this.bookService = service;
    }

}

export default new BookController(bookServiceInstance);