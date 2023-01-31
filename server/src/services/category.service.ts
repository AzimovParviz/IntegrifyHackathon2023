import Category, { CategoryDocument } from "../models/Category";
import { BadRequestError, NotFoundError } from "../helpers/apiError";

const create = async (
  category: CategoryDocument
): Promise<CategoryDocument> => {
  return category.save();
};

const findById = async (categoryId: string): Promise<CategoryDocument> => {
  const foundCategory = await Category.findById(categoryId);

  if (!foundCategory) {
    throw new NotFoundError(`Category ${categoryId} not found`);
  }

  return foundCategory;
};

const findAll = async (): Promise<CategoryDocument[]> => {
  return Category.find().sort({ lastName: 1 });
};

const update = async (
  categoryId: string,
  update: Partial<CategoryDocument>
): Promise<CategoryDocument | null> => {
  const foundCategory = await Category.findByIdAndUpdate(
    categoryId,
    update,
    {
      new: true,
    }
  );

  if (!foundCategory) {
    throw new NotFoundError(`Category ${categoryId} not found`);
  }

  return foundCategory;
};

const deleteCategory = async (
  categoryId: string
): Promise<CategoryDocument | null> => {
  const foundCategory = Category.findByIdAndDelete(categoryId);

  if (!foundCategory) {
    throw new NotFoundError(`Category ${categoryId} not found`);
  }

  return foundCategory;
};

export default {
  create,
  findById,
  findAll,
  update,
  deleteCategory,
};
