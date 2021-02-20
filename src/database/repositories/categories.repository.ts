import { BaseRepository } from './base.repository';
import { Category } from '../../models';

export class CategoriesRepository extends BaseRepository {
    async list(): Promise<Category[]> {
        return this.db.manyOrNone('SELECT * FROM category');
    }
}
