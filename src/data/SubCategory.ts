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
    {
        id: 4,
        slug: "devinette-humour-noir",
        name: "Devinette Humour Noir",
        category_id: 5,
    },
    {
        id: 5,
        slug: "devinette-melon-melaiche",
        name: "Melon Melaiche",
        category_id: 5,
    }
];

function getSubCategoryByCategoryId(categoryId: number): SubCategory[] {
    return SUBCATEGORY.filter(subCategory => subCategory.category_id === categoryId ? subCategory : null);
};

export { SUBCATEGORY, getSubCategoryByCategoryId };
