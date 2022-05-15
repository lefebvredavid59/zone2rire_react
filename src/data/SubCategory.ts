import { CATEGORY } from './Category';

interface SubCategory {
    id: number;
    name: string;
    slug: string;

    category_id: typeof CATEGORY;
}

let SUBCATEGORY: SubCategory[] = [
    {
        id: 1,
        name: "Toto",
        slug: "toto",

        category_id: 1,
    },
    {
        id: 2,
        name: "TikTok",
        slug: "tiktok",

        category_id: 2,
    },
    {
        id: 3,
        name: "Choum",
        slug: "choum",

        category_id: 3,
    },
    {
        id: 4,
        name: "Devinette Humour Noir",
        slug: "devinette-humour-noir",

        category_id: 5,
    },
    {
        id: 5,
        name: "Qui suis-je?",
        slug: "qui-suis-je",

        category_id: 5,
    },
    {
        id: 6,
        name: "Repondeur",
        slug: "repondeur",

        category_id: 3,
    },
];

function getSubCategoryByCategoryId(categoryId: number): SubCategory[] {
    return SUBCATEGORY.filter(subCategory => subCategory.category_id === categoryId ? subCategory : null);
};

function getSubCategoryBySlug(slug: string): SubCategory {
    return SUBCATEGORY.find(subCategory => subCategory.slug === slug ? subCategory : null);
}


export { SUBCATEGORY, getSubCategoryByCategoryId, getSubCategoryBySlug };
