import { IDatabase, IMain } from 'pg-promise';
import { BaseRepository } from './base.repository';
import { Category } from '../models';

export class CategoriesRepository extends BaseRepository {
    constructor(protected readonly db: IDatabase<any>, protected readonly pgp: IMain) {
        super(db, pgp);
    }

    list(): Promise<Category[]> {
        return this.db.manyOrNone('SELECT * FROM category');
    }
}
