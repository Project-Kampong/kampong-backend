import { db, CategoriesRepository } from '../database';

class CategoriesController {
    constructor(private readonly categoriesRepository: CategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    /**
     * @desc    Get all categories
     * @route   GET /api/categories
     * @access  Public
     */
    getCategories = async (req, res, next) => {
        const categories = await this.categoriesRepository.list();
        res.status(200).json({ success: true, data: categories });
    };
}

export const categoriesController = new CategoriesController(db.categories);
