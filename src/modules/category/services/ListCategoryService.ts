import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class ListCategoryService {
    public async execute(): Promise<Category[]> {
        const categoryRepository = new CategoryRepository();

        // varias regras
        const categorys = await categoryRepository.list();

        return categorys;
    }
}