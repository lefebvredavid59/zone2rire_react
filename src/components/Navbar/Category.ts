interface Category {
    id: number;
    slug: string;
    name:  string;
    logo: string;
}

let CATEGORY: Category[] = [
    {
        id: 1,
        slug: "blague",
        name: "Blague",
        logo: "fa-solid fa-face-grin-tongue-wink fa-spin",
    },
    {
        id: 2,
        slug: "video",
        name: "Video",
        logo : "fa-solid fa-video fa-fade",
    },
    {
        id: 3,
        slug: "audio",
        name: "Audio",
        logo : "fa-solid fa-music fa-flip",
    },
];

function getCategorySlug(slug: string): Category {
    return CATEGORY.find((category: Category) => category.slug === slug);
}

export {CATEGORY, getCategorySlug};
