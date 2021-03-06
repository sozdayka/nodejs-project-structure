import { IBookViewModel } from "../../../../shared/viewModels";

export interface IBookService{
    get(): Promise<{ errorMessage: string, book: IBookViewModel }>;
    add(book: IBookViewModel): Promise<{ errorMessage: string, book: IBookViewModel }>;
    update(book: IBookViewModel): Promise<{ errorMessage: string, book: IBookViewModel }>;
    delete(id: string): Promise<{ errorMessage: string, book: IBookViewModel }>;
}