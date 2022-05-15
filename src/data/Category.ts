interface Category {
    id: number;
    slug: string;
    name: string;
    logo: string;
    joke: boolean;
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
        joke: true,
        video: false,
        audio: false,
        picture: false,
        devinette: false,
    },
    {
        id: 2,
        slug: "video",
        name: "Video",
        logo: "fa-solid fa-video fa-fade",
        joke: false,
        video: true,
        audio: false,
        picture: false,
        devinette: false,
    },
    {
        id: 3,
        slug: "audio",
        name: "Audio",
        logo: "fa-solid fa-music fa-flip",
        joke: false,
        video: false,
        audio: true,
        picture: false,
        devinette: false,
    },
    {
        id: 4,
        slug: "image",
        name: "Image",
        logo: "fa-solid fa-image fa-beat",
        joke: false,
        video: false,
        audio: false,
        picture: true,
        devinette: false,
    },
    {
        id: 5,
        slug: "devinette",
        name: "Devinette",
        logo: "fa-solid fa-question fa-bounce",
        joke: false,
        video: false,
        audio: false,
        picture: false,
        devinette: true,
    },
];

function getCategorySlug(slug: string): Category {
    return CATEGORY.find((category: Category) => category.slug === slug);
}

export { CATEGORY, getCategorySlug };