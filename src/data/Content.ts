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
        picture: null,
        video_link: null,
        audio_link: null,
        blague: "Dans la rue, un homme joue de la trompette. Un policier s’approche et lui dit : – Vous avez un permis pour jouer dans la rue ? Le musicien lui répond que non. – Très bien, accompagnez moi, dit le policier. – Sur quel morceau de musique ? répond le trompettiste.",
        devinette: null,
        reponse: null,
        date_created: new Date(),

        sub_category_id: 1,
    },
    {
        id: 2,
        name: "Devinette 1",
        slug: "devinette-1",
        picture: null,
        video_link: null,
        audio_link: null,
        blague: null,
        devinette: "Qu’est-ce qui entre par une oreille, qui ressort par l’autre mais reste en tête ?",
        reponse: "– Une pioche !",
        date_created: new Date(),

        sub_category_id: 4,
    },
    {
        id: 3,
        name: "Melon Melaiche sont en cours d'histoire",
        slug: "melon-melaiche-sont-en-cours-d-histoire",
        picture: null,
        video_link: null,
        audio_link: null,
        blague: null,
        devinette: "Melon Melaiche sont en cours d'histoire",
        reponse: "Melon étudie Rome et Melèche la Gaule.",
        date_created: new Date(),

        sub_category_id: 5,
    },
];

function countContentBySubCategoryId(subCategoryId: number): number {
    return CONTENT.filter(content => content.sub_category_id === subCategoryId).length;
}

export { CONTENT, countContentBySubCategoryId };
