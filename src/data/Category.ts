interface Category {
    id: number;
    slug: string;
    name:  string;
    logo: string;
    video: boolean;
    audio: boolean;
    picture: boolean;
    devinette: boolean;
}

let CATEGORY: Category[] = [
    {
        id: 1,
        slug: "blague",
        name: "Blague",
        logo: "fa-solid fa-face-grin-tongue-wink fa-spin",
        video: false,
        audio: false,
        picture: false,
        devinette: false,
    },
    {
        id: 2,
        slug: "video",
        name: "Video",
        logo : "fa-solid fa-video fa-fade",
        video: true,
        audio: false,
        picture: false,
        devinette: false,
    },
    {
        id: 3,
        slug: "audio",
        name: "Audio",
        logo : "fa-solid fa-music fa-flip",
        video: false,
        audio: true,
        picture: false,
        devinette: false,
    },
    {
        id: 4,
        slug: "image",
        name: "Image",
        logo : "fa-solid fa-image fa-beat",
        video: false,
        audio: false,
        picture: true,
        devinette: false,
    },
    {
        id: 5,
        slug: "devinette",
        name: "Devienette",
        logo : "fa-solid fa-question fa-bounce",
        video: false,
        audio: false,
        picture: false,
        devinette: true,
    },
];

function getCategorySlug(slug: string): Category {
    return CATEGORY.find((category: Category) => category.slug === slug);
}

export {CATEGORY, getCategorySlug};
