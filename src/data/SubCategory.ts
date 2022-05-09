import { CATEGORY } from './Category';

interface SubCategory {
    id: number;
    slug: string;
    name:  string;

    category_id: typeof CATEGORY;
}

let SUBCATEGORY: SubCategory[] = [
    {
        id: 1,
        slug: "toto",
        name: "Toto",
        category_id: 1,
    },
    {
        id: 2,
        slug: "tiktok",
        name: "TikTok",
        category_id: 2,
    },
    {
        id: 3,
        slug: "choom",
        name: "Choom",
        category_id: 3,
    },
];

function getSubCategoryByCategoryId(categoryId: number): SubCategory[] {
    return SUBCATEGORY.filter(subCategory => subCategory.category_id === categoryId);
};

export { SUBCATEGORY, getSubCategoryByCategoryId };
