import { SUBCATEGORY } from './SubCategory';

interface Content {
    id: number;
    name: string;
    slug: string;
    picture: string;
    video_link: string;
    audio_link: string;
    blague: string;
    devinette: string;
    reponse: string;

    date_created: Date;

    sub_category_id: typeof SUBCATEGORY;
}

let CONTENT: Content[] = [
    {
        id: 1,
        name: "Blague 1",
        slug: "blague-1",
        blague: "Dans la rue, un homme joue de la trompette. Un policier s’approche et lui dit : – Vous avez un permis pour jouer dans la rue ? Le musicien lui répond que non. – Très bien, accompagnez moi, dit le policier. – Sur quel morceau de musique ? répond le trompettiste.",
        date_created: new Date(),

        sub_category_id: 1,
    },
    {
        id: 2,
        name: "Devinette 1",
        slug: "devinette-1",
        devinette: "Qu’est-ce qui entre par une oreille, qui ressort par l’autre mais reste en tête ?",
        reponse: "– Une pioche !",
        date_created: new Date(),

        sub_category_id: 4,
    },
    {
        id: 3,
        name: "Qui suis-je ? N°1",
        slug: "qui-suis-je-1",
        devinette: "Je suis plus haut que le plus haut, <br />Je suis plus bas que le plus bas, <br />Je suis plus droit que le plus droit, <br />Je suis plus gauche que le plus gauche.",
        reponse: "Rien",
        date_created: new Date(),

        sub_category_id: 5,
    },
    {
        id: 4,
        name: "Choum Best of Etienne Daho",
        slug: "choum-best-of-etienne-daho",
        audio_link: "https://www.coolspot.fr/sons/Choum---Best-of-Etienne-Daho.mp3",
        date_created: new Date(),

        sub_category_id: 3,
    },
    {
        id: 5,
        name: "Répondeur 200 balles",
        slug: "repondeur-200-balles",
        audio_link: "https://www.coolspot.fr/sons/8609d-200-balles.mp3",
        date_created: new Date(),

        sub_category_id: 6,
    }
];

function countContentBySubCategoryId(subCategoryId: number): number {
    return CONTENT.filter(content => content.sub_category_id === subCategoryId).length;
}

function filterBySubCategoryId(subCategoryId: number): Content[] {
    return CONTENT.filter(content => content.sub_category_id === subCategoryId);
}

export { CONTENT, countContentBySubCategoryId, filterBySubCategoryId };
