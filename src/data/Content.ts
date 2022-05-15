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
        name: "Choum : chanter plus faux",
        slug: "choum-chanter-plus-faux",
        audio_link: "http://zone2rire.free.fr/MP3Choum/Zone2Rire_Choum_Chanter_Plus_Faux.mp3",
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
    },
    {
        id: 6,
        name: "Choum : Désenchanter",
        slug: "choum-désenchanter",
        audio_link: "http://zone2rire.free.fr/MP3Choum/Zone2Rire_Choum_Desenchante.mp3",
        date_created: new Date(),

        sub_category_id: 3,
    },
    {
        id: 7,
        name: "Tu fais quoi ?",
        slug: "tu-fais-quoi",
        picture: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/210359797_3061632994081957_8857232218075953268_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=w-3MS019ZH8AX-Y2dMg&_nc_ht=scontent-cdt1-1.xx&oh=00_AT-lB7YcIgn4NQL_9Nf9ZZIa8oNQR0fY1WDuO1HbWUW6KQ&oe=62A5598E",
        date_created: new Date(),

        sub_category_id: 7,
    },
    {
        id: 8,
        name: "Nos amis les animaux",
        slug: "nos-amis-les-animaux",
        video_link: "https://www.youtube.com/embed/F7YBrwoQZE8",
        date_created: new Date(),

        sub_category_id: 2,
    },
];

// Compte le nombre d'article dans la SousCategorie
function countContentBySubCategoryId(subCategoryId: number): number {
    return CONTENT.filter(content => content.sub_category_id === subCategoryId).length;
}

// Recherche les article selon la sous catégorie
function getContentBySubCategoryId(subCategoryId: number): Content[] {
    return CONTENT.filter(content => content.sub_category_id === subCategoryId);
}

// Recherche un article selon la catégorie
function findContentByCategoryId(categoryId: number): Content[] {
    return CONTENT.filter(content => content.sub_category_id.category_id === categoryId);
}

export { CONTENT, countContentBySubCategoryId, getContentBySubCategoryId, findContentByCategoryId };
